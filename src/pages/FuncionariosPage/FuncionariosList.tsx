import FuncionariosLinha from "./FuncionariosLinha";
import Table from "react-bootstrap/Table";
import FuncionarioDto from "../../dto/funcionario.dto";

type FuncionariosListProps = {
  funcionarios: Array<FuncionarioDto | { filial_nome: string }>;
};

const FuncionariosList = (props: FuncionariosListProps) => {
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
