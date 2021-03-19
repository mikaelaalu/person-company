import { useState, useEffect } from "react";

const useLocalStorage = () => {
  const [persons, setPersons] = useState([]);
  const [companies, setCompanies] = useState([{ company: "" }]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (e.target.user && e.target.company) {
      const id = Math.floor(Math.random() * Math.floor(1000));
      console.log(typeof id);
      const newPerson = {
        id,
        name: e.target.user.value,
        company: e.target.company.value,
      };

      setPersons([...persons, newPerson]);

      e.target.user.value = "";
      e.target.company.value = "";
    }

    if (e.target.company.value) {
      const newCompany = {
        company: e.target.company.value,
      };
      setCompanies([...companies, newCompany]);
      e.target.company.value = "";
    }
  };

  const updatePerson = (e, personToUpdate, company) => {
    e.preventDefault();
    const updatedPerson = persons.map((person) => {
      if (person.id === personToUpdate.id) {
        return {
          name: personToUpdate.name,
          company: company ? company : "",
        };
      } else {
        return person;
      }
    });

    setPersons(updatedPerson);
  };

  useEffect(() => {
    if (persons.length > 0) {
      const json = JSON.stringify(persons);
      localStorage.setItem("persons", json);
    }
  }, [persons]);

  useEffect(() => {
    if (companies.length > 1) {
      const json = JSON.stringify(companies);
      localStorage.setItem("companies", json);
    }
  }, [companies]);

  useEffect(() => {
    const jsonPersons = localStorage.getItem("persons");
    const savedPersons = JSON.parse(jsonPersons);
    if (savedPersons) {
      setPersons(savedPersons);
    }

    const jsonCompanies = localStorage.getItem("companies");
    const savedCompanies = JSON.parse(jsonCompanies);
    if (savedCompanies) {
      setCompanies([...savedCompanies]);
    }
  }, []);

  return { handleFormSubmit, updatePerson, companies, persons };
};

export default useLocalStorage;
