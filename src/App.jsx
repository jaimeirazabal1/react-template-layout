// src/App.js
import React, { useState } from 'react';
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

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  margin-left: 250px; /* Ancho del sidebar */
`;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Agrega el estado de autenticación

  return (
    <Router>
      <AppContainer>
        <Sidebar isAuthenticated={isAuthenticated} />
        <ContentContainer>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/terms" component={TerminosYPoliticas} />
            <Route path="/login">
              <Login setIsAuthenticated={setIsAuthenticated} />
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
        </ContentContainer>
      </AppContainer>
    </Router>
  );
}

export default App;
