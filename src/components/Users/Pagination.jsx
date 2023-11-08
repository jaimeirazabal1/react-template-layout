import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  margin-top:10px;
`;
const ButtonContainer = styled.button`
  margin-left:10px;
  margin-right:10px;
`;
const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        onPageChange(currentPage);
    }, [currentPage, onPageChange]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <PaginationContainer>
            <ButtonContainer onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                Anterior
            </ButtonContainer>
            <span>
                Página {currentPage} de {totalPages}
            </span>
            <ButtonContainer onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Siguiente
            </ButtonContainer>
        </PaginationContainer>
    );
};

export default Pagination;
