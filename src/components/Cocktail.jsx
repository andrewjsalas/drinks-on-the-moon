import { Link } from "react-router-dom"

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <div className="cocktail-card">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-info">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='info-btn'>
          View Recipe
        </Link>
      </div>
    </div>
  )
}

export default Cocktail