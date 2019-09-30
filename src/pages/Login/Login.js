import React from "react";
import { Route } from "react-router-dom";
import Block from "../../components/Block/Block";
import LoginForm from "./LoginForm/LoginForm";
import RegisteForm from "./RegisterForm/RegisterForm";

import "./Login.scss";

const Login = () => {
  return (
    <div className="Login">
      <Block>
        <Route exact path={["/", "/login"]}>
          <LoginForm />
        </Route>
        <Route exact path="/register">
          <RegisteForm />
        </Route>
      </Block>
    </div>
  );
};

export default Login;
