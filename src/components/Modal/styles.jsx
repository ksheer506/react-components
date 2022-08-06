import styled, { css } from "styled-components";
import { fadeIn, fadeOut, upward } from "./animation";

export const Background = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  background-color: #696969ba;
  opacity: 0.6;
  ${(props) => css`
    animation: ${props.isMount ? fadeIn : fadeOut} 0.4s linear;
  `}

  z-index: 99;
  animation-fill-mode: forwards;
`;

export const ModalMain = styled.div`
  ${(props) => css`
    width: ${props.width};
    height: ${props.height};
    animation: ${props.isMount ? fadeIn : fadeOut} 0.4s ease-out;
  `}

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 1px 1px 5px rgb(206, 206, 206);
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  z-index: 100;
  overflow: hidden;
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
