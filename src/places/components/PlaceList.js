import React from "react";
import styled from "styled-components";
import PlaceItem from "./PlaceItem";

const PlaceList = ({ items }) => {
  if (items.length === 0) {
    return <StyledCard>No places found. Maybe create one ?</StyledCard>;
  }

  return (
    <ul>
      {items.map((place) => (
        <PlaceItem {...place} key={place.id} />
      ))}
    </ul>
  );
};
const StyledCard = styled.h2`
  text-align: center;
`;

export default PlaceList;
