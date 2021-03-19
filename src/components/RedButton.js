import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 60px;
  height: 40px;
  border: 1px solid red;
  font-size: 10px;
  background-color: white;
  color: red;
  &:hover {
    background-color: red;
    color: white;
  }
`;

const RedButton = ({ text, callback }) => {
  return <StyledButton onClick={callback}>{text}</StyledButton>;
};

export default RedButton;
