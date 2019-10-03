import React from "react";

import "./Button.scss";

const Button = ({ children, onClick, className, type }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
