import Home from "./pages/home";
import Elmontagat from "./pages/ELmontagat";
import Sign from "./pages/Service";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
//import Details from "./components/Details";
import Errror from "./components/Errror";
import Basket from "./pages/basket/Basket";
//import Sign from "./components/Sign";
function App() {

  




  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Sign />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Elmontagat" element={<Elmontagat />} />
          <Route path="*" element={<Errror />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
