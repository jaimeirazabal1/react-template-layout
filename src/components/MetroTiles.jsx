import React from 'react';
import styled from 'styled-components';
import { FaUsers, FaBuilding, FaUserTie, FaUserFriends, FaEdit, FaFileInvoiceDollar, FaCity, FaUniversity, FaIdCard, FaTruckLoading, FaShippingFast, FaSearch, FaTruckMonster, FaCalendarAlt, FaUserSecret, FaExclamationTriangle, FaMoneyCheckAlt, FaBalanceScale, FaChartLine, FaChartBar, FaUserCheck, FaMobileAlt, FaPlusCircle, FaConciergeBell, FaFileAlt, FaFileExcel, FaFileInvoice, FaFileContract } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Category from './Category'; // Importa el componente Category

const MetroContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;

const MetroTile = styled.div`
  width: 140px;
  height: 80px;
  background-color: #2a6d2d;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius:4px;
  cursor: pointer;
  padding:10px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #a7c0b1;
    transform: scale(1.05);
  }
`;

const MetroText = styled.h2`
  font-size: 11px;
  margin-top: 8px;
`;

const MetroTiles = () => {
    return (
        <MetroContainer>
            <Category title="Herramientas">
                <Link to="/users">
                    <MetroTile>
                        <FaUsers size={20} />
                        <MetroText>Usuarios</MetroText>
                    </MetroTile>
                </Link>
                <Link to="/users">
                    <MetroTile>
                        <FaUsers size={20} />
                        <MetroText>Compañias</MetroText>
                    </MetroTile>
                </Link>
                <Link to="/users">
                    <MetroTile>
                        <FaEdit size={20} />
                        <MetroText>Modificar sucursal</MetroText>
                    </MetroTile>
                </Link>
                <Link to="/users">
                    <MetroTile>
                        <FaFileInvoiceDollar size={20} />
                        <MetroText>Cheques reportados</MetroText>
                    </MetroTile>
                </Link>
                <Link to="/users">
                    <MetroTile>
                        <FaCity size={20} />
                        <MetroText>Ciudades</MetroText>
                    </MetroTile>
                </Link>
                <Link to="/users">
                    <MetroTile>
                        <FaUniversity size={20} />
                        <MetroText>Bancos</MetroText>
                    </MetroTile>
                </Link>
                <Link to="/users">
                    <MetroTile>
                        <FaIdCard size={20} />
                        <MetroText>Ids</MetroText>
                    </MetroTile>
                </Link>
                {/* Agrega más subcuadros aquí */}
            </Category>

            <Category title="Check">
                <Link to="/companies">
                    <MetroTile>
                        <FaBuilding size={20} />
                        <MetroText>Compañías</MetroText>
                    </MetroTile>
                </Link>
                <Link to="/customers">
                    <MetroTile>
                        <FaUserTie size={20} />
                        <MetroText>Clientes</MetroText>
                    </MetroTile>
                </Link>

                {/* Agrega más subcuadros aquí */}
            </Category>
            <Category title="Reconciliación">
                <Category title="Alta">

                    <Link to="/companies">
                        <MetroTile>
                            <FaTruckLoading size={20} />
                            <MetroText>Envío Mayor</MetroText>
                        </MetroTile>
                    </Link>
                    <Link to="/companies">
                        <MetroTile>
                            <FaShippingFast size={20} />
                            <MetroText>Compañia envíos</MetroText>
                        </MetroTile>
                    </Link>
                </Category>
                <Link to="/customers">
                    <MetroTile>
                        <FaSearch size={20} />
                        <MetroText>Búsqueda General</MetroText>
                    </MetroTile>
                </Link>
                <Category title="Reporte">

                    <Link to="/customers">
                        <MetroTile>
                            <FaTruckMonster size={20} />
                            <MetroText>Envíos mayores</MetroText>
                        </MetroTile>
                    </Link>
                </Category>
                {/* Agrega más subcuadros aquí */}
            </Category>
            <Category title="Reportes">
                <Category title="Sucursal">
                    <Link to="/customers">
                        <MetroTile>
                            <FaCalendarAlt size={20} />
                            <MetroText>Corte Cajera por fecha</MetroText>
                        </MetroTile>
                    </Link>
                    <Link to="/customers">
                        <MetroTile>
                            <FaUserSecret size={20} />
                            <MetroText>Actividades Sospechosas</MetroText>
                        </MetroTile>
                    </Link>
                    <Link to="/customers">
                        <MetroTile>
                            <FaExclamationTriangle size={20} />
                            <MetroText>Cheques Problemas</MetroText>
                        </MetroTile>
                    </Link>
                    <Link to="/customers">
                        <MetroTile>
                            <FaMoneyCheckAlt size={20} />
                            <MetroText>Cheques por pagar</MetroText>
                        </MetroTile>
                    </Link>
                    <Link to="/customers">
                        <MetroTile>
                            <FaBuilding size={20} />
                            <MetroText>Cheques por compañia</MetroText>
                        </MetroTile>
                    </Link>
                    <Link to="/customers">
                        <MetroTile>
                            <FaBalanceScale size={20} />
                            <MetroText>Cheques mayor a 2500</MetroText>
                        </MetroTile>
                    </Link>
                    <Link to="/customers">
                        <MetroTile>
                            <FaChartLine size={20} />
                            <MetroText>Corte concentrado por dia</MetroText>
                        </MetroTile>
                    </Link>
                </Category>
                <Category title="Otras Sucursales">
                    <Link to="/customers">
                        <MetroTile>
                            <FaChartBar size={20} />
                            <MetroText>Concentrado rojo </MetroText>
                        </MetroTile>

                    </Link>
                    <Link to="/customers">
                        <MetroTile>
                            <FaUserCheck size={20} />
                            <MetroText>Los mas buscados</MetroText>
                        </MetroTile>

                    </Link>
                </Category>
            </Category>
            <Category title="Multipagos">
                <Category title="TAE">
                    <Link to="/customers">
                        <MetroTile>
                            <FaMobileAlt size={20} />
                            <MetroText>Recarga</MetroText>
                        </MetroTile>
                    </Link>
                </Category>
                <Link to="/customers">
                    <MetroTile>
                        <FaPlusCircle size={20} />
                        <MetroText>MultiTAE</MetroText>
                    </MetroTile>
                </Link>
                <Link to="/customers">
                    <MetroTile>
                        <FaConciergeBell size={20} />
                        <MetroText>Multiservicios</MetroText>
                    </MetroTile>
                </Link>
                <Category title="Reportes">
                    <Link to="/customers">
                        <MetroTile>
                            <FaFileAlt size={20} />
                            <MetroText>Reporte TAE</MetroText>
                        </MetroTile>
                    </Link>
                    <Link to="/customers">
                        <MetroTile>
                            <FaFileExcel size={20} />
                            <MetroText>Concentrado MultiTAE</MetroText>
                        </MetroTile>
                    </Link>
                    <Link to="/customers">
                        <MetroTile>
                            <FaFileInvoice size={20} />
                            <MetroText>Reporte Multiservicios</MetroText>
                        </MetroTile>
                    </Link>
                    <Link to="/customers">
                        <MetroTile>
                            <FaFileContract size={20} />
                            <MetroText size={12}>Concentrado Multiservicios</MetroText>
                        </MetroTile>
                    </Link>
                </Category>
            </Category>
        </MetroContainer>
    );
};

export default MetroTiles;
