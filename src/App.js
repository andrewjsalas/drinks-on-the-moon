import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Featured from "./pages/Featured";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
