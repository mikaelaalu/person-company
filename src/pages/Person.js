import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import Button from "../components/form/Button";
import styled from "styled-components";
import useLocalStorage from "../hooks/useLocalStorage";
import Form from "../components/form/Form";
import Input from "../components/form/Input";
import TextWithColor from "../components/TextWithColor";

const StyledSelect = styled.select`
  width: 9rem;
  height: 1.2rem;
  border: 1px solid black;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const Person = () => {
  const { add, companies } = useLocalStorage();
  const [showWarning, setShowWarning] = useState(false);
  const [showConfirmText, setShowConfirmText] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    const person = e.target.user.value;

    if (person.length < 3) {
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

    add(e);
  };

  return (
    <PageWrapper>
      <Form onSubmit={submit}>
        {showWarning && (
          <TextWithColor color={"red"} text={"Add more than 2 letters"} />
        )}
        {showConfirmText && (
          <TextWithColor color={"green"} text={"Person added!"} />
        )}
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

        <Button type="submit" text={"Add person"} />
      </Form>
    </PageWrapper>
  );
};

export default Person;
