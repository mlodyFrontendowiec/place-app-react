import React from "react";
import styled from "styled-components";

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

const StyledHeader = styled.header`
  background-color: #3d52d5;
  display: flex;
  padding: 10px;
  width: 100%;
`;
export default Header;
