"use client";

import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const HeaderContainer = styled.header`
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

const Header: React.FC = () => (
  <HeaderContainer>
    <Icon type="menu" size={24} />
    <Icon type="language" size={24} />
  </HeaderContainer>
);

export default Header;
