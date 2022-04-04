import { useState } from "react";
import Modal from "../../components/Modal";
import FilialForm from "./FilialForm";
import Button from "react-bootstrap/Button";
import ActionButton from "../../components/ActionButton";

const EditFilialModal = (props: any) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <ActionButton size="sm" variant="warning" onClick={handleShow}>
        Editar
      </ActionButton>
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

export default EditFilialModal;
