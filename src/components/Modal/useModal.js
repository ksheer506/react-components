import { useContext } from "react";
import { MainCtx } from "./Modal";

const useModal = () => {
  return useContext(MainCtx);
}

export default useModal;