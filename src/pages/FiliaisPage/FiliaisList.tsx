import Table from "react-bootstrap/Table";
import FiliaisLinha from "./FiliaisLinha";
import FilialDto from "../../dto/filial.dto";

type FiliaisListProps = {
  filiais: Array<FilialDto | { qtdFuncionarios: number }>;
};

const FiliaisList = (props: FiliaisListProps) => {
  const filiais = props.filiais.map((filial: any) => (
    <FiliaisLinha filial={filial} key={`filial_${filial._id}`} />
  ));

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>QTD. FUNCIONARIOS</th>
            <th>AÇÕES</th>
          </tr>
        </thead>
        <tbody>{filiais}</tbody>
      </Table>
    </div>
  );
};

export default FiliaisList;
