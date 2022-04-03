import FilialDto from "../dto/filial.dto";
import FuncionarioDto from "../dto/funcionario.dto";

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
}

export default FuncionariosService;
