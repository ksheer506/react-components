import styled, { css } from "styled-components";

import { OptionListProps } from "./SelectBox";
import { ReactComponent as UpDown } from "./updown.svg";

export const SSelect = styled.button`
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

export const ScrollSVG = styled(UpDown).attrs({
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

export const SUList = styled.ul<OptionListProps>`
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

export const SOption = styled.li`
  flex: 0 0 33px;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  background-color: #ffffff;
  color: #464646;
  padding: 5px;
  list-style: none;
  box-sizing: border-box;
  overflow: hidden;
  transition: 400ms all;
  z-index: 5;

  &:hover {
    background-color: #f0f0f0;
    transition: 400ms all;
  }

  ${({ color }) =>
    color &&
    css`
      &:hover {
        background-color: ${color};
        color: white;
      }
    `}
`;
