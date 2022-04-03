import { Routes, Route } from "react-router-dom";
import FiliaisPage from "../FiliaisPage";
import FuncionariosPage from "../FuncionariosPage";

const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<FiliaisPage />} />
      <Route path="/filiais" element={<FiliaisPage />} />
      <Route path="/funcionarios" element={<FuncionariosPage />} />
    </Routes>
  );
};

export default Home;
