import React, { ReactElement, useEffect, useState } from 'react'
import styled from 'styled-components'
import { BrowseNav } from '../components/Navbar/BrowseNav'
import HeaderIMG from "../Images/header.jpg"
import axios from "axios"
import { publicRequests } from '../requests'
import { Link, useNavigate } from 'react-router-dom'
import { Movies } from '../components/Movies/Movies'
import { Category } from '../components/Category/Category'
import { getAllMovies } from '../utils/getAllMovies'
import PlayArrow from '@mui/icons-material/PlayArrow'
import { useAuth0 } from '@auth0/auth0-react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

interface StateType {
  title: string,
  data:
    [
      {
        title: string,
        name?: string,
        backdrop_path: string,
        overview: string
      }
    ]
}

interface Response {
  title: string,
  data:
    [
      {
        title: string,
        name?: string,
        backdrop_path: string,
        overview: string
      }
    ]
}


// Страница для навигации по фильмам

export const Browse = () => {

  const [Categories,SetCategories] = useState<StateType[]>([]);

  useEffect(() => {
    const getMovies = async () => {
        const Latest = await getAllMovies("Latest") as Response[]
        const ActionMovies  = await getAllMovies(28) as Response[]
        const AnimatedMovies = await getAllMovies(16) as Response[]
        const HorrorMovies = await getAllMovies(27) as Response[]
        SetCategories(prev => [...prev,...Latest,...ActionMovies,...AnimatedMovies,...HorrorMovies])
      }

    getMovies()
  },[])

  return (
  <Container>
        <BrowseNav />
        <Header backgroundIMG={Categories[0]?.data[0]?.backdrop_path} >
          <Title>{Categories[0]?.data[0]?.title}</Title>
          <Buttons>
            <Anchor to={"/play"}>
              <PlayButton>
                <PlayArrow />
                Play
              </PlayButton>
            </Anchor>
            <Button>More Info</Button>
          </Buttons>
          <Desc>{Categories[0]?.data[0]?.overview}</Desc>
        </Header>
        <CategoriesWrap>
        {Categories.map((category,index) => 
          <Category key={index} title={category.title} MovieData={category.data} />
        )}
        </CategoriesWrap>
    </Container>
  )
}


const Container = styled.div`
  background-color: rgba(20, 20, 20,1);
  min-height: 150vh;
  color: white;
  overflow: hidden;
`

const Header = styled.header<{backgroundIMG: string}>`
  background-image: url(https://image.tmdb.org/t/p/original/${props => props.backgroundIMG});
  background-size: cover;
  height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 0em 5em;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 20px;

   > * {
    z-index: 2;
  }

  &::before {
    content: "";
    width: 100%;
    height: 90vh;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0px;
    background: linear-gradient(to bottom,
      rgba(20, 20, 20,1) 0%,
    rgba(20, 20, 20, 0.8) 10%,
    rgba(20, 20, 20,0.6) 20%,
    rgba(20, 20, 20,0.3) 30%,
    rgba(20, 20, 20,0.2) 40%,
    rgba(20, 20, 20,0.2) 50%,
    rgba(20, 20, 20,0.2) 60%,
    rgba(20, 20, 20,0.3) 70%,
    rgba(20, 20, 20,0.6) 80%,
    rgba(20, 20, 20,0.8) 90%,
    rgba(20, 20, 20,1) 100%
    );
  }
`

const Title = styled.h1`
  font-size: 3rem;
  text-shadow: 1px 1px 15px black;
`

const Desc = styled.p`
  text-shadow: 1px 1px 15px black;
  font-size: 1.5rem;
  width: 50%;
`

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`

const Button = styled.button`
  padding: 0.8em 3em;
  background-color: rgba(255,255,255,0.3);
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 5px;
  transition: 200ms ease;
  &:hover {
    background-color: rgba(255,255,255,0.6);
  }
`

const PlayButton = styled(Button)`
    background-color: red;
    opacity: 1;
    display: flex;
    align-items: center;
    svg {
      font-size: 30px;
    }
    &:hover {
      background-color: rgba(255,0,0,0.8);
    }
`

const CategoriesWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Anchor = styled(Link)`
  text-decoration: none;
`