import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { ReactComponent as ArrowDown } from "./img/arrow-down.svg";
import { ReactComponent as ArrowUp } from "./img/arrow-up.svg";
import { AccordionProps } from "./Accordion";

interface ExtraStyles {
  extraStyles?: FlattenSimpleInterpolation;
}

export const SCardBox = styled.details.attrs({
  open: true,
})`
  display: flex;
  flex-flow: column wrap;
  width: 320px;
  background-color: white;
  box-shadow: 0px 0px 3px grey;
  border-radius: 3px;

  ${({ extraStyles }: ExtraStyles) => extraStyles}
`;

export const STitleBox = styled.summary`
  display: flex;
  width: 100%;
  height: max-content;
  align-items: center;
  font-weight: bold;
  

  ${({ extraStyles }: ExtraStyles) => extraStyles}
`;

export const STitleH3 = styled.h3`
  display: block;
  width: 100%;
  margin: 0;
  padding: 15px;

  ${({ extraStyles }: ExtraStyles) => extraStyles}
`;

interface STitleButtonProps {
  bgColor?: string;
  padding?: string;
  extraStyles?: FlattenSimpleInterpolation;
}

export const STitleButton = styled.button`
  display: flex;
  justify-content: start;
  width: 100%;
  height: max-content;
  font-size: 1rem;
  border: 0px;
  padding: 15px;
  background-color: inherit;
  font-weight: bold;
  cursor: pointer;

  ${({ bgColor, padding, extraStyles }: STitleButtonProps) => css`
    background-color: ${bgColor || "inherit"};
    padding: ${padding};

    ${extraStyles}
  `}
`;

export const ArrowUpSVG = styled(ArrowUp)`
  margin-left: auto;
`;

export const ArrowDownSVG = styled(ArrowDown)`
  margin-left: auto;
`;

export const SContentsBox = styled.div`
  overflow: hidden;
  transition: 400ms all;

  ${({ isCollapsable }: Pick<AccordionProps, "isCollapsable">) => css`
    height: ${isCollapsable ? "0px" : "auto"};
  `}
`;
