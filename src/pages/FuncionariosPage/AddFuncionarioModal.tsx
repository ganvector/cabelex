import { useState } from "react";
import Modal from "../../components/Modal";
import FuncionarioForm from "./FuncionarioForm";

const AddFuncionarioModal = (props: any) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <button onClick={handleShow}>Adicionar Funcionario</button>
      <Modal show={show} onHide={handleClose} title="Adicionar Funcionario">
        <FuncionarioForm onHideModal={handleClose} />
      </Modal>
    </div>
  );
};

export default AddFuncionarioModal;
