import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  margin: 0rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const PageWrapper = ({ children }) => {
  return <PageContainer>{children}</PageContainer>;
};

export default PageWrapper;
