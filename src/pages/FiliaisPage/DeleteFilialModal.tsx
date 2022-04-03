import { useState } from "react";
import Modal from "../../components/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddFilialModal = (props: any) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <button onClick={handleShow}>Delete</button>
      <Modal show={show} onHide={handleClose} title="Apagar filial">
        <Form>
          <Form.Group>
            <Form.Label>
              Deseja realmente deletar a filial "{props.filial.nome}"?
            </Form.Label>
          </Form.Group>

          <Button variant="danger">SIM</Button>
          <Button variant="success" onClick={handleClose}>
            NÃO
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default AddFilialModal;
