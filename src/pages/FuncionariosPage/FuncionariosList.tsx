import FuncionariosLinha from "./FuncionariosLinha";

const FuncionariosList = (props: any) => {
  const funcionarios = props.funcionarios.map((funcionario: any) => (
    <FuncionariosLinha funcionario={funcionario} key={funcionario._id} />
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>FILIAL</th>
            <th>AÇÕES</th>
          </tr>
        </thead>
        <tbody>{funcionarios}</tbody>
      </table>
    </div>
  );
};

export default FuncionariosList;
