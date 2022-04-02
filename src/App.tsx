import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import AuthContext from "./store/auth-context";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import MainHeader from "./components/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggerIn] = useState(false);

  const loginHandler = (accessToken: string) => {
    localStorage.setItem("accessToken", accessToken);
    setIsLoggerIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    setIsLoggerIn(false);
  };

  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          isLogged: isLoggedIn,
          loginHandler: loginHandler,
          logoutHandler: logoutHandler,
        }}
      >
        <MainHeader />
        <main>
          {!isLoggedIn && <LoginPage />}
          {isLoggedIn && <Home />}
        </main>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
