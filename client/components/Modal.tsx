import React, { FunctionComponent, useEffect } from "react";
import ReactDOM from "react-dom";

export interface IModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
}

const Modal: FunctionComponent<IModalProps> = ({
  isShown,
  hide,
  modalContent,
}) => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 27 && isShown) {
      hide();
    }
  };

  useEffect(() => {
    isShown
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    document.addEventListener("keydown", onKeyDown, false);
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, [isShown]);

  const modal = (
    <>
      <div
        className="fixed top-0 left-0 z-40 w-full h-full bg bg-black/20"
        onClick={hide}
      />
      {modalContent}
    </>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;
