import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NavBar from "./components/Navbar"
import Product from "./pages/Product";
const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
      </Routes>
      <h2>This is Footer</h2>
    </div>
  );
};

export default App;
