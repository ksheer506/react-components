import React from "react";
import styled, { css } from "styled-components";

function animationDelay(arr) {
  let style = "";

  for (let i = 2; i <= arr.length; i++) {
    style += `& span:nth-child(${i}) {
      animation-delay: ${300 * (i - 1)}ms;
    }`;
  }

  return style;
}

const Dot = styled.span`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 20px;
  animation: pop 1.3s linear infinite;
  ${(props) =>
    props.colors &&
    css`
      @keyframes pop {
        0% {
          top: 0%;
          background-color: ${props.colors[0]};
        }
        25% {
          top: -7%;
        }
        50% {
          top: 0%;
          background-color: ${props.colors[1]};
        }
        75% {
          top: 7%;
          background-color: ${props.colors[2]};
        }
        100% {
          top: 0%;
          background-color: ${props.colors[0]};
        }
      }
    `}
`;

const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  width: 100%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0);
  ${(props) => props.childrenDelay}
`;

const defaultColor = ["#8dc8fc", "#cdeb60", "#fca78d"];

const Loading = ({ colors = defaultColor, number = 3 }) => {
  const dotArr = new Array(number).fill(0);

  return (
    <StyledLoading childrenDelay={animationDelay(dotArr)}>
      {dotArr.map((el, i) => (
        <Dot colors={colors} key={i} />
      ))}
    </StyledLoading>
  );
};

export default Loading;
