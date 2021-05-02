import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UsersItem = ({ id, image, name, places }) => {
  return (
    <StyledLink to={`/${id}/places`}>
      <StyledListItem>
        <StyledContainer>
          <div>
            <img src={image} alt={name} width="150px" />
          </div>
          <div>
            <StyledHeader2>{name}</StyledHeader2>
            <StyledHeader3>
              {places}
              {places === 1 ? " Place" : " Places"}
            </StyledHeader3>
          </div>
        </StyledContainer>
      </StyledListItem>
    </StyledLink>
  );
};

const StyledListItem = styled.li`
  width: 50%;
  margin: 0 auto;
  list-style: none;
  box-shadow: 0px 10px 15px #ccc;
  border-radius: 20px;
  padding: 10px;
  margin-top: 20px;
  background-color: #4567fc;
  transition: 0.2s transform;
  :hover {
    transform: scale(1.05);
  }
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const StyledHeader2 = styled.h2`
  font-size: 20px;
  color: white;
`;
const StyledHeader3 = styled.h3`
  font-size: 18px;
  color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default UsersItem;
