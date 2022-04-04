import { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import FiliaisService from "../../services/filiais.service";
import FuncionarioDto from "../../dto/funcionario.dto";
import Table from "react-bootstrap/Table";
import ActionButton from "../../components/ActionButton";

const FuncionariosModal = (props: any) => {
  const [show, setShow] = useState(false);
  const [funcionarios, setFuncionarios] = useState<FuncionarioDto[]>([]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    FiliaisService.getFuncionarios(props.filial._id).then(setFuncionarios);
  }, [props.filial, show]);

  const funcionariosList = funcionarios.map((funcionario) => (
    <tr key={`funcionario_modal_${funcionario._id}`}>
      <td>{funcionario.nome}</td>
    </tr>
  ));

  return (
    <div>
      <ActionButton variant="info" size="sm" onClick={handleShow}>
        Visualizar Funcionarios
      </ActionButton>
      <Modal
        show={show}
        onHide={handleClose}
        title={`${props.filial.nome} - Funcionários`}
      >
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>NOME</th>
            </tr>
          </thead>
          <tbody>{funcionariosList}</tbody>
        </Table>
      </Modal>
    </div>
  );
};

export default FuncionariosModal;
