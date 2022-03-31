import React, { Children } from "react"
import { useState, useContext, useEffect, useCallback } from "react"
import { toast } from "react-toast"

const url = 'www.thecocktaildb.com/api/json/v1/1/search.php?s='

let AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("a")

  // Fetch cocktail data
  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      let response = await fetch(`${url}${searchTerm}`)
      let resJson = await response.json() 

      let { drinks } = resJson
      if (drinks) {
        let newCocktail = drinks

        .map((item) => {
          let {
            idDrink,
            strDrink, 
            strAlcoholic, 
            strGlass,
            strDrinkThumb,
            strIngredient,
          } = item
          return {
            id: idDrink,
            name: strDrink,
            alcohol: strAlcoholic,
            glass: strGlass,
            img: strDrinkThumb,
            ingredient: strIngredient,
          }
        })
        setData(newCocktail)
      } else {
        setData([])
      }
      setLoading(false)
    } catch (error) {
      toast.error('Unable to fetch recipes')
      console.log(error)
    }
  }, [searchTerm])

  useEffect(() => {
    fetchData()
  }, [searchTerm, fetchData])

  return (
    <AppContext.Provider value={{ loading, searchTerm, setSearchTerm, data}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobal = () => {
  return useContext(AppContext)
}

export { AppProvider }