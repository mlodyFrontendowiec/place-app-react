import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const NavLinks = ({ type, closeAside }) => {
  return (
    <StyledListContainer type={type}>
      <StyledListItem type={type}>
        <StyledLink to="/" exact onClick={closeAside}>
          ALL USERS
        </StyledLink>
      </StyledListItem>
      <StyledListItem type={type}>
        <StyledLink to="/u1/places" onClick={closeAside}>
          MY PLACES
        </StyledLink>
      </StyledListItem>
      <StyledListItem type={type}>
        <StyledLink to="/places/new" onClick={closeAside}>
          NEW PLACE
        </StyledLink>
      </StyledListItem>
      <StyledListItem type={type}>
        <StyledLink to="/auth" onClick={closeAside}>
          AUTHENTICATE
        </StyledLink>
      </StyledListItem>
    </StyledListContainer>
  );
};

const StyledListContainer = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin: auto 0;
  margin-left: auto;
  ${(props) =>
    props.type === "aside" && "flex-direction:column; margin-bottom:50px "}
`;

const StyledListItem = styled.li`
  list-style: none;
  padding: 0 10px;
  ${(props) => props.type === "aside" && "margin-top:20px"}
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 20px;
`;

export default NavLinks;
