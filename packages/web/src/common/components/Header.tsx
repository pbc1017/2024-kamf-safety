"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "@kamf-safety/web/assets/logo.png";
import LocalStorage from "@kamf-safety/web/utils/localStorage";
import Icon from "./Icon";
import MobileNav from "./NavTools/MobileNav";

const HeaderContainer = styled.header`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE};
  position: sticky;
  top: 0;
  z-index: 101;
`;

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(
    LocalStorage.getItem("isEnglish") === "true",
  );

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest("header") && !target.closest(".mobile-nav")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    LocalStorage.setItem("isEnglish", isEnglish.toString());
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
        <Image
          src={logo}
          alt="KAMF logo"
          width={54}
          height={36}
          onClick={() => {
            window.location.href = "/";
          }}
        />
        <Icon
          type="language"
          size={24}
          onClick={() => {
            setIsEnglish(!isEnglish);
            window.location.reload();
          }}
        />
      </HeaderContainer>
      {isOpen && <MobileNav keys={["HOME", "SAFETY"]} />}
    </>
  );
};

export default Header;
