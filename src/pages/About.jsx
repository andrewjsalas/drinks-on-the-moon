import styled from "styled-components"

function About() {

  return (
    <AboutContainer>
      <AboutHeader>This website was made using the cocktaildb API.</AboutHeader>
      <AboutLinks>

      </AboutLinks>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
  color: white;
`

const AboutHeader = styled.h3`
  color: white;
`

const AboutLinks = styled.a`

`

export default About