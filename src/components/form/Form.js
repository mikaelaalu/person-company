import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 16rem;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 20rem;
`;

const Form = ({ onSubmit, children }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export default Form;
