import styled, { css, ThemeProvider } from "styled-components";
import { blink, wave } from "./animation";


const Skelcontainer = styled.div`
  display: flex;
  position: relative;
  flex-flow: column nowrap;
  row-gap: 5px;
  justify-content: center;

  ${(props) =>
    props.width &&
    props.height &&
    css`
      width: ${props.width};
      height: ${props.height};
    `}

  ${({ theme }) =>
    theme.animation === "wave" &&
    css`
      &::before {
        content: "";
        display: block;
        overflow: hidden;
        position: absolute;
        left: -20%;
        width: 20px;
        height: 100%;
        filter: blur(35px);
        transform: skewX(-20deg);
        background-color: #a7a7a7;
        /* z-index: 2; */
        animation: ${wave} 1s linear infinite;
      }
    `}
`;

const SkelItemDefault = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #f5f5f5;

  // TODO: wave가 자식 컴포넌트들 안에서 잘리도록 

  ${({ theme }) =>
    theme.animation === "blink"
      ? css`
          animation: ${blink} 1.5s ease infinite;
        `
: css`
    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #f0f0f0;
      /* z-index: 0; */
    }
  `}
`;

export const Rectangle = styled(SkelItemDefault)`
  border-radius: 5px;

  ${(props) =>
    props.width &&
    props.height &&
    css`
      width: ${props.width};
      height: ${props.height};
    `}
`;

export const Circle = styled(SkelItemDefault)`
  border-radius: 100%;

  ${(props) =>
    props.radius &&
    css`
      width: ${props.radius};
      height: ${props.radius};
    `}
`;

export default function Skeleton({ width, height, children, animation = "blink" }) {
  return (
    <ThemeProvider theme={{ animation }}>
      <Skelcontainer width={width} height={height}>
        {children}
      </Skelcontainer>
    </ThemeProvider>
  );
}
