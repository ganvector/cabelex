import { useState } from "react";
import Modal from "../../components/Modal";
import FilialForm from "./FilialForm";

const AddFilialModal = (props: any) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <button onClick={handleShow}>Adicionar Filial</button>
      <Modal show={show} onHide={handleClose} title="Adicionar Filial">
        <FilialForm onHideModal={handleClose} />
      </Modal>
    </div>
  );
};

export default AddFilialModal;
