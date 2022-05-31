import React, { useEffect, useState } from 'react'
import Netflix from "../../Images/NetflixLogo.svg"
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Profile1 from "../../Images/profile1.jpg"

const Container = styled.nav<{fixed: Boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 3em;
  position: fixed;
  background:${props => props.fixed ? "transparent" : "#141414"};
  z-index: 10;
  color: white;
  height: 8vh;
  width: 100%;
  gap: 1em;
  transition: background 200ms ease-in-out;
  
  svg {
    font-size: 30px;
    &:hover {
      cursor: pointer;
    }
  }
`

const Logo = styled.img`
  width: 8vw;
`

const Categories = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  margin-right: auto;
`

const Category = styled.li`
  font-size: 20px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`

const Image = styled.img`
  width: 45px
`

// панель навигации для просмотра фильмов

export const BrowseNav : React.FC = () => {

  const [fixed,setFixed] = useState(false)

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setFixed(true)
    } else if (window.scrollY > 70) {
      return setFixed(false)
    } 
  }

  useEffect(() => {
  window.addEventListener('scroll', listenScrollEvent);

  return () =>
    window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <Container fixed={fixed} >
        <NavLink to={"/splash"}>
        <Logo src={Netflix} />
        </NavLink>
        <Categories>
          <Category>Home</Category>
          <Category>TV Series</Category>
          <Category>Movies</Category>
          <Category>New & Popular</Category>
          <Category>My list</Category>
        </Categories>
        <SearchIcon />
        <Image src={Profile1} />
    </Container>
  )
}
