import React from 'react'
import styled from 'styled-components'
import { devices } from '../../MediaQueries'

export const Footer : React.FC = () => {

  return (
    <Container>
      <Wrap>
        <Anchor>Questions? Contact us.</Anchor>
        <Sections>
            <Section>
                <Page>FAQ</Page>
                <Page>Investor Relations</Page>
                <Page>Privacy</Page>
                <Page>Speed Test</Page>
            </Section>
            <Section>
                <Page>Help Center</Page>
                <Page>Jobs</Page>
                <Page>Cookie Preferences</Page>
                <Page>Legal Guarantee</Page>
            </Section>
            <Section>
                <Page>Account</Page>
                <Page>Ways to Watch</Page>
                <Page>Corporate Information</Page>
                <Page>Legal Notices</Page>
            </Section>
            <Section>
                <Page>Media Center</Page>
                <Page>Terms of Use</Page>
                <Page>Contact Us</Page>
                <Page>Only on Netflix</Page>
            </Section>
        </Sections>
        <Language>English</Language>
        <Copyright>Netflix</Copyright>
      </Wrap>
    </Container>
  )
}

const Anchor = styled.a``

const Sections = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`

const Section = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`

const Page = styled.a`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const Language = styled.button`
  max-width: 100px;
  background-color: transparent;
  border: 1px solid grey;
  padding: 2% 2%;
  color: inherit;
`

const Copyright = styled.p`
  font-size: 12px;
`

const Wrap = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Container = styled.footer`
  display: flex;
  justify-content: center;
  background-color: black;
  border-top: 8px solid #222222;
  color: #757575;
  width: 100%;
  padding: 1em 0em;
  min-height: 30vh;
  
  @media only screen and (max-width: ${devices.sm}) {
    ${Wrap} {
      align-items: center;
      font-size: 1.7rem;
      gap: 30px;
    }
    ${Sections} {
      flex-direction: column;
      gap: 2.5em;
      align-items: center;
      justify-content: center;
    }
    ${Section} {
      align-items: center;
      font-size: 1.2rem;
    }
  }
`