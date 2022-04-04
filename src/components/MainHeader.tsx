import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../store/auth-context";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const MainHeader = (props: { logoutHandler: () => void }) => {
  const ctx = useContext(AuthContext);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Cabelex</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-header" />
        <Navbar.Collapse id="main-header">
          <Nav className="me-auto">
            {ctx.isLogged && (
              <Link className="nav-link" to="/filiais">
                Filiais
              </Link>
            )}
            {ctx.isLogged && (
              <Link className="nav-link" to="/funcionarios">
                Funcionarios
              </Link>
            )}
          </Nav>
          {ctx.isLogged && (
            <Button onClick={props.logoutHandler}>Logout</Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainHeader;
