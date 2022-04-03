import EditFilialModal from "./EditFilialModal";
import DeleteFilialModal from "./DeleteFilialModal";
import FuncionariosModal from "./FuncionariosListModal";

const FiliaisLinha = (props: any) => {
  return (
    <tr>
      <td>{props.filial._id}</td>
      <td>{props.filial.nome}</td>
      <td>{props.filial.qtdFuncionarios}</td>
      <td>
        <div>
          <FuncionariosModal filial={props.filial} />
        </div>
        <div>
          <EditFilialModal filial={props.filial} />
          <DeleteFilialModal filial={props.filial} />
        </div>
      </td>
    </tr>
  );
};

export default FiliaisLinha;
