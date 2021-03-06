import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormEvent, useState } from "react";

type LoginFromProp = {
  login: (credenciais: { username: string; password: string }) => void;
};

const LoginForm = (props: LoginFromProp) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleUsernameFieldChange = (event: any) => {
    const newUsernameInput = event.target.value;
    setUsernameInput(newUsernameInput);
  };

  const handlePasswordFieldChange = (event: any) => {
    const newPasswordInput = event.target.value;
    setPasswordInput(newPasswordInput);
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!usernameInput.length) {
      alert("O nome de usuário deve ser preenchido");
      return;
    }

    if (!passwordInput.length) {
      alert("A senha deve ser preenchida");
      return;
    }

    props.login({ username: usernameInput, password: passwordInput });
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nome de usuário:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          value={usernameInput}
          onChange={handleUsernameFieldChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha:</Form.Label>
        <Form.Control
          type="password"
          placeholder="***********"
          value={passwordInput}
          onChange={handlePasswordFieldChange}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        className="w-100"
        onClick={handleFormSubmit}
      >
        Entrar
      </Button>
    </Form>
  );
};

export default LoginForm;
