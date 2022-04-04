import FuncionariosLinha from "./FuncionariosLinha";
import Table from "react-bootstrap/Table";

const FuncionariosList = (props: any) => {
  const funcionarios = props.funcionarios.map((funcionario: any) => (
    <FuncionariosLinha funcionario={funcionario} key={funcionario._id} />
  ));

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>FILIAL</th>
            <th>AÇÕES</th>
          </tr>
        </thead>
        <tbody>{funcionarios}</tbody>
      </Table>
    </div>
  );
};

export default FuncionariosList;
