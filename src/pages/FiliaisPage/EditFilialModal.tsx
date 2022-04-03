import { useState } from "react";
import Modal from "../../components/Modal";
import FilialForm from "./FilialForm";

const AddFilialModal = (props: any) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <button onClick={handleShow}>Editar</button>
      <Modal show={show} onHide={handleClose} title="Editar filial">
        <FilialForm
          onHideModal={handleClose}
          filial={props.filial}
          type="update"
        />
      </Modal>
    </div>
  );
};

export default AddFilialModal;
