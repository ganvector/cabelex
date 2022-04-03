import FilialDto from "../dto/Filial.dto";
import FuncionarioDto from "../dto/funcionario.dto";

class FiliaisService {
  static async getFiliais() {
    const accessToken = localStorage.getItem("accessToken");

    // @ts-ignore
    if (document.users[0].accessToken !== accessToken) {
      throw new Error("401 (Unauthorized)");
    }

    // @ts-ignore
    const { filiais, funcionarios } = document;

    const filiaisTratadas = filiais.map((filial: FilialDto) => {
      const qtdFuncionarios = funcionarios.filter(
        (funcionario: FuncionarioDto) => funcionario.filial_id === filial._id
      ).length;

      return { ...filial, qtdFuncionarios };
    });

    return filiaisTratadas;
  }
}

export default FiliaisService;
