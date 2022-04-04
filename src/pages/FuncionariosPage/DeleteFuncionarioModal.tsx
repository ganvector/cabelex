import {
  ReactChild,
  ReactFragment,
  ReactPortal,
  useContext,
  useState,
} from "react";
import Modal from "../../components/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FuncionariosContext from "../../store/funcionarios-context";
import FuncionariosService from "../../services/funcionarios.service";
import ActionButton from "../../components/ActionButton";

type DeleteFuncionarioProps = {
  funcionario: {
    _id: string;
    nome: string;
  };
};

const DeleteFuncionarioModal = (props: DeleteFuncionarioProps) => {
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
      <ActionButton variant="danger" onClick={handleShow}>
        Delete
      </ActionButton>
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

export default DeleteFuncionarioModal;
