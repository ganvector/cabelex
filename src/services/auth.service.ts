import ILoginCredentials from "../interfaces/login-credentiais.interface";
import mockHandler from "../mock";
import UserDto from "../dto/user.dto";

export default class AuthService {
  static async login(loginCredentials: ILoginCredentials): Promise<string> {
    const { username, password } = loginCredentials;
    if (!username || !password || !username.length || !password.length) {
      throw new Error('"nome de usuário" ou "senha" não fornecidos');
    }

    const users: Array<UserDto & { accessToken: string }> =
      mockHandler.getUsers();

    let user = users.find(
      (user: UserDto & { accessToken: string }) => user.username === username
    );

    if (!user || user.password !== password) {
      throw new Error('"nome de usuario" ou "senha" inválidos.');
    }

    return user.accessToken;
  }
}
