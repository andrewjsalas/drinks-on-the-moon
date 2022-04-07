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
  background-color: #F6F4F4;
  box-shadow: 0 0 10px;
  transition: 
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
  background-color: #161A1E;
  padding: 0.2rem;
  border-radius: 10px;
  

  a {
    text-decoration: none;
    color: white;
    transition: all 0.2s ease-in-out;

    &:hover {
    color: #998D85;
    }
  }
`


export default Cocktail