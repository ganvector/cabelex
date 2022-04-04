import Form from "react-bootstrap/Form";
import { MouseEventHandler, useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import FuncionariosContext from "../../store/funcionarios-context";
import FuncionariosService from "../../services/funcionarios.service";

type FuncionarioFormProps = {
  funcionario?: { filial_id: any; nome: any; _id: string };
  onHideModal: () => void;
};

const FuncionarioForm = (props: FuncionarioFormProps) => {
  const [funcionarioFilialInput, setFuncionarioFilialInput] = useState(
    props.funcionario?.filial_id || "0"
  );
  const [funcionarioNomeInput, setFuncionarioNomeInput] = useState(
    props.funcionario?.nome || ""
  );

  const ctx = useContext(FuncionariosContext);

  const handleFuncionarioNomeInputChange = (event: any) => {
    setFuncionarioNomeInput(event.target.value);
  };

  const handleFuncionarioFilialInputChange = (event: any) => {
    setFuncionarioFilialInput(event.target.value);
  };

  const filiaisOptions = ctx.filiais.map((filial: any) => (
    <option value={filial._id}>{filial.nome}</option>
  ));

  const handleFormSubmit = () => {
    if (!funcionarioNomeInput.trim().length) {
      alert("Nome do funcionário deve ser preenchido");
      return;
    }

    if (funcionarioFilialInput === "0") {
      alert("Filial deve ser indicada");
      return;
    }

    if (props.funcionario) {
      FuncionariosService.update(props.funcionario._id, {
        nome: funcionarioNomeInput,
        filial_id: funcionarioFilialInput,
      }).then(props.onHideModal);
      ctx.refreshComponent();
      return;
    }

    FuncionariosService.create({
      nome: funcionarioNomeInput,
      filial_id: funcionarioFilialInput,
    }).then(props.onHideModal);
    ctx.refreshComponent();
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          value={funcionarioNomeInput}
          onChange={handleFuncionarioNomeInputChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Filial</Form.Label>
        <Form.Select
          value={funcionarioFilialInput}
          onChange={handleFuncionarioFilialInputChange}
        >
          <option value="0">Escolha uma filial</option>
          {filiaisOptions}
        </Form.Select>
      </Form.Group>
      <Button variant="primary" onClick={handleFormSubmit}>
        Salvar
      </Button>
      <Button variant="danger" onClick={props.onHideModal}>
        Cancelar
      </Button>
    </Form>
  );
};

export default FuncionarioForm;
