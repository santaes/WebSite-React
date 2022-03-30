import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <Copyright>BATSOLSKY DEV ©</Copyright>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  height: 10%;
  background-color: #111;
  color: lightgray;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 786px) {
    padding: 10px;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;
const ListItem = styled.li`
  margin-right: 20px;
  @media screen and (max-width: 786px) {
    margin-right: 10px;
    font-size: 14px;
  }
`;

const Copyright = styled.span`
  @media screen and (max-width: 786px) {
    font-size: 14px;
  }
`;

export default Footer;
