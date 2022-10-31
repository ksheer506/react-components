/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, RefObject, useCallback, useState } from "react";
import { ScrollSVG, SOption, SSelect, SUList } from "./style";

import useToggleFolding from "./useToggleFolding";

interface Item {
  value: string;
  content?: ReactNode;
  color: string;
}

interface OptionProps extends Item {
  onClick: () => void;
}

export interface OptionListProps {
  expand: boolean;
  ref: RefObject<HTMLUListElement>;
}

interface SelectBoxProps {
  options: Item[];
  placeholder: string;
}



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
      <span>{selected}</span>

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
