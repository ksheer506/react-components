import { useContext, useEffect } from "react";
import { MainCtx, reSizeCtx } from "./Modal";

// TODO: 여기서 Modal의 크기를 설정하는 방법?
const useModal = (w, h) => {
  const openModal = useContext(MainCtx);
  const setSize = useContext(reSizeCtx);

  if (!openModal || !setSize) {
    throw new Error("useModal was used outside of ModalCtx.Provider.")
  }

  useEffect(() => {
    if (!w || !h) return;

    if (typeof w === "number") {
      w = `${w}px`;
    }
    if (typeof h === "number") {
      h = `${h}px`;
    }
    setSize({ width: w, height: h });
  }, [])

  return openModal;
}

export default useModal;