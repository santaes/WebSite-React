import React from 'react';
import styled from 'styled-components';
import Search from '../images/search.png';

const MiniCard = () => {
  return (
    <Container>
      <Image src={Search} />
      <Text>Lorem ipsum dolor sit amet consectetur .</Text>
    </Container>
  );
};

const Container = styled.div`
  width: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 8px 15px 8px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 8px 15px 8px rgba(0, 0, 0, 0.33);
  @media screen and (max-width: 786px) {
    width: 50px;
  }
`;

const Image = styled.img`
  width: 20px;
`;

const Text = styled.span`
  margin-top: 10px;
  text-align: center;
  @media screen and (max-width: 786px) {
    font-size: 14px;
  }
`;

export default MiniCard;
