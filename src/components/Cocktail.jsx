import { Link } from "react-router-dom"
import styled from "styled-components"

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <CocktailCard>    
      <CocktailImage src={image} alt={name} />

      <CocktailInfo>  
        <h2>{name}</h2>
        <h4>{glass}</h4>
        <p>{info}</p>

        <RecipeLink>
          <Link to={`/cocktail/${id}`}>
            <h4>View Recipe</h4>
          </Link>
        </RecipeLink>

      </CocktailInfo>
    </CocktailCard>
  )
}

const CocktailCard = styled.div`
  border: 1px solid red;
  margin: 2rem 0;
  background-color: #DAD4D2;
`

const CocktailImage = styled.img`
  max-width: 100%;
`

const CocktailInfo = styled.div`
  padding: .5rem;

  h3 {
    margin: .5rem 0;
  }

  h4 {
    margin: .5rem 0;
  }

  p {
    margin: .5rem 0;
  }
`

const RecipeLink = styled.div`
  margin: .8rem 0;
  background-color: #35271D;
  padding: 0.2rem;
  border-radius: 10px;

  a {
    text-decoration: none;
    color: white;
  }
`


export default Cocktail