import React from 'react';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa'; // Importa el icono de usuario de "react-icons"

// Datos ficticios de usuarios (puedes reemplazarlos con tus datos reales)
const usersData = [
    { id: 1, name: 'Usuario 1', email: 'usuario1@example.com' },
    { id: 2, name: 'Usuario 2', email: 'usuario2@example.com' },
    { id: 3, name: 'Usuario 3', email: 'usuario3@example.com' },
    { id: 4, name: 'Usuario 4', email: 'usuario4@example.com' },
];

// Define los estilos para el contenedor de usuarios
const UsersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

// Define los estilos para el elemento de usuario
const UserCard = styled.div`
  width: 200px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserIcon = styled(FaUser)`
  font-size: 36px;
  color: #0078d4;
`;

const UserName = styled.h3`
  font-size: 18px;
  margin-top: 8px;
`;

const UserEmail = styled.p`
  font-size: 14px;
  color: #555;
  margin-top: 4px;
`;

const UsersList = () => {
    return (
        <UsersContainer>
            {usersData.map((user) => (
                <UserCard key={user.id}>
                    <UserIcon />
                    <UserName>{user.name}</UserName>
                    <UserEmail>{user.email}</UserEmail>
                </UserCard>
            ))}
        </UsersContainer>
    );
};

export default UsersList;
