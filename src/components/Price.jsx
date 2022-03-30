import React from 'react';
import styled from 'styled-components';
import PriceCard from './PriceCard';

const Price = () => {
  return (
    <Container>
      <PriceCard price='10' type='Basic' />
      <PriceCard price='20' type='Premium' />
      <PriceCard price='50' type='Advanced' />
    </Container>
  );
};
const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 786px) {
    flex-direction: column;
  }
  /*  @media screen and (max-width: 768px) {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  } */
`;

export default Price;
