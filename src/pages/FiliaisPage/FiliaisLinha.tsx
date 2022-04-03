import EditFilialModal from "./EditFilialModal";
import DeleteFilialModal from "./DeleteFilialModal";

const FiliaisLinha = (props: any) => {
  return (
    <tr>
      <td>{props.filial._id}</td>
      <td>{props.filial.nome}</td>
      <td>{props.filial.qtdFuncionarios}</td>
      <td>
        <div>
          <button>Ver funcionarios</button>
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
