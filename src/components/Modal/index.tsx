import classes from "./Modal.module.css";
import { ReactChild, ReactFragment, ReactPortal, useEffect } from "react";

type ModalProps = {
  onHide: () => void | undefined;
  show: any;
  title: string;
  children: ReactChild | ReactFragment | ReactPortal | null | undefined;
};

const Modal = (props: ModalProps) => {
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapePressed);
    return function cleanUp() {
      document.body.removeEventListener("keydown", closeOnEscapePressed);
    };
  });

  const closeOnEscapePressed = (e: KeyboardEvent) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onHide();
    }
  };

  if (!props.show) return <span />;

  return (
    <div className={classes.modal} onClick={props.onHide}>
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.modalHeader}>
          <h4 className={classes.modalTitle}>{props.title}</h4>
        </div>
        <div className={classes.modalBody}>{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
