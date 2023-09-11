import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 25%;
  margin-right: 50;
  &:hover {
    background-color: #0056b3;
  }
`;

interface HeaderProps {
  onToggleGuide: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleGuide }) => {
  return (
    <HeaderContainer>
      <Title>Markdown Previewer</Title>
      <Button onClick={onToggleGuide}>Toggle Guide</Button>
    </HeaderContainer>
  );
};

export default Header;
