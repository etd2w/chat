import React, { useState } from "react";
import Input from "../../../components/Input/Input";

import "./LoginForm.scss";

const LoginForm = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeName = event => {
    setUsername(event.target.value);
  };

  const onChangePass = event => {
    setPassword(event.target.value);
  };

  return (
    <form className=" LoginForm">
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
      {children}
    </form>
  );
};

export default LoginForm;
