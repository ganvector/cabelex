import LoginForm from "./LoginForm";
import AuthService from "../../services/auth.service";

const LoginPage = () => {
  const signin = async (username: string, password: string) => {
    console.log(username, password);
    try {
      await AuthService.signin(username, password);
      window.location.hash = "/tasks";
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div>
      <LoginForm signin={signin} />
    </div>
  );
};

export default LoginPage;
