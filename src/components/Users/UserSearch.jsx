import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
  }

  button {
    align-self: flex-start;
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const UserSearch = () => {
    const [searchCriteria, setSearchCriteria] = useState({
        username: '',
        userType: '',
        branch: '',
        email: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchCriteria((prevCriteria) => ({
            ...prevCriteria,
            [name]: value,
        }));
    };

    const handleSearch = () => {
        // Lógica para realizar la búsqueda en función de los criterios de búsqueda
        console.log('Búsqueda realizada:', searchCriteria);
    };

    return (
        <SearchContainer>
            <input
                type="text"
                name="username"
                placeholder="Usuario"
                value={searchCriteria.username}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="userType"
                placeholder="Tipo de Usuario"
                value={searchCriteria.userType}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="branch"
                placeholder="Sucursal"
                value={searchCriteria.branch}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="email"
                placeholder="Email"
                value={searchCriteria.email}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>
                <FaSearch />
            </button>
        </SearchContainer>
    );
};

export default UserSearch;
