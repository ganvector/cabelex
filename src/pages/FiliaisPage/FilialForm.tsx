import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

const FilialForm = (props: any) => {
  const [filialNomeInput, setFilialNomeInput] = useState("");

  const handleFilialNomeInputChange = (event: any) => {
    const novoNome = event.target.value;
    setFilialNomeInput(novoNome);
  };

  useEffect(() => {
    if (props.type === "update") {
      setFilialNomeInput(props.filial.nome);
    }
  }, [props.type, props.filial.nome]);

  const qtdFuncionariosField = () => {
    if (!props.filial) {
      return null;
    }

    return (
      <Form.Group>
        <Form.Label>Qtd. de Funcionarios</Form.Label>
        <Form.Control placeholder={props.filial.qtdFuncionarios} disabled />
      </Form.Group>
    );
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
      <Button variant="primary">Criar</Button>
      <Button variant="danger" onClick={props.onHideModal}>
        Cancelar
      </Button>
    </Form>
  );
};

export default FilialForm;
