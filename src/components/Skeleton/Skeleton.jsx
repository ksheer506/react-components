import styled, { css, ThemeProvider } from "styled-components";
import { Skelcontainer, SkelItemDefault } from "./styles";

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
