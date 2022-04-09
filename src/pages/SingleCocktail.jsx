import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import styled from "styled-components"

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
      <SingleDrinkPage>

        <ReturnHomeButton>
          <Link to='/' className="return-home-btn">
            <h4>Back Home</h4>
          </Link>
        </ReturnHomeButton>

        <SingleDrinkContainer>
          <SingleDrinkImage src={image} alt={name} />
          <SingleDrinkInfo>
            <h3><strong>Name:</strong> {name}</h3>
            <p><strong>Drink Type:</strong> {category}</p>
            <p><strong>Glass:</strong> {glass}</p>
            <p><strong>Ingredients:</strong> {''}
              {ingredients.map((item, index) =>{
                return item ? <span key={index}>{item}</span> : null
              })}
            </p>
            <p><strong>Instructions:</strong> {instructions}</p>
          </SingleDrinkInfo>
        </SingleDrinkContainer>       
      </SingleDrinkPage>

    )
  }
}

const SingleDrinkPage = styled.div`
  margin: 1.5rem;
`

const ReturnHomeButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 8rem;
  margin-bottom: 2rem;
  text-align: center;
  width: 25%;
  min-width: 632px;
  text-transform: uppercase;

  a { 
    text-decoration: none;
    letter-spacing: 0.3rem;
    font-size 1.5rem;
    padding: 0.5rem;
    font-family: 'Oswald', sans-serif;
    background: beige;
    color: black;
    border-radius: 10px;
    transition: 0.3s ease-in-out;

    &:hover {
      background: black;
      color: beige;
    }
  }
`

const SingleDrinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1400px;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    max-width: 30rem;
  }
`

const SingleDrinkImage = styled.img`
  max-width: 30rem;
  height: auto;
  margin: 0 auto;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);
`

const SingleDrinkInfo = styled.div`
  color: white;
  margin-top: 2rem;
  font-size: 1.3rem;
  margin: 0 auto;
  padding: 2rem;

  h3 {
    margin: 2rem 0;

  }

  p {
    margin: 1.3rem 0;

  }

  strong {
    color: beige;
  }

  @media (max-width: 800px) {
    padding: 0;
  }
`

export default SingleCocktail