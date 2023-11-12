import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaUser, FaLock } from 'react-icons/fa';
import TitleWithLine from './common/TitleWithLine';
import { GlobalContext } from '../GlobalContext';
import { Redirect, useHistory } from 'react-router-dom/cjs/react-router-dom';

// Estilos
const LoginContainer = styled.div`
  margin-top:100px !important;
  padding: 40px;
  width: 40%;
  border-radius: 10px;
  margin: auto;
  background-color: #a3bfae;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #2a4249;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InputIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border: 2px solid #415b60;
  border-radius: 8px;
`;

const Icon = styled.div`
  color: #2a6d2d;
  margin-right: 10px;
  font-size: 1.2em; // Aumentar tamaño del ícono
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1em; // Aumentar tamaño del texto
`;

const Button = styled.button`
  background-color: #435c5f;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 1em; // Aumentar tamaño del texto
  transition: background-color 0.3s;

  &:hover {
    background-color: #a9c2b3;
  }
`;

// Componente Login
const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { globalState, setGlobalState } = useContext(GlobalContext);

  const { isAuthenticated } = globalState;
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Lógica de autenticación
    console.log('Usuario:', username);
    console.log('Contraseña:', password);

    setGlobalState({ ...globalState, isAuthenticated: true });
    history.push('/dashboard');
  };



  return (
    <>
      <TitleWithLine title="Iniciar Sesión"></TitleWithLine>
      <LoginContainer>
        <Title>Iniciar Sesión</Title>
        <InputContainer>
          <InputIcon>
            <Icon><FaUser /></Icon>
            <Input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Usuario"
            />
          </InputIcon>
          <InputIcon>
            <Icon><FaLock /></Icon>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Contraseña"
            />
          </InputIcon>
        </InputContainer>
        <Button onClick={handleLogin}>Iniciar Sesión</Button>
      </LoginContainer>
    </>
  );
};

export default Login;
