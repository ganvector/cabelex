import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import AuthContext from "./store/auth-context";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import MainHeader from "./components/MainHeader";
import { BrowserRouter } from "react-router-dom";

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
        <BrowserRouter>
          <MainHeader />
          <main>
            {!isLoggedIn && <LoginPage />}
            {isLoggedIn && <Home />}
          </main>
        </BrowserRouter>
      </AuthContext.Provider>
      <div>I'm one with the Force and the Force is with me</div>
    </div>
  );
}

export default App;
