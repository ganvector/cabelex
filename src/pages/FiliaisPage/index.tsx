import { useEffect, useState } from "react";
import FiliaisService from "../../services/filiais.service";
import FiliaisList from "./FiliaisList";
import AddFilialModal from "./AddFilialModal";
import FiliaisContext from "../../store/filiais-context";

const FiliaisPage = () => {
  const [update, setUpdate] = useState(0);
  const [filiaisList, setFiliaisList] = useState([]);

  useEffect(() => {
    FiliaisService.getAll().then((filiais: any) => {
      setFiliaisList(filiais);
    });
  }, [update]);

  const updateFilialComponent = () => {
    console.log("updateFilialComponent");
    setUpdate(Math.random());
  };

  return (
    <FiliaisContext.Provider
      value={{ refreshComponent: updateFilialComponent }}
    >
      <div>
        <AddFilialModal />
      </div>
      <div>
        <FiliaisList filiais={filiaisList} />
      </div>
    </FiliaisContext.Provider>
  );
};

export default FiliaisPage;
