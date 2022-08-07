import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Background, Close, ModalMain } from "./styles";

export const MainCtx = createContext(null);
export const CustomizeCtx = createContext(null);
const OpenCtx = createContext(null);

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

const customize = {
  setSize: null,
  setPosition: null,
};

export const ModalCtx = ({ width, height, background = true, children }) => {
  const [mount, setMount] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState({ width, height });
  const [position, setPosition] = useState(null);
  const [content, setContent] = useState(null);

  const openModal = useCallback((component) => {
    setMount(true);
    setIsOpen(true);
    setContent(component);
  }, []);

  useEffect(() => {
    let timerId;

    if (!isOpen) {
      timerId = setTimeout(() => setMount(false), 450);
    }
    document.body.style.overflowY = isOpen ? "hidden" : "auto";

    return () => clearTimeout(timerId);
  }, [isOpen]);

  customize.setSize = setSize;
  customize.setPosition = setPosition;

  return (
    <MainCtx.Provider value={openModal}>
      <CustomizeCtx.Provider value={customize}>
        <OpenCtx.Provider value={{ isOpen, setIsOpen }}>
          {mount && (
            <Modal
              width={size.width}
              height={size.height}
              position={position}
              background={background}
              content={content}
            />
          )}
        </OpenCtx.Provider>
        {children}
      </CustomizeCtx.Provider>
    </MainCtx.Provider>
  );
};

export default Modal;
