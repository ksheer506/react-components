/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
import { ReactNode, useCallback, useEffect, useState } from "react";
import { CarouselItem } from "./CarouselItem";

import { SCarouselBox, SNext, SPrev } from "./style";

interface CarouselItemType {
  item: ReactNode;
  id: number;
}

interface CarouselProps {
  items: CarouselItemType[];
  animationTime?: number;
}

type Command = "next" | "prev";

const classNameMatcher = (itemId: number, indexArr: number[]) => {
  const currentI = indexArr.findIndex((i) => i === itemId);
  const CLASSNAME = ["left", "main", "right"] as const;

  if (currentI > -1) {
    return CLASSNAME[currentI];
  }

  return "";
};

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

  const mainIndexer = useCallback((command: Command) => {
    const step = command === "next" ? 1 : -1;

    setIndex((prev) => prev.map((e) => (((e + step) % N) + N) % N));
  }, []);

  const throttledIndexer = useCallback(
    (command: Command) => {
      throttle(mainIndexer, animationTime * 1.1, command);
    },
    [animationTime]
  );

  useEffect(() => {
    const timer = setInterval(() => mainIndexer("next"), 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <SCarouselBox>
      <SPrev onClick={() => throttledIndexer("prev")} />

      <ul>
        {items.map(({ item, id }) => (
          <CarouselItem
            item={item}
            animationTime={animationTime}
            className={`${classNameMatcher(id, index)}`}
          />
        ))}
      </ul>

      <SNext onClick={() => throttledIndexer("next")} />
    </SCarouselBox>
  );
};

export default Carousel;
