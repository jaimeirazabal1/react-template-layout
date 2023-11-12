import React, { useContext } from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../GlobalContext';
import { Redirect, useHistory } from 'react-router-dom/cjs/react-router-dom';
// Styled Components
const MenuContainer = styled.div`
  background-color: #415b60; // This is the green background color of the menu bar
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuItem = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 20px;
  padding: 10px 15px;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #66BB6A; // A lighter green on hover
    cursor:pointer; 

  }
`;

const ActiveMenuItem = styled(MenuItem)`
  background-color: #66BB6A; // Active items have a different background
`;

const SearchBox = styled.input`
  padding: 8px;
  margin-right: 20px;
  border: none;
  border-radius: 4px;
  width:500px;
  height:30px;
  border-radius:30px;
`;

const MenuButton = styled.button`
  background-color: #F44336; // Red background for the button
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 20px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #EF5350; // A lighter red on hover
  }
`;

// Menu Component
const Menu = ({ items, active, path }) => {
  const history = useHistory()
  const { globalState, setGlobalState } = useContext(GlobalContext);
  const { isAuthenticated } = globalState;
  const handleLogout = () => {
    setGlobalState({
      ...globalState, isAuthenticated: false
    })
    history.push('/login');

  }
  return (
    <MenuContainer>
      <div to="/">
        <Logo src="http://dslsistemacheck.com/img/logo-DSL.png" alt="Logo de la aplicación" />
      </div>
      <div>
        {
          isAuthenticated ?

            <SearchBox type="text" placeholder="Search..." />
            : null
        }
      </div>

      <div>
        {items.map(item => (
          item === active ?
            <ActiveMenuItem key={`${item.link + item.label}`} to={item.link} >
              {item.label}
            </ActiveMenuItem>
            :
            <MenuItem key={`${item.link + item.label}`} to={item.link} >
              {item.label}
            </MenuItem>
        ))}
      </div>
      <div>
        {
          isAuthenticated ?

            <button onClick={handleLogout}>
              Cerrar Sesión
            </button>
            : null
        }
      </div>
    </MenuContainer>
  );
};

export default Menu;
