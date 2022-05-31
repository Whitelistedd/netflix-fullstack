import React from 'react'
import styled from 'styled-components'
import { Movies } from '../Movies/Movies'

const CategoryWrap = styled.div`
  padding: 1em 3em;
`

const CategoryTitle = styled.h3`
  font-size: 2rem
`

const MovieList = styled.ul`
  display: flex;
  padding: 0px;
  list-style: none;
  gap: 30px;
`

interface CategoryProps {
    MovieData: Array<{backdrop_path: string}>,
    title: string
  }

export const Category : React.FC<CategoryProps> = ({title,MovieData}) => {
  return (
    <div>
        <CategoryWrap>
            <CategoryTitle>{title}</CategoryTitle>
                <MovieList>
                    {MovieData.map((category,index) => 
                    <Movies key={index} backdrop_path={category.backdrop_path} />)
                    }
                </MovieList>
        </CategoryWrap>
    </div>
  )
}
