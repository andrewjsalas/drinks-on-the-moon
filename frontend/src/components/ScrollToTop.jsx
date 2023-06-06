import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";


const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false)

  // Shows and hides scroll button
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  // Button scroll to top functionality w/ smooth scrolling
  const ToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {showButton && (
        <ToTopButton onClick={ToTop}>
          <FontAwesomeIcon icon={ faArrowCircleUp }></FontAwesomeIcon>
        </ToTopButton>
      )}
    </>
  )
}

const ToTopButton = styled.div`
  position: fixed;
  bottom: -4px;
  right: 10px;
  padding: 1rem;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;


  &:hover {
    transform: scale(1.5);
  }
`

export default ScrollToTop