import styled from 'styled-components';
import { css } from 'styled-components';
import Contact from './components/Contact';
import Feature from './components/Feature';
import Footer from './components/Footer';
import { Intro } from './components/Intro';
import Navbar from './components/Navbar';
import Price from './components/Price';
import Service from './components/Service';

function App() {
  const smallScreen = window.screen.width <= 786 ? true : false;
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service />
        {!smallScreen && <ServiceShape />}
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
const Shape = css`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;
const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
`;
const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  background-color: pink;
`;
const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
  background-color: #f99497;
`;
const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
`;
