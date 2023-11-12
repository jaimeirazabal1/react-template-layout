// src/App.js
import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './components/Login';
import TerminosYPoliticas from './components/Terms';
import PrivateRoute from './components/PrivateRoute'; // Importa PrivateRoute
import Dashboard from './components/Dashboard';
import UsersList from './components/Users/UsersList';
import EditUserForm from './components/Users/EditUserForm';
import Menu from './components/common/Menu';
import { GlobalContext } from './GlobalContext';

const AppContainer = styled.div`
 
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  margin-left: 250px; /* Ancho del sidebar */
`;

function App() {
  const { globalState, setGlobalState } = useContext(GlobalContext);
  const { isAuthenticated } = globalState
  let menuItems = [
    { label: 'Dashboard', link: '/dashboard', private: true },
    { label: 'Términos y Condiciones', link: '/terms', private: false },
    { label: 'Términos y Condiciones', link: '/terms', private: true },
    { label: 'Iniciar Sesión', link: '/login', private: false },
  ];
  menuItems = menuItems.filter(route => route.private == isAuthenticated)
  return (
    <Router>
      <AppContainer>
        <Menu items={menuItems} active={``} />
        {/* <Sidebar isAuthenticated={isAuthenticated} /> */}
        {/* <ContentContainer>*/
          <Switch>
            <Route path="/" exact component={TerminosYPoliticas} />
            <Route path="/about" component={About} />
            <Route path="/terms" component={TerminosYPoliticas} />
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute
              path="/dashboard"
              component={Dashboard}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              path="/users"
              component={UsersList}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              path="/edit/:id"
              component={EditUserForm}
              isAuthenticated={isAuthenticated}
            />
          </Switch>
        /*</ContentContainer> */}
      </AppContainer>
    </Router>
  );
}

export default App;
