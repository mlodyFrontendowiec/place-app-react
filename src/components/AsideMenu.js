import React from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";

const AsideMenu = ({ show, closeAside }) => {
  return (
    <StyledAside show={show}>
      <NavLinks type="aside" closeAside={closeAside} />
    </StyledAside>
  );
};

const StyledAside = styled.aside`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  background-color: #3d52d5;
  margin: 0;
  top: 0;
  right: 0;
  ${(props) =>
    props.show ? `transform:translateX(0)` : `transform:translateX(-100%)`}
`;

export default AsideMenu;
