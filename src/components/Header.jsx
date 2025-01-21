import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #20232a;
  color: #61dafb;
  height: 3rem;

  margin-bottom: 8px; 
  border-bottom: 1px solid #007bff; 
  box-shadow: 0 4px 6px rgba(0, 123, 255, 0.6), 
              0 0 10px rgba(0, 123, 255, 0.6), 
              0 0 20px rgba(0, 123, 255, 0.6);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const Button = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: ${({ active }) => (active ? '#4ea8d6' : '#61dafb')};
  color: #20232a;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: ${({ active }) => (active ? '#4ea8d6' : '#4ea8d6')};
  }
`;

const Header = () => {
  const location = useLocation(); // Obtiene la ruta actual

  return (
    <HeaderContainer>
      <Logo>ALURA FLIX</Logo>
      <Nav>
        <Button to="/" active={location.pathname === '/'}>
          Home
        </Button>
        <Button to="/NewVideo" active={location.pathname === '/NewVideo'}>
          Nuevo Video
        </Button>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

