import React from 'react'
import styled from 'styled-components'

const Movie = styled.img`
  width: 18vw;
  border-radius: 10px;
  transition: 200ms ease-in-out;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`

interface MoviesProps {
    backdrop_path: string
}

export const Movies : React.FC<MoviesProps> = ({backdrop_path}) => {
  return (
    <Movie src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} />
  )
}
