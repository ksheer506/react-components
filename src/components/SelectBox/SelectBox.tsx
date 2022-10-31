/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, RefObject, useCallback, useState } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as UpDown } from "./updown.svg";
import useToggleFolding from "./useToggleFolding";

interface Item {
  value: string;
  content?: ReactNode;
  color: string;
}

interface OptionProps extends Item {
  onClick: () => void;
}

interface OptionListProps {
  expand: boolean;
  ref: RefObject<HTMLUListElement>;
}

interface SelectBoxProps {
  options: Item[];
  placeholder: string;
}

const SSelect = styled.button`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 200px;
  height: 40px;
  padding: 5px 10px;
  font-size: 0.9rem;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #d8d8d8;
  border-radius: 5px;
  color: #575757;
  box-shadow: 0px 0px 2px #d3d3d3;
  cursor: pointer;
`;

const Selected = styled.span``;

const ScrollSVG = styled(UpDown).attrs({
  viewBox: "0 1 22 24",
})`
  position: absolute;
  fill: #a1a1a1;
  right: 4px;
  width: 20px;
  height: 20px;
  transition: 400ms all;

  ${SSelect}:hover > & {
    fill: #494949;
  }
`;

const SUList = styled.ul<OptionListProps>`
  position: absolute;
  left: 0;
  top: calc(100% + 5px);
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 0px;
  padding: 0;
  margin: 0;
  border-radius: 3px;
  box-shadow: 0px 0px 5px #d3d3d3;
  transition: 400ms all;
  overflow: hidden;
`;

const SOption = styled.li`
  flex: 0 0 25px;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  background-color: white;
  color: #575757;
  padding: 5px;
  list-style: none;
  transition: 400ms all;

  &:hover {
    transition: 400ms all;
  }

  ${({ color }) => css`
    &:hover {
      background-color: ${color};
      color: white;
    }
  `}
`;

const Option = ({ value, content, color, onClick }: OptionProps) => {
  return (
    <SOption color={color} onClick={onClick}>
      {content || value}
    </SOption>
  );
};

const SelectBox = ({ options, placeholder }: SelectBoxProps) => {
  const [selected, setSelected] = useState(placeholder);
  const { contentRef, isCollapsed, setIsCollapsed } =
    useToggleFolding<HTMLUListElement>();

  const onClick = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  return (
    <SSelect onClick={onClick}>
      <ScrollSVG />
      <Selected>{selected}</Selected>

      <SUList expand={!!isCollapsed} ref={contentRef}>
        {options.map(({ value, content, color }, i) => (
          <Option
            value={value}
            content={content}
            color={color}
            onClick={() => setSelected(value)}
            key={i}
          />
        ))}
      </SUList>
    </SSelect>
  );
};

export default SelectBox;