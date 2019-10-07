import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "./LoginForm/LoginForm";
import RegisteForm from "./RegisterForm/RegisterForm";

import Illustration from "../../components/Illustration";

const LoginStyled = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;

  .half {
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
  }
`;

const Login = () => {
  return (
    <LoginStyled>
      <div className="half">
        <Route exact path={["/", "/login"]}>
          <LoginForm />
        </Route>
        <Route exact path="/register">
          <RegisteForm />
        </Route>
      </div>

      <div className="half">
        <Illustration />
      </div>
    </LoginStyled>
  );
};

export default Login;
