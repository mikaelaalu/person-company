import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import Button from "../components/form/Button";
import styled from "styled-components";
import useLocalStorage from "../hooks/useLocalStorage";
import Form from "../components/form/Form";
import Input from "../components/form/Input";

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

  console.log(companies);

  return (
    <PageWrapper>
      <Form onSubmit={handleFormSubmit}>
        <label>Company:</label>
        <Input required name="company" placeholder={"Name"} />

        <Button callback={() => console.log("button")} text={"Add company"} />
      </Form>

      <div style={{ marginTop: "2rem" }}>
        <Form onSubmit={showPeople}>
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
        </Form>
        <p>här är de valda företaget: {company}</p>
      </div>
    </PageWrapper>
  );
};

export default Company;
