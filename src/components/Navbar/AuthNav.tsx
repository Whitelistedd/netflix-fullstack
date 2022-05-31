import React from 'react'
import Netflix from "../../Images/NetflixLogo.svg"
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 3em;
  z-index: 10;
  color: white;
  height: 8vh;
  gap: 1em;
`

const Logo = styled.img`
  width: 8vw;
`

const SignIn = styled.button`
  background: red;
  color: inherit;
  padding: 0.6em 1em;
  font-weight: 700;
  font-size: 12px;
  border: none;

  border-radius: 3px;
`

const Language = styled.button`
color: inherit;
margin-left: auto;
padding: 0.6em 1em;
font-weight: 700;
font-size: 12px;
background-color: #111010;
border: 1px solid grey
`

// панель навигации для настроек

export const AuthNav : React.FC = () => {
  return (
    <Container>
      <NavLink to={"/splash"}>
        <Logo src={Netflix} />
      </NavLink>
    </Container>
  )
}
