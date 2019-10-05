import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { color } from "../../../styles/global";

import Button from "../../../components/Button/";
import Input from "../../../components/Input";

const LoginFormStyled = styled.div`
  input {
    min-width: 25rem;
    margin-top: 2rem;
  }

  button {
    margin-top: 2rem;
  }

  .text-sm {
    color: ${color.muted};
    margin-top: 1rem;
  }
`;

const LoginForm = () => {
  return (
    <LoginFormStyled>
      <h2>Welcome Back!</h2>
      <p className="text-muted">We’re so excited to see you again!</p>
      <form className="LoginForm">
        <Input type="text" name="username" initValue={{ username: "" }} />
        <Input type="password" name="password" initValue={{ password: "" }} />
        <Button size="full" type="submit" bg="primary">
          Login
        </Button>
      </form>
      <p className="text-sm">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </LoginFormStyled>
  );
};

export default LoginForm;
