import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import Button from "../components/form/Button";
import styled from "styled-components";
import useLocalStorage from "../hooks/useLocalStorage";
import Form from "../components/form/Form";
import Input from "../components/form/Input";
import RedButton from "../components/RedButton";

const StyledSelect = styled.select`
  width: 9rem;
  height: 1.2rem;
  border: 1px solid black;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const PersonWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Company = () => {
  const {
    handleFormSubmit,
    updatePerson,
    companies,
    persons,
  } = useLocalStorage();

  const [company, setCompany] = useState();

  const showPeople = (e) => {
    e.preventDefault();
    setCompany(e.target.company.value);
  };

  const personsConnectedToCompany = persons.filter((p) =>
    company === "" ? null : p.company === company
  );

  const removePersonFromCompany = (e, person) => {
    e.preventDefault();
    console.log();

    const personToUpdate = personsConnectedToCompany.find(
      (p) => p.person === person
    );
    updatePerson(e, personToUpdate);
  };

  return (
    <PageWrapper>
      <Form onSubmit={handleFormSubmit}>
        <label>Add new company:</label>
        <Input required name="company" placeholder={"Name"} />

        <Button text={"Add company"} />
      </Form>

      <div style={{ marginTop: "2rem" }}>
        <Form onSubmit={showPeople}>
          <p style={{ fontSize: "12px" }}>
            Choose a company and show me the co-workers
          </p>

          <label>Company:</label>
          <StyledSelect name="company">
            {companies.map(({ company }, i) => (
              <option key={i} value={company}>
                {company}
              </option>
            ))}
          </StyledSelect>

          <Button text={"Show CO-workers"} />
        </Form>
        <p>
          People working at <b>{company}</b>
        </p>
        {personsConnectedToCompany.length
          ? personsConnectedToCompany.map(({ person }, i) => (
              <PersonWrapper key={i}>
                <p>{person}</p>
                <RedButton
                  callback={(e) => removePersonFromCompany(e, person)}
                  text={"Remove from company"}
                />
              </PersonWrapper>
            ))
          : null}
      </div>
    </PageWrapper>
  );
};

export default Company;
