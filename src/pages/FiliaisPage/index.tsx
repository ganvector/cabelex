import { useEffect, useState } from "react";
import FiliaisService from "../../services/filiais.service";
import FiliaisList from "./FiliaisList";
import AddFilialModal from "./AddFilialModal";

const FiliaisPage = () => {
  const [filiaisList, setFiliaisList] = useState([]);

  useEffect(() => {
    FiliaisService.getFiliais().then((filiais: any) => {
      setFiliaisList(filiais);
    });
  }, []);

  return (
    <div>
      <div>
        <AddFilialModal />
      </div>
      <div>
        <FiliaisList filiais={filiaisList} />
      </div>
    </div>
  );
};

export default FiliaisPage;
