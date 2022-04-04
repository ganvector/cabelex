import EditFilialModal from "./EditFilialModal";
import DeleteFilialModal from "./DeleteFilialModal";
import FuncionariosModal from "./FuncionariosListModal";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const FiliaisLinha = (props: any) => {
  return (
    <tr>
      <td>{props.filial._id}</td>
      <td>{props.filial.nome}</td>
      <td>{props.filial.qtdFuncionarios}</td>
      <td>
        <span className="justify-center">
          <FuncionariosModal filial={props.filial} />
          <EditFilialModal filial={props.filial} />
          <DeleteFilialModal filial={props.filial} />
        </span>
      </td>
    </tr>
  );
};

export default FiliaisLinha;
