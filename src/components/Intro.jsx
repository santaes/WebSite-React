import React from 'react';
import styled from 'styled-components';
import Woman from '../images/woman.png';
import AnimatedShapes from './AnimatedShapes';

export const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Description>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business
        </Description>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call Us (012) 345 - 6789</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Woman} />
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  padding: 20px;
  @media screen and (max-width: 786px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 786px) {
    width: 100%;
    height: 100%;
  }
`;
const Title = styled.h1`
  font-size: 60px;
  width: 60%;
  @media screen and (max-width: 786px) {
    width: 100%;
    font-size: 50px;
  }
`;
const Description = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media screen and (max-width: 786px) {
    width: 100%;
  }
`;
const Info = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  @media screen and (max-width: 786px) {
    width: 100%;
    flex-direction: column;
  }
`;
const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: #ffffff;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  @media screen and (max-width: 786px) {
    margin-bottom: 20px;
  }
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;
const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;
const ContactText = styled.span`
  color: #565656;
  margin-top: 5px;
`;
const Right = styled.div`
  width: 40%;
  @media screen and (max-width: 786px) {
    display: none;
  }
`;
const Image = styled.img`
  width: 100%;
`;
