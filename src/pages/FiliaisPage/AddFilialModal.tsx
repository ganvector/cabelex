import { useState } from "react";
import Modal from "../../components/Modal";
import FilialForm from "./FilialForm";
import Button from "react-bootstrap/Button";

const AddFilialModal = (props: any) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <Button size="lg" onClick={handleShow}>
        Adicionar Filial
      </Button>
      <Modal show={show} onHide={handleClose} title="Adicionar Filial">
        <FilialForm onHideModal={handleClose} />
      </Modal>
    </div>
  );
};

export default AddFilialModal;
