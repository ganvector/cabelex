import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";

import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";

import AuthContext from "./store/auth-context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

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
      <main>
        <AuthContext.Provider
          value={{
            isLogged: isLoggedIn,
            loginHandler: loginHandler,
            logoutHandler: logoutHandler,
          }}
        >
          <BrowserRouter>
            <MainHeader logoutHandler={logoutHandler} />
            {!isLoggedIn && <LoginPage />}
            {isLoggedIn && <Home />}
          </BrowserRouter>
        </AuthContext.Provider>
      </main>

      <MainFooter />
    </div>
  );
}

export default App;
