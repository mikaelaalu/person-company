import React from "react";
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

const Person = () => {
  const { handleFormSubmit, companies, persons } = useLocalStorage();

  console.log(persons);
  return (
    <PageWrapper>
      <Form onSubmit={handleFormSubmit}>
        <label>Person:</label>
        <Input name="user" placeholder={"Name"} />

        <label>Company:</label>
        <StyledSelect name="company">
          {companies.map(({ company }, i) => (
            <option key={i} value={company}>
              {company}
            </option>
          ))}
        </StyledSelect>

        <Button callback={() => console.log("button")} text={"Add person"} />
      </Form>
    </PageWrapper>
  );
};

export default Person;
