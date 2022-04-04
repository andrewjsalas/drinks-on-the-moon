import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/about' element={ <About/> } />
          <Route path='/cocktail/:id' element={ <SingleCocktail/> } />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
