import React from 'react'
import styled from 'styled-components'
import Add from '@mui/icons-material/Add';
import PlayArrow from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';
import { devices } from '../../MediaQueries';

interface MoviesProps {
    backdrop_path: string,
    title?: string
}

export const Movies : React.FC<MoviesProps> = ({title,backdrop_path}) => {
  return (
    <Container>
      <Movie src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} />
      <Overlay>
        <Link to={"/play"} >
        <PlayArrow />
        </Link>
        <Add />
        <Title>{title}</Title>
      </Overlay>
    </Container>
  )
}

const Movie = styled.img`
  width: 18vw;
  border-radius: 10px;
`

const Overlay = styled.div`
    position: relative;
    left: 0%;
    padding: 0em 1em;
    height: 40%;
    top: -33%;
    opacity: 0;
    transition: 100ms ease-in-out;
    a {
      color: inherit;
    }
`

const Title = styled.h3`
  text-shadow: 2px 2px 5px black;
`

const Container = styled.div`

  transition: 200ms ease-in-out;
  svg {
    border: 1px solid white;
    padding: 1px;
    z-index: 10;
    border-radius: 50%;
    border: 2px solid white;
    font-size: 2vw;
    margin-right: 10px;
    text-shadow: 2px 2px 5px black;
    &:hover {
      opacity: 0.6 !important // проблема с MaterialUI;
    }
  }
  
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    ${Overlay} {
      top: -40%;
      opacity: 1;
    }
  }

  @media only screen and (max-width: ${devices.md}) {
    ${Movie} {
      width: 30vw;
    }
  }
`
