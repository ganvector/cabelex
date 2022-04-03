import { useEffect, useState } from "react";
import FiliaisService from "../../services/filiais.service";
import FuncionariosContext from "../../store/funcionarios-context";
import FuncionariosList from "./FuncionariosList";
import FuncionariosService from "../../services/funcionarios.service";

const FuncionariosPage = () => {
  const [update, setUpdate] = useState(0);
  const [funcionariosList, setFuncionariosList] = useState([]);
  const [filiais, setFiliais] = useState([]);

  useEffect(() => {
    FuncionariosService.getAll().then((funcionarios: any) => {
      setFuncionariosList(funcionarios);
    });
    FiliaisService.getFiliais().then((filiais: any) => {
      setFiliais(filiais);
    });
  }, [update]);

  const updateFilialComponent = () => {
    console.log("updateFilialComponent");
    setUpdate(Math.random());
  };

  return (
    <FuncionariosContext.Provider
      value={{ refreshComponent: updateFilialComponent, filiais: filiais }}
    >
      <div>
        {/*<AddFuncionarioModal />*/}
        <div>
          <button>Adicionar</button>
        </div>
      </div>
      <div>
        <FuncionariosList funcionarios={funcionariosList} />
      </div>
    </FuncionariosContext.Provider>
  );
};

export default FuncionariosPage;
