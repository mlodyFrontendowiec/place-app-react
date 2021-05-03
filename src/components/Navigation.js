import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AsideMenu from "./AsideMenu";
import Header from "./Header";
import NavLinks from "./NavLinks";

const Navigation = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, []);

  const handleHamburger = () => {
    setShowMenu((prev) => !showMenu);
  };

  const closeAsideMenu = () => {
    setShowMenu(false);
  };
  const menuComponent =
    windowSize > 800 ? (
      <NavLinks />
    ) : (
      <StyledHamburgerContainer onClick={handleHamburger}>
        <StyledHamburgerElement></StyledHamburgerElement>
        <StyledHamburgerElement></StyledHamburgerElement>
        <StyledHamburgerElement></StyledHamburgerElement>
      </StyledHamburgerContainer>
    );

  const Aside =
    windowSize > 800 ? null : (
      <AsideMenu show={showMenu} closeAside={closeAsideMenu} />
    );

  return (
    <Header>
      <StyledHeader1Link to="/">Your places</StyledHeader1Link>
      {menuComponent}
      {Aside}
    </Header>
  );
};

const StyledHeader1Link = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  font-size: 30px;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const StyledHamburgerContainer = styled.div`
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-direction: column;
  margin-left: auto;
  margin-right: 10px;
  cursor: pointer;
  z-index: 1000;
`;

const StyledHamburgerElement = styled.span`
  width: 100%;
  background-color: white;
  height: 6px;
  border-radius: 10px;
`;

export default Navigation;
