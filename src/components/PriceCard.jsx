import React from 'react';
import styled from 'styled-components';

function PriceCard({ price, type }) {
  return (
    <Container>
      <PriceContainer>
        $<Price>{price}</Price>/month
      </PriceContainer>
      <Type>{type} Plan</Type>
      <List>
        <ListItem>200 Hand-Crafted Templates</ListItem>
        <ListItem>Exclusive Support</ListItem>
        <ListItem>50+ PreBuilt Websites</ListItem>
        <ListItem>Premium Plugins</ListItem>
        {''}
      </List>
      <Button>Join Now</Button>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  /* -webkit-box-shadow: 0px 8px 15px 8px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 8px 15px 8px rgba(0, 0, 0, 0.33); */
  border: 2px solid #e4e4e4;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 50px;
  @media screen and (max-width: 786px) {
    margin-right: 0;
    margin-bottom: 10px;
    padding: 10px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 50px;
  @media screen and (max-width: 786px) {
    font-size: 30px;
  }
`;

const Type = styled.button`
  padding: 10px;
  margin: 10px 0;
  border: 1.5px solid crimson;
  color: crimson;
  background-color: #fff;
  border-radius: 20px;
  @media screen and (max-width: 786px) {
    display: none;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin: 30px 0;
  @media screen and (max-width: 786px) {
    margin: 10px;
    font-size: 12px;
  }
`;

const Button = styled.button`
  border: none;
  background-color: darkblue;
  color: white;
  font-size: 16px;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  @media screen and (max-width: 786px) {
    font-size: 12px;
    padding: 5px;
  }
`;

export default PriceCard;
