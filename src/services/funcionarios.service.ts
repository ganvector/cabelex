import FilialDto from "../dto/filial.dto";
import FuncionarioDto from "../dto/funcionario.dto";
import UpdateFuncionarioDto from "../dto/update-funcionario.dto";
import CreateFuncionarioDto from "../dto/create-funcionario.dto";
import mockHandler from "../mock";

class FuncionariosService {
  static async getAll(): Promise<
    Array<FuncionarioDto & { filial_nome: string }>
  > {
    const funcionarios = mockHandler.getFuncionarios();
    const filiais = mockHandler.getFiliais();

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
  ): Promise<void> {
    const funcionarios = mockHandler.getFuncionarios();
    const funcionariosEditados = funcionarios.map(
      (funcionario: FuncionarioDto) => {
        if (funcionario._id === funcionarioId) {
          return { ...funcionario, ...updateFuncionarioDto };
        }

        return funcionario;
      }
    );

    mockHandler.setFuncionarios(funcionariosEditados);
  }

  static async create(
    createFuncionarioDto: CreateFuncionarioDto
  ): Promise<void> {
    const funcionarios = mockHandler.getFuncionarios();
    let ultimoId = Number(funcionarios[funcionarios.length - 1]._id);

    funcionarios.push({ ...createFuncionarioDto, _id: String(ultimoId + 1) });

    mockHandler.setFuncionarios(funcionarios);
  }

  static async delete(funcionarioId: string): Promise<void> {
    const funcionarios = mockHandler.getFuncionarios();

    const novoFuncionariosLista = funcionarios.filter(
      (f: FuncionarioDto) => f._id !== funcionarioId
    );

    mockHandler.setFuncionarios(novoFuncionariosLista);
  }
}

export default FuncionariosService;
