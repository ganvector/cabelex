// import FuncionariosModal from "../FiliaisPage/FuncionariosListModal";
// import EditfuncionarioModal from "../FiliaisPage/EditfuncionarioModal";
// import DeletefuncionarioModal from "../FiliaisPage/DeletefuncionarioModal";

import EditFuncionarioModal from "./EditFuncionarioModal";
import DeleteFuncionarioModal from "./DeleteFuncionarioModal";

const FuncionariosLinha = (props: any) => {
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
