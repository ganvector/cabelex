import { useState } from "react";

const LoginPage = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const onUsernameFieldChange = (event: any) => {
    const newUsernameInput = event.target.value;
    setUsernameInput(newUsernameInput);
  };

  const onPasswordFieldChange = (event: any) => {
    const newPasswordInput = event.target.value;
    setPasswordInput(newPasswordInput);
  };

  return (
    <div>
      <form>
        <div>
          <span>
            <label htmlFor="username">username</label>
          </span>
          <span>
            <input
              id="username"
              name="username"
              value={usernameInput}
              type="text"
              onChange={onUsernameFieldChange}
            />
          </span>
        </div>
        <div>
          <span>
            <label htmlFor="password">password</label>
          </span>
          <span>
            <input
              id="password"
              name="password"
              type="passwprd"
              value={passwordInput}
              onChange={onPasswordFieldChange}
            />
          </span>
        </div>
        <div>
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
