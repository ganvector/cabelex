import { useState } from "react";
import Modal from "../../components/Modal";
import FuncionarioForm from "./FuncionarioForm";
import ActionButton from "../../components/ActionButton";

type EditFuncionarioProps = {
  funcionario: { filial_id: any; nome: any; _id: string };
};

const EditFuncionarioModal = (props: EditFuncionarioProps) => {
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
