import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImagePortrait } from '@fortawesome/free-solid-svg-icons'

function About() {

  return (
    <AboutContainer>
      <AboutHeader>
        This website was made using 
          <a href='https://www.thecocktaildb.com/' rel="noopener noreferrer" target='_blank'> TheCocktailDB </a> 
        API by Andrew J Salas
      </AboutHeader>
      <AboutLinks>
        <h4>My Portfolio</h4>
        <a href="http://www.andrewjsalasdev.com/" rel="noopener noreferrer" target='_blank'>
          <FontAwesomeIcon icon={faImagePortrait}></FontAwesomeIcon>
        </a>  
      </AboutLinks>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 2rem 2rem;
  color: white;
  text-align: center;
`

const AboutHeader = styled.h3`
  margin-top: 10rem;
  color: white;
  font-size: 3rem;

  a {
    text-decoration: none;
    color: orange;
  }
`

const AboutLinks = styled.h4`
  margin: 0 auto;
  margin-top: 5rem;
  font-size: 3rem;

  h4 {
    margin: 1rem;
  }

  a {
    color: beige;
    font-size: 6rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      color: CornflowerBlue;
      font-size: 7rem;
    }
  }
`

export default About