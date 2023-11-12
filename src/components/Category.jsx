import React from 'react';
import styled from 'styled-components';

const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    background-color:#fefdff;
    border-radius:20px;
    padding:0 0px;
  
`;

const CategoryTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 16px;
  
`;

const CategoryTiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1px;
`;

const Category = ({ title, children }) => {
    return (
        <CategoryContainer>
            <CategoryTitle>{title}</CategoryTitle>
            <CategoryTiles>{children}</CategoryTiles>
        </CategoryContainer>
    );
};

export default Category;
