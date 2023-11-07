// src/components/Sidebar.js
import React from 'react';
import styled from 'styled-components';
import DashboardMenu from './common/DashboardMenu'; // Importa el componente DashboardMenu
import UsersMenu from './common/UsersMenu'; // Importa el componente UsersMenu
import { Link } from 'react-router-dom';
import Logo from './Logo';
import LoginMenu from './common/LoginMenu';
import TermsMenu from './common/TermsMenu';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: grey;
  color: #fff;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
`;

const SidebarItem = styled(Link)`
  display: block;
  padding: 16px;
  text-decoration: none;
  color: #fff;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo src="http://dslsistemacheck.com/img/logo_check_by_dsl.png" alt="Logo de la aplicación" />
      {/* <SidebarItem to="/"><DashboardMenu /></SidebarItem> */}
      <SidebarItem to="/terms"><TermsMenu /></SidebarItem>
      {/* <SidebarItem to="/about"><UsersMenu /></SidebarItem> */}
      <SidebarItem to="/login"><LoginMenu /></SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
