import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

const RefisterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeName = event => {
    setUsername(event.target.value);
  };

  const onChangePass = event => {
    setPassword(event.target.value);
  };

  const onChangeEmail = event => {
    setEmail(event.target.value);
  };

  return (
    <>
      <h2 className="mb-2">Create an account</h2>
      <form className=" RefisterForm">
        <Input
          type="email"
          value={email}
          onChange={onChangeEmail}
          placeholder="Email"
        />
        <Input
          type="text"
          value={username}
          onChange={onChangeName}
          placeholder="Username"
        />
        <Input
          type="password"
          value={password}
          onChange={onChangePass}
          placeholder="Password"
        />
        <Button className={"Button Button--full"}>Continue</Button>
      </form>
      <p className="mt-1 text-left">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </>
  );
};

export default RefisterForm;
