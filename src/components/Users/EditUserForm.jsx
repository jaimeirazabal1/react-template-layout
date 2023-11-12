import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import styled from 'styled-components';
import usersData from '../../dataExample/users.json';
import { useParams } from 'react-router-dom';
import TitleWithLine from '../common/TitleWithLine';
const EditUserForm = () => {
  const { id } = useParams();
  const user = usersData.users.find(user => user.id == id)
  const [editedUser, setEditedUser] = useState({ ...user });
  console.log('editedUser', editedUser)
  const { username, password, userType, branch, email } = editedUser;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para enviar la información actualizada del usuario
    // a través de una solicitud HTTP o cualquier otro método necesario.
    console.log('Usuario actualizado:', editedUser);
  };

  return (
    <>
      <TitleWithLine title="Información del usuario"></TitleWithLine>
      <Container>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <label>Usuario</label>
            <Input
              type="text"
              name="username"
              value={username}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Password</label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Tipo de Usuario</label>
            <Input
              type="text"
              name="userType"
              value={userType}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Sucursal</label>
            <Input
              type="text"
              name="branch"
              value={branch}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <label>E-mail</label>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </FormGroup>
          <Buttons>
            <Button type="submit">Modificar</Button>
            <Link to="/users"><CancelButton>Cancelar</CancelButton></Link>
          </Buttons>
        </Form>
      </Container>
    </>

  );
};

const Container = styled.div`
  border-radius: 4px;
  padding: 0 100px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display:block;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

const Button = styled.button`
  background-color: #0078d4;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005a9e;
  }
`;

const CancelButton = styled.button`
  background-color: #ccc;
  color: #333;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #999;
  }
`;

export default EditUserForm;
