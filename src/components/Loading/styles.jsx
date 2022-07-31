import styled, { css } from "styled-components";

export function animationDelay(arr) {
  let style = "";

  for (let i = 2; i <= arr.length; i++) {
    style += `& span:nth-child(${i}) {
      animation-delay: ${300 * (i - 1)}ms;
    }`;
  }

  return style;
}

export const Dot = styled.span`
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

export const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  width: 100%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0);
  ${(props) => props.childrenDelay}
`;
