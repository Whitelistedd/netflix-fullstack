import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useState } from 'react';
import styled from 'styled-components';

import { devices } from '../../MediaQueries';
import { Movies } from '../Movies/Movies';

interface CategoryProps {
    MovieData: Array<{
        backdrop_path: string,
        title: string,
        name?: string
    }>,
    title: string
}

export const Category : React.FC<CategoryProps> = ({title,MovieData}) => {

  const [clicksCount,setClicksCount] = useState(0)
  const [directionState,setDirectionState] = useState(50)

  const handleClick = (direction: string) => {
    if(direction === "left" && clicksCount > 0) {
      setClicksCount(prev => prev - 1)
      setDirectionState(prev => prev + 230)
    } else if (direction === "right" && clicksCount < 15) {
      setDirectionState(prev => prev + -230)
      setClicksCount(prev => prev + 1)
    }
  }

  return (
    <div>
        <CategoryWrap>
            <CategoryTitle>{title}</CategoryTitle>
              <MovieContainer>
                <BackButton onClick={() => handleClick("left")} ><ArrowBackIosNewIcon /></BackButton>
                  <MovieList transformStat={directionState} >
                    {MovieData.map((category,index) => 
                    <Movies key={index} title={category.title ? category.title : category.name} backdrop_path={category.backdrop_path} />)
                    }
                  </MovieList>
                <FrontButton onClick={() => handleClick("right")} ><ArrowForwardIosIcon /></FrontButton>
              </MovieContainer>
        </CategoryWrap>
    </div>
  )
}


const CategoryWrap = styled.div`
  padding: 1em 0em;
  display: flex;
  flex-direction: column;
  gap: 1em;
`

const FrontButton = styled.div`
  width: 30px;
  z-index: 5;
  display: flex;
  align-items: center;
  position: absolute;
  right: 0.9%;

  svg {
    font-size: 2.5vw;
  }

  &:hover {
    cursor: pointer;
  }
`

const BackButton = styled(FrontButton)`
  left: 0;
`

const MovieContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

const CategoryTitle = styled.h3`
  font-size: 2rem
`

const MovieList = styled.ul<{transformStat: number}>`
  display: flex;
  margin: 0px;
  width: max-content;
  transition: 200ms ease;
  transform: translateX(${props => props.transformStat}px);
  padding: 0em;
  gap: 30px;
  list-style: none;

  @media only screen and (max-width: ${devices.Laptop}) {
  }
`
