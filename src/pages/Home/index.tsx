import { Routes, Route } from "react-router-dom";
import FiliaisPage from "../FiliaisPage";
import FuncionariosPage from "../FuncionariosPage";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<FiliaisPage />} />
        <Route path="/filiais" element={<FiliaisPage />} />
        <Route path="/funcionarios" element={<FuncionariosPage />} />
      </Routes>
    </Container>
  );
};

export default Home;
