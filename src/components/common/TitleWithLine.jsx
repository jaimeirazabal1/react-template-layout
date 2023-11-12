import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin:20px 20px;
`;

const Title = styled.h1`
  margin: 0;
  margin-right: 10px; /* Adjust the spacing to your preference */
  font-size: 24px; /* Adjust the font size to your preference */
  font-weight: bold; /* Adjust the font weight to your preference */
`;

const Line = styled.div`
  flex-grow: 1;
  height: 2px; /* Adjust the thickness of the line to your preference */
  background-color: #000; /* Adjust the color of the line to your preference */
`;

const TitleWithLine = ({ title }) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      <Line />
    </TitleContainer>
  );
};

export default TitleWithLine;
