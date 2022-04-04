import { useState } from "react";
import Modal from "../../components/Modal";
import FuncionarioForm from "./FuncionarioForm";
import ActionButton from "../../components/ActionButton";

const EditFuncionarioModal = (props: any) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <ActionButton variant="warning" onClick={handleShow}>
        Editar
      </ActionButton>
      <Modal show={show} onHide={handleClose} title="Editar funcionario">
        <FuncionarioForm
          onHideModal={handleClose}
          funcionario={props.funcionario}
        />
      </Modal>
    </div>
  );
};

export default EditFuncionarioModal;
