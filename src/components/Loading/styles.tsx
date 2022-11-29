import styled, { css } from "styled-components";

export function animationDelay(arr: string[]) {
  return arr.reduce((a, _, i) => {
    return (a += `& span:nth-child(${i}) {
      animation-delay: ${300 * (i - 1)}ms;
    }`);
  }, "");
}

export const Dot = styled.span<{ colors: string[] }>`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 20px;
  animation: pop 1.3s linear infinite;

  ${({ colors }) =>
    colors &&
    css`
      @keyframes pop {
        0% {
          top: 0%;
          background-color: ${colors[0]};
        }
        25% {
          top: -7%;
        }
        50% {
          top: 0%;
          background-color: ${colors[1]};
        }
        75% {
          top: 7%;
          background-color: ${colors[2]};
        }
        100% {
          top: 0%;
          background-color: ${colors[0]};
        }
      }
    `}
`;

export const StyledLoading = styled.div<{ childrenDelay: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  width: 100%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0);

  ${({ childrenDelay }) => childrenDelay}
`;
