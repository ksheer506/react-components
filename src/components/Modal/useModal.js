import { useContext, useEffect } from "react";
import { MainCtx, CustomizeCtx } from "./ModalContext";

const unitConverter = (input) => {
  if (!input) return {};

  for (const key in input) {
    if (typeof input[key] === "number") {
      const value = input[key];

      input[key] = `${value}px`;
    }
  }

  return input;
}

const useModal = (size, position) => {
  const openModal = useContext(MainCtx);
  const { setSize, setPosition } = useContext(CustomizeCtx);

  if (!openModal || !setSize) {
    throw new Error("useModal was used outside of ModalCtx.Provider.")
  }
  if (typeof position === "number") {
    size = { w: size, h: position };
    position = undefined;
  }

  useEffect(() => {
    if (!size) return;
    const { w, h } = unitConverter(size);

    setSize({ width: w, height: h });
  }, [size]);

  useEffect(() => {
    if (!position) return;
    const { x, y } = unitConverter(position);

    setPosition({ x, y });
  }, [position]);

  return openModal;
}

export default useModal;