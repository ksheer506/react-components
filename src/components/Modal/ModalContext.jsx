import { createContext, useCallback, useEffect, useState } from "react";
import Modal from "./Modal";

export const MainCtx = createContext(null);
export const CustomizeCtx = createContext(null);
export const OpenCtx = createContext(null);
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
