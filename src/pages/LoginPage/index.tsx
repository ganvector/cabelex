import LoginForm from "./LoginForm";
import AuthService from "../../services/auth.service";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import ILoginCredentials from "../../interfaces/login-credentiais.interface";

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
    <div>
      <LoginForm login={login} />
    </div>
  );
};

export default LoginPage;
