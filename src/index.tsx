import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import users from "./mock/users.mock.json";
import filiais from "./mock/filiais.mock.json";
import funcionarios from "./mock/funcionarios.mock.json";

// @ts-ignore
document.users = users;
// @ts-ignore
document.filiais = filiais;
// @ts-ignore
document.funcionarios = funcionarios;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
