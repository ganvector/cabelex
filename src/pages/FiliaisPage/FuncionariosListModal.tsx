import { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import FiliaisService from "../../services/filiais.service";
import FuncionarioDto from "../../dto/funcionario.dto";

const FuncionariosModal = (props: any) => {
  const [show, setShow] = useState(false);
  const [funcionarios, setFuncionarios] = useState<FuncionarioDto[]>([]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    FiliaisService.getFuncionarios(props.filial._id).then(setFuncionarios);
  }, [props.filial, show]);

  const funcionariosList = funcionarios.map((funcionario) => (
    <tr key={funcionario.id}>
      <td>{funcionario.nome}</td>
    </tr>
  ));

  return (
    <div>
      <button onClick={handleShow}>Visualizar Funcionarios</button>
      <Modal
        show={show}
        onHide={handleClose}
        title={`${props.filial.nome} - Funcionários`}
      >
        <table>
          <tr>
            <th>NOME</th>
          </tr>
          <tbody>{funcionariosList}</tbody>
        </table>
      </Modal>
    </div>
  );
};

export default FuncionariosModal;
