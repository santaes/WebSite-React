import React from 'react';
import styled from 'styled-components';
import App from '../images/app.png';
import AnimatedShapes from './AnimatedShapes';

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={App} />
      </Left>
      <Right>
        <Title>
          <b>good</b> design <br />
          <b>good</b> business
        </Title>
        <Subtitle>We know that good design means good business.</Subtitle>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iste
          inventore architecto tempore dolores voluptatibus et. Adipisci sint
          iste ipsam.
        </Description>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iste
          inventore architecto tempore dolores voluptatibus et. Adipisci sint
          iste ipsam.
        </Description>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  @media screen and (max-width: 786px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;
const Left = styled.div`
  width: 50%;
  @media screen and (max-width: 786px) {
    display: none;
  }
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 786px) {
    width: 100%;
  }
`;
const Image = styled.img`
  width: 80%;
`;
const Title = styled.span`
  font-size: 70px;
  @media screen and (max-width: 786px) {
    font-size: 50px;
  }
`;
const Subtitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;
const Description = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;
const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: #fff;
  font-size: 20px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 20px;
`;

export default Feature;
