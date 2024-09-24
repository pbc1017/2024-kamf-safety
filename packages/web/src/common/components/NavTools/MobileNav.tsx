"use client";

import React from "react";
import styled from "styled-components";

import type { Paths } from "@kamf-safety/web/constants/paths";
import paths from "@kamf-safety/web/constants/paths";

import NavItem from "./NavItem";

interface NavListProps {
  keys: (keyof Paths)[];
}

const NavListInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 100;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.WHITE};
  padding: 16px;
  margin-left: 16px;
  width: 40%;
  border-radius: ${({ theme }) => theme.round.md};
  border: 1px solid ${({ theme }) => theme.colors.GRAY[200]};
  box-shadow: ${({ theme }) => theme.shadow.md};
`;

const StyledNavItem = styled(NavItem)`
  font-size: 16px;
  line-height: 20px;
`;

const MobileNav: React.FC<NavListProps> = ({ keys }) => (
  <NavListInner>
    {keys.map(key => (
      <StyledNavItem key={key} {...paths[key]} />
    ))}
  </NavListInner>
);
export default MobileNav;
