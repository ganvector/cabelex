import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../store/auth-context";
import Button from "react-bootstrap/Button";

const MainHeader = () => {
  const ctx = useContext(AuthContext);

  return (
    <div>
      <span>{!ctx.isLogged && "Cabelex"}</span>
      <span>{ctx.isLogged && "Logo"}</span>
      <span>{ctx.isLogged && <Link to="/filiais">Filiais</Link>}</span>
      <span>
        {ctx.isLogged && <Link to="/funcionarios">Funcionarios</Link>}
      </span>
      <span>{ctx.isLogged && <Button>Logout</Button>}</span>
    </div>
  );
};

export default MainHeader;
