import { useState } from "react";
import Modal from "../../components/Modal";
import FuncionarioForm from "./FuncionarioForm";
import Button from "react-bootstrap/Button";

const AddFuncionarioModal = (props: any) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <Button onClick={handleShow}>Adicionar Funcionario</Button>
      <Modal show={show} onHide={handleClose} title="Adicionar Funcionario">
        <FuncionarioForm onHideModal={handleClose} />
      </Modal>
    </div>
  );
};

export default AddFuncionarioModal;
