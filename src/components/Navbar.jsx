import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Bats Agency</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <Button>JOIN NOW</Button>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 16px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 16px 24px;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
const Menu = styled.ul`
  display: flex;
  list-style: none;
  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (max-width: 840px) {
    display: none;
  }
`;
const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: #565656;
`;
const Button = styled.button`
  border: 2px solid #ffffff;
  padding: 10px 15px;
  background-color: crimson;
  color: #ffffff;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;

export default Navbar;
