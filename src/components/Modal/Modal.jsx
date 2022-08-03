import { useEffect, useState } from "react";
import { Background, Close, ModalMain } from "./styles";

// TODO: 화면 줄어들 때 비율 유지하면서 크기 줄이기
// TODO: 다른 컴포넌트 어디서 사용하든 항상 root 바로 아래에 위치할 수 있도록
const Modal = ({ width, height, background = true, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [mount, setMount] = useState(true);

  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    let timerId;

    if (!isOpen) {
      timerId = setTimeout(() => setMount(false), 1000);
    }

    return () => clearTimeout(timerId);
  }, [isOpen]);

  return (
    <>
      {mount && (
        <div className="modal">
          {background && <Background isMount={isOpen} onClick={() => closeModal()} />}
          <ModalMain isMount={isOpen} width={width} height={height}>
            <Close onClick={() => closeModal()}>
              <img src="https://img.icons8.com/color-glass/48/000000/delete-sign.png" />
            </Close>
            {children}
          </ModalMain>
        </div>
      )}
    </>
  );
};

export default Modal;
