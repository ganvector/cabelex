import Table from "react-bootstrap/Table";
import FiliaisLinha from "./FiliaisLinha";

const FiliaisList = (props: any) => {
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
