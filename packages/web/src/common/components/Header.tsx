"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";
import MobileNav from "./NavTools/MobileNav";

const HeaderContainer = styled.header`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.WHITE};
  position: sticky;
  top: 0;
  z-index: 101;
`;

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest("header") && !target.closest(".mobile-nav")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("isEnglish", isEnglish.toString());
  }, [isEnglish]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <HeaderContainer>
        <Icon type="menu" size={24} onClick={() => setIsOpen(!isOpen)} />
        <Icon
          type="language"
          size={24}
          onClick={() => setIsEnglish(!isEnglish)}
        />
      </HeaderContainer>
      {isOpen && <MobileNav keys={["HOME", "SAFETY"]} />}
    </>
  );
};

export default Header;
