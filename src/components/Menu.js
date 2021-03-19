import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuWrapper = styled.div`
  width: 100vw;
  margin: 2rem 0rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #343232;
  font-size: 18px;
`;

const Menu = () => {
  return (
    <MenuWrapper>
      <StyledLink to="/">Person</StyledLink>
      <StyledLink to="/company">Company</StyledLink>
      <StyledLink to="/list">List</StyledLink>
    </MenuWrapper>
  );
};

export default Menu;
