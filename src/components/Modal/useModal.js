import { useContext } from "react";
import { MainCtx } from "./Modal";

const useModal = () => {
  const openModal = useContext(MainCtx);

  if (!openModal) {
    throw new Error("useModal was used outside of ModalCtx.Provider.")
  }
  return openModal;
}

export default useModal;