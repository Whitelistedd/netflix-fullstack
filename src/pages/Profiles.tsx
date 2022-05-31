import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AuthNav } from '../components/Navbar/AuthNav'
import Profile1 from "../Images/profile1.jpg"
import Profile2 from "../Images/profile2.jpg"

// Страница выбора профиля

export const Profiles : React.FC = () => {
  return (
      <Container>
            <AuthNav />
            <Wrap>
                <Title>Кто собирается смотреть?</Title>
                <ProfileSelection>
                {ExistingProfiles.map((profile,index) =>
                    <Anchor key={index} to={"/browse"}>
                    <Profile>
                        <ProfileImage src={profile.Image} />
                        <ProfileName>{profile.name}</ProfileName>
                    </Profile>
                    </Anchor>
                )}
                </ProfileSelection>
                <Button>УПРАВЛЯТЬ ПРОФИЛЯМИ</Button>
            </Wrap>
      </Container>
  )
}

const ExistingProfiles = [
    {
        name: "Volxen",
        Image: Profile1
    },
    {
        name: "MD",
        Image: Profile2
    },
]

const Container = styled.div`
    background-color: #151514;
    height: 100vh;
`

const Wrap = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 80%;
    gap: 2em;
    color: grey;
`

const Title = styled.h1`
    color: white;
    font-size: 3rem;
`

const ProfileSelection = styled.div`
    display: flex;
    gap: 2em;
    align-items: center;
    text-align: center;
`

const Profile = styled.div`
    padding: 10px;
    &:hover {
        cursor: pointer;
        img {
            border: 5px solid white;
        }
        h2 {
            color: white;
        }
    }
`

const ProfileName = styled.h2`
    font-weight: 500;
`

const Anchor = styled(Link)`
    color: inherit;
    text-decoration: none;
`

const ProfileImage = styled.img`
    height: 25vh;
`

const Button = styled.button`
    padding: 0.5em 1em;
    background-color: transparent;
    outline: none;
    border: 1px solid grey;
    color: inherit;
    font-size: 12px;
    &:hover {
        border: 1px solid white;
        color: white;
        cursor: pointer;
    }
`
