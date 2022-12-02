import { memo, ReactNode } from "react";
import styled from "styled-components";

interface CarouselItemProps {
  item: ReactNode;
  className: "" | "left" | "main" | "right";
  animationTime: number;
}

export const CarouselItem = memo(
  ({ item, animationTime, className }: CarouselItemProps) => {
    return (
      <SItemList animationTime={animationTime} className={className}>
        {item}
      </SItemList>
    );
  }
);

const SItemList = styled.li<Pick<CarouselItemProps, "animationTime">>`
  flex: 0 0 100vw;
  position: absolute;
  width: 100%;
  right: -100%;
  z-index: -1;
  overflow: hidden;
  transition: ${({ animationTime }) => `${animationTime}ms`} all;

  &.main {
    right: 0%;
    z-index: 1;
  }

  &.left {
    right: 100%;
    z-index: -1;
  }

  &.right {
    right: -100%;
    z-index: -1;
  }
`;
