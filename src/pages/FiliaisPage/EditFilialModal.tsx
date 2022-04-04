import { useState } from "react";
import Modal from "../../components/Modal";
import FilialForm from "./FilialForm";
import ActionButton from "../../components/ActionButton";

type EditFilialModalProps = {
  filial: { nome: string; qtdFuncionarios: number; _id: string };
};

const EditFilialModal = (props: EditFilialModalProps) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <ActionButton size="sm" variant="warning" onClick={handleShow}>
        Editar
      </ActionButton>
      <Modal show={show} onHide={handleClose} title="Editar filial">
        <FilialForm onHideModal={handleClose} filial={props.filial} />
      </Modal>
    </div>
  );
};

export default EditFilialModal;
