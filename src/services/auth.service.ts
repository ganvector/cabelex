export default class AuthService {
  static async signin(username: string, password: string) {
    if (!username || !password || !username.length || !password.length) {
      throw new Error('"nome de usuário" ou "senha" não fornecidos');
    }

    // @ts-ignore
    const users = [...document.users];

    let user = users.find((obj) => obj.username === username);

    if (!user || user.password !== password) {
      throw new Error('"nome de usuario" ou "senha"inválidos.');
    }

    this.saveToken(user.accessToken);
    this.saveUser(user);
    return username;
  }

  static saveToken(accessToken: string) {
    localStorage.setItem("accessToken", accessToken);
  }

  static saveUser(user: any) {
    const { password, accessToken, ...userJSON } = user;

    localStorage.setItem("user", JSON.stringify(userJSON));
  }
}
