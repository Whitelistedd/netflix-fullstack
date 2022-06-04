import Add from '@mui/icons-material/Add';
import PlayArrow from '@mui/icons-material/PlayArrow';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { devices } from '../../MediaQueries';

interface MoviesProps {
    backdrop_path: string,
    title?: string
}

export const Movies : React.FC<MoviesProps> = ({title,backdrop_path}) => {
  return (
    <Container>
            <Overlay>
        <Link to={"/play"} >
        <PlayArrow />
        </Link>
        <Add />
        <Title>{title}</Title>
      </Overlay>
      <Movie src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} />
    </Container>
  )
}

const Movie = styled.img`
  width: 300px;
  border-radius: 10px;
`

const Overlay = styled.div`
    position: absolute;
    left: 0%;
    padding: 0em 1em;
    height: 40%;
    opacity: 0;
    top: 40%;
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
    overflow: hidden;
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
      opacity: 1;
    }
  }

  @media only screen and (max-width: ${devices.Laptop}) {
    ${Movie} {
      width: 200px;
    }
  }
`
