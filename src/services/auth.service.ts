import ILoginCredentials from "../interfaces/login-credentiais.interface";

export default class AuthService {
  static async login(loginCredentials: ILoginCredentials) {
    const { username, password } = loginCredentials;
    if (!username || !password || !username.length || !password.length) {
      throw new Error('"nome de usuário" ou "senha" não fornecidos');
    }

    // @ts-ignore
    const users = [...document.users];

    let user = users.find((obj) => obj.username === username);

    if (!user || user.password !== password) {
      throw new Error('"nome de usuario" ou "senha" inválidos.');
    }

    return user.accessToken;
  }

  static saveToken(accessToken: string) {
    localStorage.setItem("accessToken", accessToken);
  }

  static saveUser(user: any) {
    const { password, accessToken, ...userJSON } = user;

    localStorage.setItem("user", JSON.stringify(userJSON));
  }

  static async getUser() {
    const accessToken = localStorage.getItem("accessToken");

    // @ts-ignore
    const user = document.users[0];

    if (user.accessToken !== accessToken) {
      throw new Error("401 (Unauthorized)");
    }

    return user;
  }
}
