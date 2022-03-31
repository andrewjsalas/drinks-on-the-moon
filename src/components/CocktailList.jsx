import Cocktail from "./Cocktail"
import { useGlobal } from "../context"

const CocktailList = () => {
  let { data } = useGlobal()

  return (
    <div className="card-grid">
      {data.map((item) => {
        return <Cocktail key={item.id} {...item} />
      })}
    </div>
  )
}

export default CocktailList