import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 9rem;
  height: 1.2rem;
  border: 1px solid black;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const Input = ({ name, placeholder }) => {
  return <StyledInput name={name} placeholder={placeholder} />;
};

export default Input;
