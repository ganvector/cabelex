import FiliaisLinha from "./FiliaisLinha";

const FiliaisList = (props: any) => {
  const filiais = props.filiais.map((filial: any) => (
    <FiliaisLinha filial={filial} key={`filial_${filial._id}`} />
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>QTD. FUNCIONARIOS</th>
            <th>AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          {filiais}
          {/*<tr>*/}
          {/*  <td>1</td>*/}
          {/*  <td>XIMIRA</td>*/}
          {/*  <td>300</td>*/}
          {/*  <td>*/}
          {/*    <div>Ver funcionarios</div>*/}
          {/*    <div>*/}
          {/*      <span>Editar</span>*/}
          {/*      <span>Excluir</span>*/}
          {/*    </div>*/}
          {/*  </td>*/}
          {/*</tr>*/}
        </tbody>
      </table>
    </div>
  );
};

export default FiliaisList;
