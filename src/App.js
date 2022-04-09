import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Navbar from './components/Navbar'
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route exact path='/about' element={ <About/> } />
          <Route path='/cocktail/:id' element={ <SingleCocktail/> } />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
