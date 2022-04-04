import LoginForm from "./LoginForm";
import AuthService from "../../services/auth.service";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import ILoginCredentials from "../../interfaces/login-credentiais.interface";

import classes from "./LoginPage.module.css";
import { Image } from "react-bootstrap";

import logoImage from "../../assets/johnny-bravo.png";

const LoginPage = () => {
  const ctx = useContext(AuthContext);

  const login = async (loginCredentials: ILoginCredentials) => {
    try {
      let accessToken = await AuthService.login(loginCredentials);
      ctx.loginHandler(accessToken);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="text-center">
      <div className={classes.formLogin}>
        <Image src={logoImage} width="72" height="84" />
        <h1>Entre</h1>
        <LoginForm login={login} />
      </div>
    </div>
  );
};

export default LoginPage;
