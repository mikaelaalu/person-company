import React from "react";
import styled from "styled-components";

const Text = styled.p`
  color: ${(p) => (p.color ? p.color : "black")};
  font-size: 14px;
`;

const ConfirmText = ({ text, color }) => {
  return <Text color={color}>{text}</Text>;
};

export default ConfirmText;
