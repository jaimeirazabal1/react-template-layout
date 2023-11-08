import React from 'react';
import styled from 'styled-components';
import { FaUsers, FaBuilding, FaUserTie, FaUserFriends } from 'react-icons/fa'; // Importa los iconos de "react-icons"
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

// Define los estilos para el contenedor principal
const MetroContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px;
`;

// Define los estilos para los "tiles"
const MetroTile = styled.div`
  width: 200px;
  height: 150px;
  background-color: #0078d4;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #005a9e;
    transform: scale(1.05);
  }
`;

const MetroText = styled.h2`
  font-size: 18px;
  margin-top: 8px;
`;

const MetroTiles = () => {
    return (
        <MetroContainer>
            <Link to="/users">
                <MetroTile>
                    <FaUsers size={36} />
                    <MetroText>Usuarios</MetroText>
                </MetroTile>
            </Link>
            <Link to="/companies">
                <MetroTile onClick={() => console.log('Compañías clickeadas')}>
                    <FaBuilding size={36} />
                    <MetroText>Compañías</MetroText>
                </MetroTile>
            </Link>
            <Link to="/customers">
                <MetroTile onClick={() => console.log('Clientes clickeados')}>
                    <FaUserTie size={36} />
                    <MetroText>Clientes</MetroText>
                </MetroTile>
            </Link>
            <Link to="/friends">
                <MetroTile onClick={() => console.log('Amigos clickeados')}>
                    <FaUserFriends size={36} />
                    <MetroText>Amigos</MetroText>
                </MetroTile>
            </Link>
        </MetroContainer>
    );
};

export default MetroTiles;
