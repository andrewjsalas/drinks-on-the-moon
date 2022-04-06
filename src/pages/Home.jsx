import { useState, useEffect } from "react"
import CocktailList from "../components/CocktailList"
import SearchBar from '../components/SearchBar'
import styled from "styled-components"

function Home() {
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('a')
  const [cocktails, setCocktails,] = useState([])

  useEffect(() => {
    setLoading(true)
    async function getDrinks() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        )
        const data = await response.json()
        const { drinks } = data
        if (drinks) {
          const newCocktails = drinks.map((item) => {
            const {
              idDrink, 
              strDrink, 
              strDrinkThumnb,
              strAlcoholic,
              strGlass,
            } = item
            return {
              id: idDrink, 
              name: strDrink,
              image: strDrinkThumnb,
              info: strAlcoholic,
              glass: strGlass,
            }
          })
          setCocktails(newCocktails)
        } else {
          setCocktails([])
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getDrinks()
  }, [searchTerm])

  return (
    <HomePage>
      <SearchBar setSearchTerm={setSearchTerm} />
      <CocktailList loading={loading} cocktails={cocktails} />
    </HomePage>
  )
}

const HomePage = styled.main`
  background-color: #151F28;
`

export default Home