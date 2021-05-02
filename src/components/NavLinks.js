import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const NavLinks = ({ type }) => {
  return (
    <StyledListContainer type={type}>
      <StyledListItem type={type}>
        <StyledLink to="/" exact>
          ALL USERS
        </StyledLink>
      </StyledListItem>
      <StyledListItem type={type}>
        <StyledLink to="/u1/places">MY PLACES</StyledLink>
      </StyledListItem>
      <StyledListItem type={type}>
        <StyledLink to="/places/new">NEW PLACE</StyledLink>
      </StyledListItem>
      <StyledListItem type={type}>
        <StyledLink to="/auth">AUTHENTICATE</StyledLink>
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
  ${(props) => props.type === "aside" && "flex-direction:column"}
`;

const StyledListItem = styled.li`
  list-style: none;
  padding: 0 10px;
  ${(props) => props.type === "aside" && "margin-top:20px"}
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
`;

export default NavLinks;
