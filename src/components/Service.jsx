import React, { useState } from 'react';
import styled from 'styled-components';
import How from '../images/how.png';
import MiniCard from './MiniCard';
import Play from '../images/play.png';

const Service = () => {
  const [open, setOpen] = useState(false);
  const smallScreen = window.screen.width <= 786 ? true : false;

  return (
    <Container>
      <Left>
        <Image src={How} open={open} />
        <Video
          open={open}
          src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4'
          autoPlay
          controls
          loop
        />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            quasi rerum unde perferendis sequi natus velit repudiandae vitae
            optio facere? Exercitationem ipsum minima neque cumque molestias
            libero, nemo maiores aliquid.
          </Description>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <Button onClick={() => setOpen(!open)}>
            <Icon src={Play} />
            How it works
          </Button>
        </Wrapper>
      </Right>
      {smallScreen && open && (
        <Model>
          <Video
            open={open}
            src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4'
            autoPlay
            controls
            loop
          />
          <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
        </Model>
      )}
    </Container>
  );
};
const CloseButton = styled.button`
  position: absolute;
  background-color: #fff;
  padding: 5px;
  border: none;
  border-radius: 5px;
  right: 5px;
  top: 25%;
`;

const Model = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Video = styled.video`
  display: ${(props) => !props.open && 'none'};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 0;
  @media screen and (max-width: 786px) {
    width: 100%;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: #fff;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  height: 80%;
  @media screen and (max-width: 786px) {
    flex-direction: column;
  }
`;

const Right = styled.div`
  width: 50%;
  @media screen and (max-width: 786px) {
    width: 100%;
  }
`;

const Left = styled.div`
  width: 50%;
  position: relative;
  @media screen and (max-width: 786px) {
    display: none;
  }
`;
const Image = styled.img`
  height: 100%;
  margin-left: 150px;
  display: ${(props) => props.open && 'none'};
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 786px) {
    padding: 20px;
  }
`;
const Title = styled.h1``;

const Description = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export default Service;
