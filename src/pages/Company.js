import React, { useState, useEffect } from "react";
import PageWrapper from "../components/PageWrapper";
import Button from "../components/Button";
import styled from "styled-components";
import useLocalStorage from "../hooks/useLocalStorage";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 12rem;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 20rem;
  padding: 2rem 0rem;
`;

const StyledInput = styled.input`
  width: 9rem;
  height: 1rem;
  border: 1px solid black;
  margin: 2rem 0rem;
`;

const StyledSelect = styled.select`
  width: 9rem;
  height: 1.2rem;
  border: 1px solid black;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const Company = () => {
  const [company, setCompany] = useState();

  const { handleFormSubmit, companies } = useLocalStorage();

  const showPeople = (e) => {
    e.preventDefault();
    setCompany(e.target.company.value);
  };

  return (
    <PageWrapper>
      <StyledForm onSubmit={handleFormSubmit}>
        <label>Company:</label>
        <StyledInput required name="company" placeholder={"Name"} />

        <Button callback={() => console.log("button")} text={"Add company"} />
      </StyledForm>

      <div style={{ marginTop: "2rem" }}>
        <StyledForm onSubmit={showPeople}>
          <p style={{ fontSize: "12px" }}>
            Choose a company and show me the co-workers
          </p>

          <label>Company:</label>
          <StyledSelect name="company">
            {companies.map(({ company, i }) => (
              <option key={i} value={company}>
                {company}
              </option>
            ))}
          </StyledSelect>

          <Button callback={() => console.log("button")} text={"test"} />
        </StyledForm>
        <p>här är de valda företaget: {company}</p>
      </div>
    </PageWrapper>
  );
};

export default Company;
