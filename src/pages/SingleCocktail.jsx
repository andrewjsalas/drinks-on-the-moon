import React from 'react'

const SingleCocktail = ({ id, name, glass, alcohol, img, ingredient }) => {
  return (
    <div className='single-drink-container'>
      <div>
        <img 
          src={img}
          alt='drink'
          className='single-drink-image'
        />
        <h3>{name}</h3>
      </div>
    </div>
  )
}

export default SingleCocktail