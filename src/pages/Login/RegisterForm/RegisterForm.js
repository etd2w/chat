import React from "react";
import { Link } from "react-router-dom";
import Block from "../../../components/Block/Block";
import useForm from "../../../hooks";
import Button from "../../../components/Button/Button";

const RefisterForm = () => {
  const [values, errors, handleChange, handleSubmit] = useForm({
    email: "",
    username: "",
    password: ""
  });

  return (
    <div className="Login">
      <Block>
        <h2 className="mb-2">Create an account</h2>
        <form className="RefisterForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            className={errors.email && "inputValidationRrror"}
            placeholder="Email"
          />
          {errors.email && (
            <div className="textValidationError text-left ">{errors.email}</div>
          )}
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
          <Button type="submit" className={"Button Button--full"}>
            Continue
          </Button>
        </form>
        <p className="mt-1 text-left">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Block>
    </div>
  );
};

export default RefisterForm;
