import FilialDto from "../dto/filial.dto";
import FuncionarioDto from "../dto/funcionario.dto";
import UpdateFuncionarioDto from "../dto/update-funcionario.dto";
import CreateFuncionarioDto from "../dto/create-funcionario.dto";

class FuncionariosService {
  static async getAll() {
    // @ts-ignore
    const { funcionarios, filiais } = document;

    const funcionariosList = funcionarios.map((f: FuncionarioDto) => {
      const filial: FilialDto = filiais.find(
        (filial: FilialDto) => filial._id === f.filial_id
      );

      if (!filial) return false;

      return { ...f, filial_nome: filial.nome };
    });

    return funcionariosList.filter(Boolean);
  }

  static async update(
    funcionarioId: string,
    updateFuncionarioDto: UpdateFuncionarioDto
  ) {
    //@ts-ignore
    document.funcionarios = document.funcionarios.map(
      (funcionario: FuncionarioDto) => {
        if (funcionario._id === funcionarioId) {
          return { ...funcionario, ...updateFuncionarioDto };
        }

        return funcionario;
      }
    );
  }

  static async create(createFuncionarioDto: CreateFuncionarioDto) {
    // @ts-ignore
    const { funcionarios } = document;
    let ultimoId = Number(funcionarios[funcionarios.length - 1]._id);

    funcionarios.push({ ...createFuncionarioDto, _id: String(ultimoId + 1) });
  }

  static async delete(funcionarioId: string) {
    // @ts-ignore
    document.funcionarios = document.funcionarios.filter(
      (f: FuncionarioDto) => f._id !== funcionarioId
    );
  }
}

export default FuncionariosService;
