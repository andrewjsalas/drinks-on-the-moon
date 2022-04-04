import { useEffect, useRef } from "react"

const SearchBar = ({ setSearchTerm }) => {
  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchValue = useRef('')
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const searchCocktails = () => {
    setSearchTerm(searchValue.current.value)
  }

  return (
    <div>
      <h2 className="section-title">Search Cocktails</h2>
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">Search your favorite cocktail</label>
          <input 
            type='text'
            name='name'
            id='name'
            onChange={searchCocktails}
            ref={searchValue} 
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar