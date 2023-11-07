// src/components/Logo.js
import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  text-align: center;
  padding: 16px;
`;

const LogoImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Logo = ({ src, alt }) => {
    return (
        <LogoContainer>
            <LogoImage src={src} alt={alt} />
        </LogoContainer>
    );
};

export default Logo;
