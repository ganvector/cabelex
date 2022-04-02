import { BrowserRouter, Routes, Route } from "react-router-dom";
import FiliaisPage from "../FiliaisPage";
import FuncionariosPage from "../FuncionariosPage";

const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FiliaisPage />} />
          <Route path="/filiais" element={<FiliaisPage />} />
          <Route path="/funcionarios" element={<FuncionariosPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
