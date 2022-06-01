import React, { useState } from 'react'
import styled from 'styled-components'

interface AnswerProps {
    Open: boolean
}

export const FAQ : React.FC = () => {

    const [DropDownStatus,setDropDownStatus] = useState({Question1 : false,Question2: false, Question3: false,Question4: false,Question5: false,Question6: false,Question7: false})
 
    const handleClick = (e : any) => {
        const target : string = e.target.attributes["id"].value
        const status = DropDownStatus[target as keyof {}] ? false : true
        setDropDownStatus(prev => ({...prev, [target]: status}))
    }

  return (
    <Container>
        <Title>Frequently Asked Questions</Title>
        <List>
            <DropDown>
                <Question id='Question1' onClick={(e) => handleClick(e)} >What is Netflix?</Question>
                <AnswerWrap Open={DropDownStatus.Question1}>
                    <Answer>
                        Netflix is a streaming service that offers a wide variety of award-winning TV shows, 
                        movies, anime, documentaries, and more on thousands of internet-connected devices.
                        <br />
                        <br />
                        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. 
                        There's always something new to discover and new TV shows and movies are added every week!
                    </Answer>
                </AnswerWrap>
            </DropDown>
            <DropDown>
                <Question id='Question2' onClick={(e) => handleClick(e)} >How much does Netflix cost?</Question>
                <AnswerWrap  Open={DropDownStatus.Question2}>
                    <Answer>
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, 
                    all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. 
                    No extra costs, no contracts.
                    </Answer>
                </AnswerWrap>
            </DropDown>
            <DropDown>
                <Question id='Question3' onClick={(e) => handleClick(e)} >Where can i watch?</Question>
                <AnswerWrap  Open={DropDownStatus.Question3}>
                    <Answer>
                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly 
                    on the web at netflix.com from your personal computer or on any internet-connected
                    device that offers the Netflix app, including smart TVs, smartphones, 
                    tablets, streaming media players and game consoles.
                    <br />
                    <br />
                    You can also download your favorite shows with the iOS, Android, or Windows 10 app. 
                    Use downloads to watch while you're on the go and without an internet connection. 
                    Take Netflix with you anywhere.
                    </Answer>
                </AnswerWrap>
            </DropDown>
            <DropDown>
                <Question id='Question4' onClick={(e) => handleClick(e)} >How do i cancel?</Question>
                <AnswerWrap  Open={DropDownStatus.Question4} >
                    <Answer>
                    Netflix is flexible. There are no pesky contracts and no commitments. 
                    You can easily cancel your account online in two clicks. 
                    There are no cancellation fees – start or stop your account anytime.
                    </Answer>
                </AnswerWrap>
            </DropDown>
            <DropDown>
                <Question id='Question5' onClick={(e) => handleClick(e)} >What can i watch on Netflix?</Question>
                <AnswerWrap  Open={DropDownStatus.Question5} >
                    <Answer>
                    Netflix has an extensive library of feature films, documentaries, TV shows, anime, 
                    award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                    </Answer>
                </AnswerWrap>
            </DropDown>
            <DropDown>
                <Question id='Question6' onClick={(e) => handleClick(e)} >is Netflix good for kids?</Question>
                <AnswerWrap  Open={DropDownStatus.Question6} >
                    <Answer>
                    The Netflix Kids experience is included in your membership to give 
                    parents control while kids enjoy family-friendly TV shows and movies in their own space.
                    <br />
                    <br />
                    Kids profiles come with PIN-protected parental controls that let you 
                    restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                    </Answer>
                </AnswerWrap>
            </DropDown>
            <DropDown>
                <Question id='Question7' onClick={(e) => handleClick(e)} >Why am i seeing this language?</Question>
                <AnswerWrap  Open={DropDownStatus.Question7}>
                    <Answer>
                        Your browser preferences determine the language shown here.
                    </Answer>
                </AnswerWrap>
            </DropDown>
        </List>
    </Container>
  )
}

const Container = styled.div`
    color: white;
    background-color: black;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2em 0em;
    gap: 2em;
`

const Title = styled.h5`
    font-size: 2.5rem;
    text-align: center;
`

const List = styled.ul`
    max-width: 600px;
    min-height: 60vh;
    list-style: none;
    padding: 0px;
    display: flex;
    gap: 2px;
    flex-direction: column;
    align-items: center;
`

const DropDown = styled.li`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2px;
`

const Question = styled.h6`
    font-size: 1.5rem;
    font-weight: 500;
    background-color: #303030;
    padding: 0.7em 1.2em;
    &:hover {
        cursor: pointer;
    }
`

const Answer = styled.p`
  padding: 1em;
  font-size: 20px;
`

const AnswerWrap = styled.div<AnswerProps>`
    background-color: #303030;
    max-height: ${props => props.Open ? "500px" : "0px"};
    overflow: hidden;
    transition: max-height 500ms ease-in-out;
`