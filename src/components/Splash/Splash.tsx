import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import intro from "../../Images/Intro.mp4"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const Video = styled.video`
background-color: black;
height: 100%;
width: 100%;
`

export const Splash : React.FC = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const SplashInterval = setInterval(() => navigate("/browse", { replace: true }), 5000)
  
    return () => {
      clearInterval(SplashInterval)
    }
  }, [])
  

  return (
    <Container>
      <Video src={intro}
        autoPlay
        preload="auto"
      />
    </Container>
  )
}
