/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from "react";

const useToggleFolding = <T extends HTMLElement>() => {
  const [isCollapsed, setIsCollapsed] = useState<boolean | null>(null);
  const contentRef = useRef<T>(null);

  const expand = useCallback((e: T) => {
    e.style.height = `${e.scrollHeight}px`;
  }, []);

  const collapse = useCallback((e: T) => {
    e.style.height = "0px";
  }, []);

  useEffect(() => {
    const contentBox = contentRef.current;

    // isCollapsed의 초기값을 false로 두면 처음 마운트 시 요소가 펼쳐졌다 접히는 현상 발생
    if (!contentBox || isCollapsed === null) return;

    if (isCollapsed) {
      expand(contentBox);

      return;
    }

    collapse(contentBox);
  }, [isCollapsed]);

  return { contentRef, isCollapsed, setIsCollapsed };
};

export default useToggleFolding;
