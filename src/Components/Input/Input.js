import React from "react";

import "./Input.scss";

const Input = ({ type, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="Input"
    />
  );
};

export default Input;
