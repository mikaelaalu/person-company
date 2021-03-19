import React, { useState, useEffect } from "react";
import PageWrapper from "../components/PageWrapper";
import Button from "../components/Button";
import styled from "styled-components";
import useLocalStorage from "../hooks/useLocalStorage";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 16rem;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 20rem;
`;

const StyledInput = styled.input`
  width: 9rem;
  height: 1.2rem;
  border: 1px solid black;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const StyledSelect = styled.select`
  width: 9rem;
  height: 1.2rem;
  border: 1px solid black;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const Person = () => {
  const { handleFormSubmit, companies } = useLocalStorage();

  return (
    <PageWrapper>
      <StyledForm onSubmit={handleFormSubmit}>
        <label>Person:</label>
        <StyledInput name="user" placeholder={"Name"} />

        <label>Company:</label>
        <StyledSelect name="company">
          {companies.map(({ company, i }) => (
            <option key={i} value={company}>
              {company}
            </option>
          ))}
        </StyledSelect>

        <Button callback={() => console.log("button")} text={"Add person"} />
      </StyledForm>
    </PageWrapper>
  );
};

export default Person;
