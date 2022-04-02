import { useContext } from "react";
import AuthContext from "../store/auth-context";

const MainHeader = () => {
  const ctx = useContext(AuthContext);

  return (
    <div>
      <span>{!ctx.isLogged && "Cabelex"}</span>
      <span>{ctx.isLogged && "Logo"}</span>
      <span>{ctx.isLogged && "Links"}</span>
      <span>{ctx.isLogged && "Logout"}</span>
    </div>
  );
};

export default MainHeader;
