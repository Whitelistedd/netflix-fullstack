import React from 'react'
import styled from 'styled-components'
import ImageSrc from "../../Images/tvImg.svg"
import NetflixMobile from "../../Images/netflixMobile.jpg"
import MacImg from "../../Images/MacImg.svg"
import { devices } from '../../MediaQueries'

export const Subparts : React.FC = () => {
  return (
    <Container>
        <SubpartWrap>
            <TitleWrap>
                <Title>
                Enjoy on your TV.
                </Title>
                <Description>
                Watch on Smart TVs, Playstation, Xbox, 
                Chromecast, Apple TV, Blu-ray players, and more.
                </Description>
            </TitleWrap>
            <Image src={ImageSrc} />
        </SubpartWrap>
        <ReversedSubpart>
            <TitleWrap>
                <Title>
                Download your shows to watch offline.
                </Title>
                <Description>
                Save your favorites easily and always have something to watch.
                </Description>
            </TitleWrap>
            <Image src={NetflixMobile} />
        </ReversedSubpart>
        <SubpartWrap>
            <TitleWrap>
                <Title>
                Enjoy on your TV.
                </Title>
                <Description>
                Watch on Smart TVs, Playstation, Xbox, 
                Chromecast, Apple TV, Blu-ray players, and more.
                </Description>
            </TitleWrap>
            <Image src={MacImg} />
        </SubpartWrap>
    </Container>
  )
}

const SubpartWrap = styled.div`
    background-color: black;
    display: flex;
    padding: 3em 0em;
    height: 100%;
    gap: 5em;
    align-items: center;
    justify-content: center;
    border-top: 8px solid #222222;
    border-bottom: 8px solid #222222;
` 

const ReversedSubpart = styled(SubpartWrap)`
    flex-direction: row-reverse;
    border-top: 0px solid grey;
    border-bottom: 0px solid grey;
`

const TitleWrap = styled.div`
    width: 28vw;
`

const Title = styled.h4`
    font-size: 2.5rem;
`

const Description = styled.p`
font-size: 1.5rem;
`

const Image = styled.img`
    z-index: 2;
    width: 30vw;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    color:white;
    background-color: grey;
    
    @media only screen and (max-width: ${devices.md}) {
        ${SubpartWrap} {
            flex-direction: column;
        }
        ${TitleWrap} {
            width: 50vw;
        }
        ${Title} {
            font-size: 1.5rem;
        }
        ${Description} {
            font-size: 1.1rem;
        }
        ${Image} {
            min-width: 50vw;
        }
    }
`