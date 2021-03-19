import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import Button from "../components/form/Button";
import styled from "styled-components";
import useLocalStorage from "../hooks/useLocalStorage";
import Form from "../components/form/Form";
import Input from "../components/form/Input";
import RedButton from "../components/RedButton";
import TextWithColor from "../components/TextWithColor";

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
  const [showWarning, setShowWarning] = useState(false);
  const [showConfirmText, setShowConfirmText] = useState(false);

  const showPeople = (e) => {
    e.preventDefault();
    setCompany(e.target.company.value);
  };

  const personsConnectedToCompany = persons.filter((p) =>
    company === "" ? null : p.company === company
  );

  const removePersonFromCompany = (e, id) => {
    e.preventDefault();

    const personToUpdate = personsConnectedToCompany.find((p) => p.id === id);
    updatePerson(e, personToUpdate);
  };

  const checkForDuplicates = (e) => {
    e.preventDefault();
    const test = e.target.company.value;

    const alreadyAdded = companies.find(
      ({ company }) => company.toLowerCase() === test.toLowerCase()
    );
    if (alreadyAdded) {
      setShowWarning(true);
      setTimeout(() => {
        setShowWarning(false);
      }, 3000);
      return;
    }

    setShowConfirmText(true);
    setTimeout(() => {
      setShowConfirmText(false);
    }, 3000);

    handleFormSubmit(e);
  };

  return (
    <PageWrapper>
      <Form onSubmit={checkForDuplicates}>
        {showWarning && (
          <TextWithColor color={"red"} text={"Company already exist"} />
        )}
        {showConfirmText && (
          <TextWithColor color={"green"} text={"Company added!"} />
        )}
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
        {personsConnectedToCompany.length !== 0
          ? personsConnectedToCompany.map((person, i) => (
              <PersonWrapper key={i}>
                <p>{person.name}</p>
                <RedButton
                  callback={(e) => removePersonFromCompany(e, person.id)}
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
