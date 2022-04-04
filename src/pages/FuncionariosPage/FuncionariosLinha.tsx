import EditFuncionarioModal from "./EditFuncionarioModal";
import DeleteFuncionarioModal from "./DeleteFuncionarioModal";

type FuncionariosLinhaProps = {
  funcionario: {
    _id: string;
    nome: string;
    filial_nome: string;
    filial_id: string;
  };
};

const FuncionariosLinha = (props: FuncionariosLinhaProps) => {
  return (
    <tr>
      <td>{props.funcionario._id}</td>
      <td>{props.funcionario.nome}</td>
      <td>{props.funcionario.filial_nome}</td>
      <td>
        <div className="justify-center">
          <EditFuncionarioModal funcionario={props.funcionario} />
          <DeleteFuncionarioModal funcionario={props.funcionario} />
        </div>
      </td>
    </tr>
  );
};

export default FuncionariosLinha;
