import { useContext, useState } from "react";
import Modal from "../../components/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FiliaisService from "../../services/filiais.service";
import FiliaisContext from "../../store/filiais-context";
import ActionButton from "../../components/ActionButton";

type DeleteFilialProps = { filial: { _id: string; nome: string } };

const DeleteFilial = (props: DeleteFilialProps) => {
  const [show, setShow] = useState(false);
  const ctx = useContext(FiliaisContext);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleFormSubmit = () => {
    FiliaisService.delete(props.filial._id).then(handleClose);
    ctx.refreshComponent();
  };

  return (
    <div>
      <ActionButton size="sm" variant="danger" onClick={handleShow}>
        Delete
      </ActionButton>
      <Modal show={show} onHide={handleClose} title="Apagar filial">
        <Form>
          <Form.Group>
            <Form.Label>
              Deseja realmente deletar a filial "{props.filial.nome}"?
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

export default DeleteFilial;
