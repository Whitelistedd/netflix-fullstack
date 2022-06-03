import React, { useState } from 'react';
import styled from 'styled-components';

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
    console.log(directionState)
  }

  return (
    <div>
        <CategoryWrap>
            <CategoryTitle>{title}</CategoryTitle>
              <MovieContainer>
                <BackButton onClick={() => handleClick("left")} >{"<"}</BackButton>
                  <MovieList transformStat={directionState} >
                    {MovieData.map((category,index) => 
                    <Movies key={index} title={category.title ? category.title : category.name} backdrop_path={category.backdrop_path} />)
                    }
                  </MovieList>
                <FrontButton onClick={() => handleClick("right")} >{">"}</FrontButton>
              </MovieContainer>
        </CategoryWrap>
    </div>
  )
}


const CategoryWrap = styled.div`
  padding: 1em 0em;
`

const FrontButton = styled.div`
  width: 20px;
  height: 16vh;
  z-index: 5;
  display: flex;
  font-size: 3rem;
  margin-top: 16px;
  align-items: center;
  position: absolute;
  right: 0;
  background-color: #141414;

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
  justify-content: space-between;
`

const CategoryTitle = styled.h3`
  font-size: 2rem
`

const MovieList = styled.ul<{transformStat: number}>`
  display: flex;
  width: max-content;
  transition: 200ms ease;
  transform: translateX(${props => props.transformStat}px);
  padding: 0em;
  gap: 30px;
  list-style: none;
`
