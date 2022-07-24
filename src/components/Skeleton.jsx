import styled, { css, keyframes } from "styled-components";

const wave = keyframes`
  0% {
      opacity: 0.2;
    }
  50% {
      opacity: 0.5;
  }
  100% {
      opacity: 0.2;
  }
`;

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
`;

export const Rectangle = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  background-color: #f8f8f8;
  animation: ${wave} 1.5s ease infinite;

  ${(props) =>
    props.width &&
    props.height &&
    css`
      width: ${props.width};
      height: ${props.height};
    `}

  &::before {
    content: "";
    display: block;
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #dbdbdb;
  }
`;

export const Circle = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #f8f8f8;

  ${(props) =>
    props.radius &&
    css`
      width: ${props.radius};
      height: ${props.radius};
      border-radius: ${props.radius};
    `}

  &::before {
    content: "";
    display: block;
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #dbdbdb;
    animation: ${wave} 1.5s ease infinite;
  }
`;


export default function Skeleton({ width, height, children }) {
  return (
    <Skelcontainer width={width} height={height}>
      {children}
    </Skelcontainer>
  );
}
