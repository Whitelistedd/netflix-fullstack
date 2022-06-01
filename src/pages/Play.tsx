import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import play from "../Images/play.mp4"

export const Play = () => {
  
  const navigate = useNavigate()

  useEffect(() => {
    const SplashInterval = setInterval(() => navigate("/profiles", { replace: true }), 5000)
  
    return () => {
      clearInterval(SplashInterval)
    }
  }, [])

  return (
    <Container>
      <Video src={play}
        autoPlay
        preload="auto"
      />
    </Container>
  )
}


const Container = styled.div`
  overflow: hidden;
  height: 100vh;
`

const Video = styled.video`
  background-color: #010001;
  height: 100vh;
  width: 100vw;
`