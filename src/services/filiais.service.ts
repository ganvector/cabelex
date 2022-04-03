import FilialDto from "../dto/filial.dto";
import FuncionarioDto from "../dto/funcionario.dto";
import CreateFilialDto from "../dto/create-filial.dto";
import UpdateFilialDto from "../dto/update-filial.dto";

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

  static async getFuncionarios(filialId: string) {
    const accessToken = localStorage.getItem("accessToken");

    // @ts-ignore
    if (document.users[0].accessToken !== accessToken) {
      throw new Error("401 (Unauthorized)");
    }

    // @ts-ignore
    const { funcionarios } = document;

    const funcionariosFilial = funcionarios.filter(
      (funcionario: FuncionarioDto) => funcionario.filial_id === filialId
    );

    return funcionariosFilial;
  }

  static async create(createFilialDto: CreateFilialDto) {
    // @ts-ignore
    const { filiais } = document;
    let ultimoId = Number(filiais[filiais.length - 1]._id);

    filiais.push({ ...createFilialDto, _id: String(ultimoId + 1) });
  }

  static async update(filialId: string, updateFilialDto: UpdateFilialDto) {
    // @ts-ignore
    const { filiais } = document;

    let filial = filiais.find((f: FilialDto) => f._id === filialId);
    filial = { ...filial, ...updateFilialDto };
  }

  static async delete(filialId: string) {
    console.log("delete", { filialId });
    // @ts-ignore
    let { filiais } = document;

    // @ts-ignore
    document.filiais = filiais.filter((f: FilialDto) => f._id !== filialId);
  }
}

export default FiliaisService;
