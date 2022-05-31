import React from 'react'
import styled from 'styled-components'
import Add from '@mui/icons-material/Add';
import PlayArrow from '@mui/icons-material/PlayArrow';

const Container = styled.div`

  transition: 200ms ease-in-out;
  svg {
    font-size: 2vw;
    opacity: 0;
    margin-right: 10px;
    transition: 200ms ease-in-out;
  }

  svg:hover {
      opacity: 0.1;
  }
  
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    svg {
      opacity: 1;
      top: -25%;
    }
  }
`

const Movie = styled.img`
  width: 18vw;
  border-radius: 10px;
`

const StyledAdd = styled(Add)`
  position: relative;
  left: 5%;
  top: -20%;
  border: 1px solid white;
  padding: 1px;
  z-index: 10;
  border-radius: 50%;
  border: 2px solid white;
`

const StyledPlay = styled(PlayArrow)`
  position: relative;
  left: 5%;
  top: -20%;
  border: 1px solid white;
  padding: 1px;
  z-index: 10;
  border-radius: 50%;
  border: 2px solid white;
  &:hover {
    opacity: 0.7;
  }
`

interface MoviesProps {
    backdrop_path: string
}

export const Movies : React.FC<MoviesProps> = ({backdrop_path}) => {
  return (
    <Container>
      <Movie src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} />
      <StyledAdd />
      <StyledPlay />
    </Container>
  )
}
