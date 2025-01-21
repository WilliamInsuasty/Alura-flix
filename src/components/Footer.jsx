// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  text-align: center;
  padding: 20px;

  border-top: 1px solid #007bff; 
  box-shadow: 0 4px 6px rgba(0, 123, 255, 0.6), 
              0 0 10px rgba(0, 123, 255, 0.6), 
              0 0 20px rgba(0, 123, 255, 0.6);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© VMW - 2025 Alura Flix - Todos los derechos reservados</p>
    </FooterContainer>
  );
};

export default Footer;
