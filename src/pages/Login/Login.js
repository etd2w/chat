import React from "react";
import Block from "../../components/Block/Block";
import Button from "../../components/Button/Button";
import LoginForm from "./LoginForm/LoginForm";

import "./Login.scss";

const Login = () => {
  return (
    <div className="Login">
      <Block>
        <h2>Welcome Back!</h2>
        <p className="mt-1">We’re so excited to see you again!</p>
        <LoginForm>
          <Button className={"Button Button--full"}>Login</Button>
        </LoginForm>
        <p className="mt-1">
          Don't have an account? <a href="#">Register</a>
        </p>
      </Block>
    </div>
  );
};

export default Login;
