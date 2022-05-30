
import './App.css';
import styled from 'styled-components';
import React from "react"
import Headerbackground from "./Images/LandingPageHeader.jpg"
import { Navbar } from './components/Navbar/Navbar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
background: url(${Headerbackground});
display: flex;
width: 100vw;
height: 80vh;

 &::before {
   content: ".";
   height: 100px;
   background-image: linear-gradient(to bottom,rgba(0,0,0,1) 10%,
                                    rgba(0,0,0,0.8) 20%,
                                    rgba(0,0,0,0.6) 30%,
                                    rgba(0,0,0,0.4) 40%,
                                    rgba(0,0,0,0.3) 70%,
                                    rgba(0,0,0,0.2) 90%,
                                    rgba(0,0,0,0.1) 100% );
   width: 100%;
   position: absolute;
   top: 0px;
 }
`
const App : React.FC = () => {
  return (
      <Container>
        <Header>
          <Navbar />
        </Header>
      </Container>
  )
}

export default App;
