import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { color } from "../../../styles/global";

import Button from "../../../components/Button/";
import Input from "../../../components/Input";

const RegisterFormStyled = styled.div`
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

const RefisterForm = () => {
  return (
    <RegisterFormStyled>
      <h2 className="mb-2">Create an account</h2>
      <form className="RefisterForm">
        <Input type="text" name="email" initValue={{ email: "" }} />
        <Input type="text" name="username" initValue={{ username: "" }} />
        <Input type="password" name="password" initValue={{ password: "" }} />
        <Button size="full" type="submit" bg="primary">
          Continue
        </Button>
      </form>
      <p className="text-sm">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </RegisterFormStyled>
  );
};

export default RefisterForm;
