import { useContext} from "react";
import { OpenCtx } from "./ModalContext";
import { Background, Close, ModalMain } from "./styles";

// TODO: 화면 줄어들 때 비율 유지하면서 크기 줄이기
// TODO: Modal 위치 커스텀 가능하도록 수정
const Modal = ({ width, height, position, background = true, content }) => {
  const { isOpen, setIsOpen } = useContext(OpenCtx);

  return (
    <>
      {background && <Background isMount={isOpen} onClick={() => setIsOpen(false)} />}
      <ModalMain isMount={isOpen} width={width} height={height} position={position}>
        <Close onClick={() => setIsOpen(false)}>
          <img src="https://img.icons8.com/color-glass/48/000000/delete-sign.png" />
        </Close>
        {content}
      </ModalMain>
    </>
  );
};


export default Modal;
