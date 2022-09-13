/* eslint-disable consistent-return */
import { ReactNode, useCallback, useEffect, useState } from "react";

import { SCarouselBox, SItemBox, SNext, SPrev } from "./style";

const classNameMatcher = (itemId: number, indexArr: number[]) => {
  const currentI = indexArr.findIndex((i) => i === itemId);
  const className = ["left", "main", "right"];

  if (currentI > -1) {
    return className[currentI];
  }

  return "";
};

interface CarouselItem {
  item: ReactNode;
  id: number;
}

interface CarouselProps {
  items: CarouselItem[];
  animationTime?: number;
}

const throttle = (() => {
  let throttled = false;

  return (fn: (...args: any[]) => void, timeout: number, ...args: any[]) => {
    if (!throttled) {
      throttled = true;
      fn(...args);
      setTimeout(() => {
        throttled = false;
      }, timeout);
    }
  };
})();

const Carousel = ({ items, animationTime = 800 }: CarouselProps) => {
  if (items.length < 3) {
    const concatenation = items.map((e, i) => ({ ...e, id: i + items.length }));
    items = items.concat(concatenation);
  }
  const N = items.length;
  const [index, setIndex] = useState([N - 1, 0, 1]); // [left, front, right]

  const mainIndexer = useCallback(
    (command: "next" | "prev") => {
      const step = command === "next" ? 1 : -1;
      const nextIndex: number[] = [];

      for (let i = 0; i < index.length; i += 1) {
        nextIndex[i] = (((index[i] + step) % N) + N) % N;
      }

      setIndex(nextIndex);
    },
    [N, index]
  );

  const throttledIndexer = useCallback(
    (command: "next" | "prev") => {
      throttle(mainIndexer, animationTime / 1.8, command);
    },
    [animationTime, mainIndexer]
  );

  useEffect(() => {
    const timer = setTimeout(() => mainIndexer("next"), 2500);

    return () => clearTimeout(timer);
  }, [mainIndexer]);

  return (
    <SCarouselBox>
      <SPrev onClick={() => throttledIndexer("prev")} />
      {items.map((e) => (
        <SItemBox
          animationTime={animationTime}
          className={`${classNameMatcher(e.id, index)}`}
          key={e.id}
        >
          {e.item}
        </SItemBox>
      ))}
      <SNext onClick={() => throttledIndexer("next")} />
    </SCarouselBox>
  );
};

export default Carousel;
