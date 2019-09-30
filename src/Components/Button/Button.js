import React from "react";

import "./Button.scss";

const Button = ({ children, onClick, className }) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
