import React from "react";
import styled from "styled-components";
import { color } from "../../styles/global";
import { useForm } from "../../hooks/";

const InputStyled = styled.input`
  display: block;
  border: none;
  background: ${color.light};
  padding: 0.75rem;
  border-radius: 6px;
`;

const Input = ({ initValue, type, name }) => {
  const [values, errors, handleChange, handleSubmit] = useForm(initValue);

  return (
    <>
      <InputStyled
        type={type}
        name={name}
        value={values[name]}
        onChange={handleChange}
        placeholder={name}
      />
      {errors[name] && <div>{errors[name]}</div>}
    </>
  );
};

export default Input;
