import styled, { css, keyframes } from "styled-components";

import { ModalStyle, Position } from "./types";

export interface BackgroundProps {
  isMount: boolean;
}

type ModalMainProps = ModalStyle & BackgroundProps;

const isPixel = ({ x, y }: Exclude<Position, undefined>) => {
  return x.match(/px/g) && y.match(/px/);
};

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;


export const Background = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  background-color: #33373d80;
  opacity: 0.6;
  z-index: 99;

  ${({ isMount }: BackgroundProps) => css`
    animation: ${isMount ? fadeIn : fadeOut} 0.3s linear;
  `}
  animation-fill-mode: forwards;
`;

export const ModalMain = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 1px 3px rgba(143, 143, 143, 0.897);
  box-sizing: border-box;
  z-index: 100;
  overflow: hidden;

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}

  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}

  ${({ isMount, position = { x: "50%", y: "50%" } }: ModalMainProps) => css`
    animation: ${isMount ? fadeIn : fadeOut} 0.3s ease-out;

    ${position &&
    css`
      left: ${position.x};
      top: ${position.y};
      transform: ${isPixel(position) && "translate(0, 0)"};
    `}
  `}
  animation-fill-mode: forwards;
`;

export const Close = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0%;
  top: 0%;
  transform: translate(-50%, 100%);
  background-color: rgba(255, 255, 255, 0);
  border: 0px;
  color: red;
  font-size: 1.5rem;
  cursor: pointer;

  & > img {
    width: 20px;
    height: 20px;
  }
`;
