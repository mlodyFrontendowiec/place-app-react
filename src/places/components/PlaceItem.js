import React from "react";
import styled from "styled-components";

const PlaceItem = ({ imageUrl, title, address, description }) => {
  return (
    <StyledListItem>
      <div>
        <img src={imageUrl} alt={title} />
      </div>
      <StyledHeadersContainer>
        <h2>{title}</h2>
        <h3>{address}</h3>
        <p>{description}</p>
      </StyledHeadersContainer>
      <ButtonContainer>
        <StyledButton>VIEW ON MAP</StyledButton>
        <StyledButton>EDIT</StyledButton>
        <StyledButton>DELETE</StyledButton>
      </ButtonContainer>
    </StyledListItem>
  );
};

const StyledListItem = styled.li`
  width: 60%;
  background-color: #4567fc;
  margin: 20px auto;
  list-style: none;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 5px #aaa;
`;
const StyledHeadersContainer = styled.div`
  color: white;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const StyledButton = styled.button`
  margin: 0 10px;
  font-size: 15px;
  padding: 10px;
  border: 2px solid black;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    transform: scale(1.05);
  }
`;

export default PlaceItem;
