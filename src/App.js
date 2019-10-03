import React from "react";
import { Route } from "react-router-dom";
import LoginForm from "./pages/Login/LoginForm/LoginForm";
import RegisteForm from "./pages/Login/RegisterForm/RegisterForm";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Route exact path="/login">
        <LoginForm />
      </Route>
      <Route exact path="/register">
        <RegisteForm />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
    </div>
  );
}

export default App;
