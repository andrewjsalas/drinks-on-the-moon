
const Cocktail = ({ id, name, glass, alcohol, img, ingredient }) => {
  return (
    <div className='cocktail-card'>
      <img
        src={img}
        alt='drink'
        className='card-img' />
      <div className='card-body'>
        <h2>{name}</h2>
      </div>
    </div>
  )
}

export default Cocktail