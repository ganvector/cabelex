import { useState } from "react";
import Modal from "../../components/Modal";
import FuncionarioForm from "./FuncionarioForm";

const EditFuncionarioModal = (props: any) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <button onClick={handleShow}>Editar</button>
      <Modal show={show} onHide={handleClose} title="Editar funcionario">
        <FuncionarioForm
          onHideModal={handleClose}
          funcionario={props.funcionario}
          type="update"
        />
      </Modal>
    </div>
  );
};

export default EditFuncionarioModal;
