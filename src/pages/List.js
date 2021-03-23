import React from "react";
import PageWrapper from "../components/PageWrapper";
import useLocalStorage from "../hooks/useLocalStorage";
import ListItem from "../components/ListItem";

const List = () => {
  const { updatePerson, persons } = useLocalStorage();

  const personsWithNoCompany = persons.filter((p) => p.company === "");

  const formSubmit = (person, selectedCompany) => {
    updatePerson(person, selectedCompany);
  };

  return (
    <PageWrapper>
      <div>
        <p>People not connected to a company</p>

        {personsWithNoCompany.map((person, i) => (
          <ListItem key={i} person={person} callback={formSubmit} />
        ))}
      </div>
    </PageWrapper>
  );
};

export default List;
