// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centrar horizontalmente */
  justify-content: center; /* Centrar verticalmente */
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
          </Switch>
        </ContentContainer>
      </AppContainer>
    </Router>
  );
}

export default App;
