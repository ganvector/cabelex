import EditFilialModal from "./EditFilialModal";
import DeleteFilialModal from "./DeleteFilialModal";
import FuncionariosModal from "./FuncionariosListModal";

type FiliaisLinhaProps = {
  filial: { _id: string; nome: string; qtdFuncionarios: number };
};

const FiliaisLinha = (props: FiliaisLinhaProps) => {
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
