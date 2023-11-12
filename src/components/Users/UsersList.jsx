import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import usersData from '../../dataExample/users.json';
import styled from 'styled-components';
import { FaUser, FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import TitleWithLine from '../common/TitleWithLine';

const UserTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
`;

const TableHeader = styled.th`
  background-color: #689F38;
  color: white;
  padding: 8px;
  text-align: left;
`;

const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const ActionIcons = styled.div`
  display: flex;
  justify-content: space-between;
`;
const UserListContainer = styled.div`
  padding:0 100px;
`;
const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8); // Número de usuarios por página

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // const response = await axios.get('../../dataExample/users.json'); // Ruta a tu archivo JSON simulado
        console.log('users', users)
        const allUsers = usersData.users;
        setUsers(allUsers);
      } catch (error) {
        console.error('Error al cargar los usuarios', error);
      }
    };

    fetchUsers();
  }, []);

  // Calcular los índices de inicio y final de los usuarios en la página actual
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Cambiar de página
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber); // Define la función handlePageChange aquí

  return (
    <>

      <TitleWithLine title="Lista de Usuarios"></TitleWithLine>
      <UserListContainer>

        <div>
          <UserTable>
            <thead>
              <tr>
                <TableHeader>Nº</TableHeader>
                <TableHeader>Usuario</TableHeader>
                <TableHeader>Sucursal</TableHeader>
                <TableHeader>Tipo de Usuario</TableHeader>
                <TableHeader>Correo Electrónico</TableHeader>
                <TableHeader>Accesos</TableHeader>
                <TableHeader>Última IP</TableHeader>
                <TableHeader>Último Acceso</TableHeader>
                <TableHeader>Acciones</TableHeader>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr key={user.id}>
                  <TableData>{index + 1}</TableData>
                  <TableData>{user.username}</TableData>
                  <TableData>{user.branch}</TableData>
                  <TableData>{user.userType}</TableData>
                  <TableData>{user.email}</TableData>
                  <TableData>{user.accesses}</TableData>
                  <TableData>{user.lastIp}</TableData>
                  <TableData>{user.lastAccess}</TableData>
                  <TableData>
                    <ActionIcons>
                      <Link to={`/edit/${user.id}`}><FaEdit size={20} title="Editar" /></Link>
                      <Link to={`/users`}><FaTrash size={20} title="Eliminar" /></Link>
                    </ActionIcons>
                  </TableData>
                </tr>
              ))}
            </tbody>
          </UserTable>
        </div>
        <Pagination
          totalItems={users.length}
          itemsPerPage={usersPerPage}
          onPageChange={handlePageChange}
        />
      </UserListContainer>
    </>
  );
};

export default UsersList;
