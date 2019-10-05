import React from "react";
import styled from "styled-components";
import { color } from "../../styles/global";

const ButtonStyled = styled.button`
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  color: white;
  padding: 0.75rem;
  width: ${props => props.size === "full" && "100%"};
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  opacity: 1;
  margin: 0;
  background: ${props => color[props.bg]};
`;

const Button = ({ size, children, onClick, type, bg }) => {
  return (
    <ButtonStyled bg={bg} size={size} type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
