import React, { useState } from "react";
import styled from "styled-components";
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

const ListItem = ({ person, callback }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const { companies } = useLocalStorage();

  const handleSelect = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSubmit = (e, person, selected) => {
    e.preventDefault();
    callback(person, selected);
    setSelectedValue("");
  };
  return (
    <Wrapper>
      <p>{person.name}</p>
      <Form onSubmit={(e) => handleSubmit(e, person, selectedValue)}>
        <StyledSelect
          name="company"
          value={selectedValue}
          onChange={handleSelect}
        >
          {companies.map(({ company }, i) => {
            return (
              <option key={i} value={company}>
                {company}
              </option>
            );
          })}
        </StyledSelect>
        <StyledButton type="submit">Add to company</StyledButton>
      </Form>
    </Wrapper>
  );
};

export default ListItem;
