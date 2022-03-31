import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Featured from "./pages/Featured";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Featured />} />
        </Routes>
        <Navbar />
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
