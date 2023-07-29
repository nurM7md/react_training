import Home from "./pages/home";
import Elmontagat from "./pages/ELmontagat";
import Sign from "./pages/Service";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
//import Details from "./components/Details";
import Errror from "./components/Errror";
import Basket from "./pages/basket/Basket";
//import Sign from "./components/Sign";
import SingleProduct from "./pages/SingleProduct";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Elmontagat" element={<Elmontagat />} />
          <Route path='/Elmontagat/:id' element={<SingleProduct/>}/>
          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<Errror />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
