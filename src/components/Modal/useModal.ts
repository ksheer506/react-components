/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { CustomizeCtx, MainCtx } from "./ModalContext";
import { Position, Size } from "./types";
import useAppContext from "./useAppContext";

type useModalProps =
  | {
      width?: string;
      height?: string;
      position?: Position;
      borderRadius?: string;
      boxShadow?: string;
    }
  | undefined;

const useModal = (props?: useModalProps) => {
  const { width, height, position } = props || {};
  const { openModal, closeModal } = useAppContext(MainCtx);
  const { setSize, setPosition } = useAppContext(CustomizeCtx);

  if (!openModal || !closeModal || !setSize || !setPosition) {
    throw new Error("useModal was used outside of ModalCtx.Provider.");
  }

  useEffect(() => {
    setSize((prev: Size) => {
      const { width: prevWidth, height: prevHeight } = prev;
      const nextWidth = width || prevWidth;
      const nextHeight = height || prevHeight;

      return { width: nextWidth, height: nextHeight };
    });
  }, [width, height]);

  useEffect(() => {
    if (!position) return;
    const { x, y } = position;

    setPosition({ x, y });
  }, [position]);

  return { openModal, closeModal };
};

export default useModal;
