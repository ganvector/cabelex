import FilialDto from "../dto/filial.dto";
import FuncionarioDto from "../dto/funcionario.dto";
import CreateFilialDto from "../dto/create-filial.dto";
import UpdateFilialDto from "../dto/update-filial.dto";
import mockHandler from "../mock";

class FiliaisService {
  static async getAll() {
    const accessToken = localStorage.getItem("accessToken");

    const users = mockHandler.getUsers();

    if (users[0].accessToken !== accessToken) {
      throw new Error("401 (Unauthorized)");
    }

    const filiais = mockHandler.getFiliais();
    const funcionarios = mockHandler.getFuncionarios();

    const filiaisTratadas = filiais.map((filial: FilialDto) => {
      const qtdFuncionarios = funcionarios.filter(
        (funcionario: FuncionarioDto) => funcionario.filial_id === filial._id
      ).length;

      return { ...filial, qtdFuncionarios };
    });

    return filiaisTratadas;
  }

  static async getFuncionarios(filialId: string) {
    const funcionarios = mockHandler.getFuncionarios();

    const funcionariosFilial = funcionarios.filter(
      (funcionario: FuncionarioDto) => funcionario.filial_id === filialId
    );

    return funcionariosFilial;
  }

  static async create(createFilialDto: CreateFilialDto) {
    const filiais = mockHandler.getFiliais();
    let ultimoId = Number(filiais[filiais.length - 1]._id);

    filiais.push({ ...createFilialDto, _id: String(ultimoId + 1) });

    //TODO ok, redundante porem padroniza com o restante, retirar ?
    mockHandler.setFiliais(filiais);
  }

  static async update(filialId: string, updateFilialDto: UpdateFilialDto) {
    const filiais = mockHandler.getFiliais();

    let novasFiliais = filiais.map((filial: FilialDto) => {
      if (filial._id === filialId) {
        return { ...filial, ...updateFilialDto };
      }

      return filial;
    });

    mockHandler.setFiliais(novasFiliais);
  }

  static async delete(filialId: string) {
    const filiais = mockHandler.getFiliais();

    const novasFiliais = filiais.filter((f: FilialDto) => f._id !== filialId);

    mockHandler.setFiliais(novasFiliais);
  }
}

export default FiliaisService;
