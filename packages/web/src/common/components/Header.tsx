"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";
import MobileNav from "./NavTools/MobileNav";

const HeaderContainer = styled.header`
  padding: 8px 16px;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
`;

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderContainer>
        <Icon type="menu" size={24} onClick={() => setIsOpen(!isOpen)} />
        <Icon type="language" size={24} />
      </HeaderContainer>
      {isOpen && <MobileNav keys={["HOME", "SAFETY"]} />}
    </>
  );
};

export default Header;
