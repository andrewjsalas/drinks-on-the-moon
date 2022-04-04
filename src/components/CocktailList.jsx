import React from 'react'
import Cocktail from './Cocktail'

const CocktailList = ({ cocktails, loading }) => {
  if (loading) {
    return <h2 className='section-title'>Loading...</h2>
  }
  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
      No cocktails matched your search criteria
    </h2>
    )   
  }

  return (
    <div>
      <h2 className='Section-title'>Cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </div>
  )
}

export default CocktailList