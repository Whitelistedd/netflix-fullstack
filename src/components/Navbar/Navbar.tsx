import React from 'react'
import Netflix from "./Images/NetflixLogo.svg"
import styled from 'styled-components';

const Container = styled.div``

const Logo = styled.img`
 width: 10vw;
`


export const Navbar : React.FC = () => {
  return (
    <Container>
        <Logo src={Netflix} />
    </Container>
  )
}
