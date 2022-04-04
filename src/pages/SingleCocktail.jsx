import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const SingleCocktail = () => {
  // Hook to grab url parameters
  const { id } = useParams()
  
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null) 

  useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        )

        // Set drink data
        const data = await response.json()
        if(data.drinks) {
          const {
            strDrink: name, 
            strDrinkThumb: image, 
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions, 
            strAlcoholic: info, 
            strIngredient1, 
            strIngredient2, 
            strIngredient3, 
            strIngredient4, 
            strIngredient5, 
          } = data.drinks[0]
          const ingredients = [
          strIngredient1, 
          strIngredient2, 
          strIngredient3, 
          strIngredient4, 
          strIngredient5, 
        ]
        const newCocktail = {
          name, 
          image, 
          info,
          category,
          glass,
          instructions, 
          ingredients,
        }
        setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
        
      } catch (error) {
        console.log(error)       
      }
      setLoading(false)
    }
    getCocktail()
  }, [id])

  // Show visual cue that content is loading
  if (loading) {
    return <h2 className="section-title">Loading...</h2>
  } 

  if (!cocktail) {
    return <h2 className="section-title">No cocktail to display</h2>
  } else {
    const {
      name, image, category, glass, instructions, ingredients
    } = cocktail

    return (
      <div className="single-drink-container">
        <Link to='/' className="return-home-btn">Back Home</Link>
        <div className="single-drink">
          <img src={image} alt={name} />
          <div className="single-drink-info">
            <h3><strong>Name:</strong> {name}</h3>
            <p><strong>Drink Type:</strong> {category}</p>
            <p><strong>Glass:</strong> {glass}</p>
            <p><strong>Ingredients:</strong> {''}
              {ingredients.map((item, index) =>{
                return item ? <span key={index}>{item}</span> : null
              })}
            </p>
            <p><strong>Instructions:</strong> {instructions}</p>
          </div>
        </div>       
      </div>

    )
  }
}

export default SingleCocktail