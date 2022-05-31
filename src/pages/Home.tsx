import styled from 'styled-components';
import React from "react"
import Headerbackground from "../Images/LandingPageHeader.jpg"
import { Navbar } from '../components/Navbar/Navbar';
import { Subparts } from '../components/SubPart/SubPart';
import { FAQ } from '../components/FAQ/FAQ';
import { Footer } from '../components/Footer/Footer';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`

/* const HeaderOverlay = styled.div`
position: absolute;
top: 0%;
width: 100%;
height: 100%;
z-index: 1;
background: linear-gradient(to bottom,
rgba(0,0,0,0.7) 10%,
rgba(0,0,0,0.5) 20%,
rgba(0,0,0,0.5) 30%,
rgba(0,0,0,0.5) 40%,
rgba(0,0,0,0.5) 50%,
rgba(0,0,0,0.5) 70%,
rgba(0,0,0,0.5) 90%,
rgba(0,0,0,0.5) 95%,
rgba(0,0,0,5) 100% );
` */

const Header = styled.header`
  background: url(${Headerbackground}) center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  background-opacity: 0.5;
  width: 100%;
  z-index: 1;
  height: 600px;


`

const Signup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: white;
  align-items: center;
  justify-content: center;
  z-index: 2;
  text-align: center;
  gap: 1em;

  input {
    background-color: white;
    width: 40vw;
    height: 3vh;
  }
`

const SignIn = styled.button`
  background: rgb(255,0,0);
  color: inherit;
  padding: 1em 3em;
  font-weight: 700;
  font-size: 20px;
  border-radius: 7px;
  border: none;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`

const Title = styled.h1`
font-size: 4rem;
width: 50vw;
line-height: 1.3em;
`

const SubTitle = styled.p`
font-size: 1.7rem;
`

const Anchor = styled(Link)`
    color: inherit;
    text-decoration: none;
`

const Home : React.FC = () => {
  return (
      <Container>
        <Header>
          <Navbar />
          <Signup>
            <Title>Unlimited movies, TV shows, and more.</Title>
            <SubTitle>Watch anywhere. Cancel anytime.</SubTitle>
            <Anchor to={"/profiles"} >
            <SignIn>Get Started</SignIn>
            </Anchor>
          </Signup>
        {/* <HeaderOverlay>
        </HeaderOverlay> */}
        </Header>
        <Subparts />
        <FAQ />
        <Footer />
      </Container>
  )
}

export default Home;
