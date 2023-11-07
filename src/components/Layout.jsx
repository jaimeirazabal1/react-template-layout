// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 16px;
`;

const Main = styled.main`
  padding: 16px;
`;

const Layout = ({ children }) => {
    return (
        <div>
            <Header>
                <h1>My React App</h1>
                <nav>
                    <Link to="/">Home</Link> | <Link to="/about">About</Link>
                </nav>
            </Header>
            <Main>{children}</Main>
        </div>
    );
};

export default Layout;
