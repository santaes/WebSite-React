import React from 'react';
import styled from 'styled-components';
import Background from '../images/double-bubble-outline.png';
import Map from '../images/map.png';
import Phone from '../images/phone.png';
import Send from '../images/send.png';

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions? <br /> Let's Get In Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder='Your Name' />
              <Input placeholder='Your Email' />
              <Input placeholder='Subject' />
            </LeftForm>
            <RightForm>
              <TextArea placeholder='Your Message' />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>123 Park Avenue St., New York, USA</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>+123 456 789 123</Text>
            <Text>+ 123 789 456 123 321</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>contact@batsolsky.com</Text>
            <Text>sales@batsolsky.com</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};
const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media screen and (max-width: 786px) {
    margin-bottom: 20px;
    width: 100%;
  }
`;
const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
  @media screen and (max-width: 786px) {
    width: 15px;
  }
`;
const Text = styled.span`
  font-size: 20px;
  margin-right: 50px;
  @media screen and (max-width: 786px) {
    font-size: 14px;
  }
`;

const Title = styled.h1`
  margin: 50px;
  margin-top: 0;
  @media screen and (max-width: 786px) {
    margin: 20px;
  }
`;

const Button = styled.button`
  border: none;
  background-color: darkblue;
  color: white;
  font-size: 15px;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  @media screen and (max-width: 786px) {
    padding: 5px;
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;
  @media screen and (max-width: 786px) {
    padding: 5px;
  }
`;
const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
  @media screen and (max-width: 786px) {
    padding: 5px;
    margin-top: 20px;
  }
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 786px) {
    flex-direction: column;
  }
`;
const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media screen and (max-width: 786px) {
    height: 50%;
    margin-right: 0;
  }
`;
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 786px) {
    height: 50%;
  }
`;

const Container = styled.div`
  height: 90%;

  background: url(${Background});
`;
const Wrapper = styled.div`
  height: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 786px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  @media screen and (max-width: 786px) {
    width: 100%;
  }
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 786px) {
    width: 100%;
  }
`;

export default Contact;
