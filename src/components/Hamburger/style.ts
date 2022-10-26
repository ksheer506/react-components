import styled, { css } from "styled-components";
import { HamburgerProps } from "./Hamburger";

type BoxProps = Pick<HamburgerProps, "size">;
type ButtonProps = Pick<HamburgerProps, "isClicked" | "thickness">;
type PattyProps = Pick<HamburgerProps, "thickness">;

export const HamburgerBox = styled.div<BoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  width: 30px;
  height: 30px;
  cursor: pointer;

  ${({ size }) =>
    size &&
    css`
      width: ${size}px;
      height: ${size}px;
    `}
`;

export const PattyButton = styled.button<ButtonProps>`
  position: relative;
  display: flex;
  width: 60%;
  height: 60%;
  flex-flow: column nowrap;
  justify-content: center;
  row-gap: 3px;
  border: 0px;
  padding: 0px;
  margin: 0px;
  background-color: rgba(0, 0, 0, 0);

  ${({ thickness }) =>
    thickness &&
    css`
      /* Patty 두께에 비례해 자연스러운 값을 지정 */
      row-gap: ${Math.ceil(thickness * 1.1)}px;
      width: ${Math.ceil(thickness * 7.9)}px;
    `}

  ${({ isClicked }) =>
    isClicked &&
    css`
      & > span:nth-child(1) {
        transform: translate(20%, -50%) rotate(45deg);
      }

      & > span:nth-child(2) {
        opacity: 0;
      }

      & > span:nth-child(3) {
        transform: translate(20%, 50%) rotate(-45deg);
      }
    `}
`;

export const Patty = styled.span<PattyProps>`
  display: block;
  position: relative;
  width: 100%;
  height: ${({ thickness }) => (thickness ? `${thickness}px` : "2px")};
  background-color: black;
  transition: 350ms all ease-in;

  &:nth-child(1) {
    transform-origin: 0 0;
  }

  &:nth-child(3) {
    transform-origin: 0 100%;
  }
`;
