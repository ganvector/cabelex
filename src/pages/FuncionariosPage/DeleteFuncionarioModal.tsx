import { useContext, useState } from "react";
import Modal from "../../components/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FuncionariosContext from "../../store/funcionarios-context";
import FuncionariosService from "../../services/funcionarios.service";

const AddFuncionarioModal = (props: any) => {
  const [show, setShow] = useState(false);
  const ctx = useContext(FuncionariosContext);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleFormSubmit = () => {
    FuncionariosService.delete(props.funcionario._id).then(handleClose);
    ctx.refreshComponent();
  };

  return (
    <div>
      <button onClick={handleShow}>Delete</button>
      <Modal show={show} onHide={handleClose} title="Apagar funcionario">
        <Form>
          <Form.Group>
            <Form.Label>
              Deseja realmente deletar a funcionario "{props.funcionario.nome}"?
            </Form.Label>
          </Form.Group>

          <Button variant="danger" onClick={handleFormSubmit}>
            SIM
          </Button>
          <Button variant="success" onClick={handleClose}>
            NÃO
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default AddFuncionarioModal;