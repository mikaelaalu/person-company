import React from "react";
import styled from "styled-components";
import PageWrapper from "../components/PageWrapper";
import useLocalStorage from "../hooks/useLocalStorage";

const StyledSelect = styled.select`
  width: 9rem;
  height: 1.2rem;
  border: 1px solid black;
`;

const StyledButton = styled.button`
  width: 60px;
  height: 40px;
  border: 1px solid green;
  font-size: 10px;
  background-color: white;
  color: green;
  margin-left: 1rem;
  &:hover {
    background-color: green;
    color: white;
  }
`;

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const List = () => {
  const { updatePerson, companies, persons } = useLocalStorage();

  const personsWithNoCompany = persons.filter((p) => p.company === "");

  const formSubmit = (e, person) => {
    e.preventDefault();
    console.log(e.target.company.value);

    const company = e.target.company.value;

    updatePerson(e, person, company);
  };
  return (
    <PageWrapper>
      <div>
        <p>People not connected to a company</p>

        {personsWithNoCompany.map((person) => (
          <Wrapper>
            <p style={{ textAlign: "left" }}>{person.person}</p>
            <Form onSubmit={(e) => formSubmit(e, person)}>
              <StyledSelect name="company">
                {companies.map(({ company }, i) => (
                  <option key={i} value={company}>
                    {company}
                  </option>
                ))}
              </StyledSelect>
              <StyledButton>Add to company</StyledButton>
            </Form>
          </Wrapper>
        ))}
      </div>
    </PageWrapper>
  );
};

export default List;
