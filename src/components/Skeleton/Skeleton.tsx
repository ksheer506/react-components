import styled, { css, keyframes } from "styled-components";

interface SkeletonDefaultProps {
  bgColor?: string;
  animation?: "blink" /* | "wave" */;
  className?: string;
}

interface RectangleProps extends SkeletonDefaultProps {
  width: string;
  height: string;
}

interface CircleProps extends SkeletonDefaultProps {
  radius: string;
}

export const Rectangle = ({
  width,
  height,
  bgColor,
  animation,
  className,
}: RectangleProps) => {
  return (
    <RectangleSkel
      width={width}
      height={height}
      bgColor={bgColor}
      animation={animation}
      className={className}
    />
  );
};

export const Circle = ({ radius, bgColor, animation, className }: CircleProps) => {
  return (
    <CircleSkel
      radius={radius}
      bgColor={bgColor}
      animation={animation}
      className={className}
    />
  );
};

/* 스타일 */
export const blink = keyframes`
  0% {
      opacity: 0.5;
    }
  50% {
      opacity: 1;
  }
  100% {
      opacity: 0.5;
  }
`;

export const wave = keyframes`
  0% {
      left: 0%;
    }
  50% {
      left: 50%;
  }
  100% {
      left: 100%;
  }
`;

const SkelItemDefault = styled.div<SkeletonDefaultProps>`
  position: relative;
  overflow: hidden;
  background-color: ${({ bgColor }) => bgColor || "#f5f5f5"};
  animation: ${blink} 1.5s ease infinite;
`;

const RectangleSkel = styled(SkelItemDefault)<RectangleProps>`
  border-radius: 4px;

  ${({ width, height, bgColor }) =>
    css`
      width: ${width};
      height: ${height};
      background-color: ${bgColor};
    `}
`;

const CircleSkel = styled(SkelItemDefault)<CircleProps>`
  border-radius: 100%;

  ${({ radius, bgColor }) =>
    css`
      width: ${radius};
      height: ${radius};
      background-color: ${bgColor};
    `}
`;
