import React from "react";
import { Link } from "react-router-dom";
import Block from "../../../components/Block/Block";
import useForm from "../../../hooks";
import Button from "../../../components/Button/Button";

import "../Login.scss";

const LoginForm = () => {
  const [values, errors, handleChange, handleSubmit] = useForm({
    username: "",
    password: ""
  });

  return (
    <div className="Login">
      <Block>
        <h2>Welcome Back!</h2>
        <p className="mt-1">We’re so excited to see you again!</p>
        <form className="LoginForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            className={errors.username && "inputValidationRrror"}
            placeholder="Username"
          />
          {errors.username && (
            <div className="textValidationError text-left ">
              {errors.username}
            </div>
          )}
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className={errors.password && "inputValidationRrror"}
            placeholder="Password"
          />
          {errors.password && (
            <div className="textValidationError text-left ">
              {errors.password}
            </div>
          )}
          <Button className={"Button Button--full"}>Login</Button>
        </form>
        <p className="mt-1 text-left">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </Block>
    </div>
  );
};

export default LoginForm;
