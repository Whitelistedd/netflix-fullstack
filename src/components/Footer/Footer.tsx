import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 2em 25em;
  gap: 10px;
  background-color: black;
  border-top: 8px solid #222222;
  color: #757575;
  height: 30vh;
`

const Anchor = styled.a``

const Sections = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`

const Section = styled.div`
  width: 100%;
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
  width: 100px;
  background-color: transparent;
  border: 1px solid grey;
  padding: 1em 1em;
  color: inherit;
`

const Copyright = styled.p`
  font-size: 12px;
`

export const Footer : React.FC = () => {

  return (
    <Container>
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
    </Container>
  )
}
