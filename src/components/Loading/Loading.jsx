import React from "react";
import { animationDelay, Dot, StyledLoading } from "./styles";

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
