import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import Person from "./pages/Person";
import Company from "./pages/Company";
import List from "./pages/List";

const App = () => {
  return (
    <Router>
      <Menu />
      <Route exact path="/">
        <Person />
      </Route>
      <Route path="/company">
        <Company />
      </Route>
      <Route path="/list">
        <List />
      </Route>
    </Router>
  );
};

export default App;
