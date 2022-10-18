/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
import { ReactNode, useCallback, useEffect, useState } from "react";

import { SCarouselBox, SItemList, SNext, SPrev } from "./style";

function classNameMatcher(itemId: number, indexArr: number[]) {
  const currentI = indexArr.findIndex((i) => i === itemId);
  const className = ["left", "main", "right"];

  if (currentI > -1) {
    return className[currentI];
  }

  return "";
}

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

const Carousel = ({ items, animationTime = 600 }: CarouselProps) => {
  if (items.length < 3) {
    const concatenation = [null, null].map((_, i) => ({
      ...items[i % items.length],
      id: i + items.length,
    }));
    items = items.concat(concatenation);
  }
  const N = items.length;
  const [index, setIndex] = useState([N - 1, 0, 1]); // [left, front, right]

  const mainIndexer = (command: "next" | "prev") => {
    const step = command === "next" ? 1 : -1;
    const nextIndex: number[] = [];

    for (let i = 0; i < index.length; i += 1) {
      nextIndex[i] = (((index[i] + step) % N) + N) % N;
    }

    setIndex(nextIndex);
  };

  const throttledIndexer = useCallback(
    (command: "next" | "prev") => {
      throttle(mainIndexer, animationTime * 1.1, command);
    },
    [animationTime, mainIndexer]
  );

  useEffect(() => {
    const timer = setTimeout(() => mainIndexer("next"), 3500);

    return () => clearTimeout(timer);
  }, [mainIndexer]);

  return (
    <SCarouselBox>
      <SPrev onClick={() => throttledIndexer("prev")} />

      <ul>
        {items.map(({ item, id }) => (
          <SItemList
            animationTime={animationTime}
            className={`${classNameMatcher(id, index)}`}
            key={id}
          >
            {item}
          </SItemList>
        ))}
      </ul>

      <SNext onClick={() => throttledIndexer("next")} />
    </SCarouselBox>
  );
};

export default Carousel;
