// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './components/Login';
import TerminosYPoliticas from './components/Terms';

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
  return (
    <Router>
      <AppContainer>
        <Sidebar />
        <ContentContainer>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/terms" component={TerminosYPoliticas} />
            <Route path="/login" component={Login} />
          </Switch>
        </ContentContainer>
      </AppContainer>
    </Router>
  );
}

export default App;
