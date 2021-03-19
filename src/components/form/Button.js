import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  border: 1px solid black;
  font-size: 14px;
  background-color: white;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
