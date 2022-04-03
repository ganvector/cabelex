// import FuncionariosModal from "../FiliaisPage/FuncionariosListModal";
// import EditfuncionarioModal from "../FiliaisPage/EditfuncionarioModal";
// import DeletefuncionarioModal from "../FiliaisPage/DeletefuncionarioModal";

import EditFuncionarioModal from "./EditFuncionarioModal";

const FuncionariosLinha = (props: any) => {
  return (
    <tr>
      <td>{props.funcionario._id}</td>
      <td>{props.funcionario.nome}</td>
      <td>{props.funcionario.filial_nome}</td>
      <td>
        <div>
          {/*<EditfuncionarioModal funcionario={props.funcionario} />*/}
          {/*<DeletefuncionarioModal funcionario={props.funcionario} />*/}
          <EditFuncionarioModal funcionario={props.funcionario} />
          <button>deletar</button>
        </div>
      </td>
    </tr>
  );
};

export default FuncionariosLinha;
