import { createContext } from "react";

const AuthContext = createContext<Record<string, any>>({ isLogged: false });

export default AuthContext;
