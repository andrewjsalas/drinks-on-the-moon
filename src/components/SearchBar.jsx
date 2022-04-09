import { useEffect, useRef } from "react"
import styled from "styled-components"

const SearchBar = ({ setSearchTerm }) => {
  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchValue = useRef('')
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const searchCocktails = () => {
    setSearchTerm(searchValue.current.value)
  }

  return (
    <SearchMain>
      <SearchHeader>The Bartenders Guide to Mixoligy</SearchHeader>

      <SearchBarContainer>
        <FormControl>
          <FormLabel htmlFor="name">Search a cocktail</FormLabel>
          <input 
            type='text'
            name='name'
            id='name'
            onChange={searchCocktails}
            ref={searchValue} 
            placeholder='Search'
          />
        </FormControl>
      </SearchBarContainer>
    </SearchMain>
  )
}

const SearchMain = styled.main`
  color: white;
  width: 85vw;
  max-width: 40rem;
  margin: 0 auto;
`

const SearchHeader = styled.h2`
  padding-top: 8rem;
  text-align: center;
  font-size: 2.5rem;
  font-family: 'Noto Serif Display', sans-serif;
  font-style: italic;
  font-weight: 400;
  border-bottom: 2px solid #998D85;
`

const SearchBarContainer = styled.form`
  text-align: center;
  padding: 1.25rem 1rem;
`

const FormControl = styled.div`
  input {
    width: 80%;
    boxing-sizing: border-box;
    border: none;
    padding 0.5rem;
    border-radius: 10px;
    margin: auto;
    transition: 0.3s ease-in-out;
    background-color: #ededed;

    &:focus {
    transform: scale(1.1);
    background-color: white;
    }
  }
  
`

const FormLabel = styled.label`
  display: grid;
  text-align: center;
  padding: 1rem 0rem;
  font-size: 1.2rem;
  color: #DAD4D2;
`


export default SearchBar