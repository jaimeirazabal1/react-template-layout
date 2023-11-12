// src/components/Sidebar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import LoginMenu from './common/LoginMenu';
import TermsMenu from './common/TermsMenu';
import DashboardMenu from './common/DashboardMenu';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #8fac9e;
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

const Sidebar = ({ isAuthenticated }) => {
  return (
    <SidebarContainer>
      <Logo src="http://dslsistemacheck.com/img/logo-DSL.png" alt="Logo de la aplicación" />
      {isAuthenticated && (
        <>
          {/* Aquí se renderizarán las rutas protegidas solo si el usuario está autenticado */}
          <SidebarItem to="/dashboard"><DashboardMenu /></SidebarItem>
          {/* Otras rutas protegidas si las tienes */}
        </>
      )}
      <SidebarItem to="/terms"><TermsMenu /></SidebarItem>
      <SidebarItem to="/login"><LoginMenu /></SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
