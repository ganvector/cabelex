/**
 * Handler para lidar com as variaveis em document, seria algo como usar um mongoose "ruim"
 */
const mockHandler = {
  // @ts-ignore
  getFiliais: () => document.filiais,
  // @ts-ignore
  setFiliais: (filiais) => (document.filiais = filiais),
  // @ts-ignore
  getFuncionarios: () => document.funcionarios,
  // @ts-ignore
  setFuncionarios: (funcionarios) => (document.funcionarios = funcionarios),
  // @ts-ignore
  getUsers: () => document.users,
};

export default mockHandler;
