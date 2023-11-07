// src/components/Login.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUser, FaLock } from 'react-icons/fa';

const LoginContainer = styled.div`

  padding: 20px;
  width: 300px;
  border-radius: 5px;

`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top:10px;
`;

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        // Aquí puedes implementar la lógica de autenticación
        // Por ahora, simplemente muestra los valores de usuario y contraseña en la consola.
        console.log('Usuario:', username);
        console.log('Contraseña:', password);
    };

    return (
        <LoginContainer>
            <Title>Iniciar Sesión</Title>
            <InputContainer>
                <InputIcon>
                    <FaUser />
                    <Input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Usuario"
                    />
                </InputIcon>
                <InputIcon>
                    <FaLock />
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
    );
};

export default Login;
