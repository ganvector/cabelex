import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import FiliaisService from "../../services/filiais.service";
import FiliaisContext from "../../store/filiais-context";

type FilialFromProps = {
  filial?: { nome: string; qtdFuncionarios: number; _id: string };
  onHideModal: () => void;
};

const FilialForm = (props: FilialFromProps) => {
  const [filialNomeInput, setFilialNomeInput] = useState(
    props.filial?.nome || ""
  );
  const ctx = useContext(FiliaisContext);

  const handleFilialNomeInputChange = (event: any) => {
    const novoNome = event.target.value;
    setFilialNomeInput(novoNome);
  };

  const qtdFuncionariosField = () => {
    if (!props.filial) {
      return null;
    }

    return (
      <Form.Group>
        <Form.Label>Qtd. de Funcionarios</Form.Label>
        <Form.Control
          placeholder={String(props.filial.qtdFuncionarios)}
          disabled
        />
      </Form.Group>
    );
  };

  const handleFormSubmit = () => {
    if (props.filial) {
      FiliaisService.update(props.filial._id, { nome: filialNomeInput }).then(
        props.onHideModal
      );
      ctx.refreshComponent();
      return;
    }

    FiliaisService.create({ nome: filialNomeInput }).then(props.onHideModal);
    ctx.refreshComponent();
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          value={filialNomeInput}
          onChange={handleFilialNomeInputChange}
        />
      </Form.Group>
      {qtdFuncionariosField()}
      <Button variant="primary" onClick={handleFormSubmit}>
        {props.filial ? "Alterar" : "Criar"}
      </Button>
      <Button variant="danger" onClick={props.onHideModal}>
        Cancelar
      </Button>
    </Form>
  );
};

export default FilialForm;
