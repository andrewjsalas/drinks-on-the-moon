import { useGlobal } from "../context"
import Search from "../components/Search"
import Cocktail from "../components/Cocktail"
import Navbar from "../components/Navbar"

const Home = () => {
  let { loading } = useGlobal()

  return (
    <div className="home-container">
      <div>
        <Navbar />
      </div>
      <div>
        <Search />
      </div>
      <div>
        { loading ? (
          <span>Loading...</span>
        ) : (
          <Cocktail />
        )}
      </div>
    </div>
  )
}

export default Home