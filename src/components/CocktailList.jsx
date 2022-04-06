import React from 'react'
import Cocktail from './Cocktail'
import styled from 'styled-components'

const CocktailList = ({ cocktails, loading }) => {
  if (loading) {
    return ( 
      <LoadingMessage>Loading...</LoadingMessage>
    )
  }
  if (cocktails.length < 1) {
    return (
      <LoadingMessage>
        No cocktails matched your search criteria
      </LoadingMessage>
    )   
  }

  return (
    <GridContainer>
      <GridHeader>Cocktails</GridHeader>
      <GridItems>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </GridItems>
    </GridContainer>
  )
}

const LoadingMessage = styled.h2`
  color: white;
`

const GridContainer = styled.div`
  heigth: 100vh;
  width: 80%;
  margin: 5rem auto 0 auto;
  text-align: center;
`

const GridHeader = styled.h2`
  font-size: 3rem;
  color: white;
`
const GridItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 3fr));
  justify-content: center;
  grid-gap: 2rem;
`


export default CocktailList