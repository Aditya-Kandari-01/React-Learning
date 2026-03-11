import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Kids from "./pages/Kids"
import Men from "./pages/Men";
import Women from "./pages/Women";
import CourseDetails from "./pages/CourseDetails";
import Courses from "./pages/Courses"
import Navbar1 from "./components/Navbar1"
const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar></Navbar>
      <Navbar1></Navbar1>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/courses" element={<Courses></Courses>}></Route>
        <Route path="/courses/:c_id" element={<CourseDetails></CourseDetails>}></Route>
        <Route path="/product" element={<Product></Product>}>
          <Route path="men" element={<Men></Men>}></Route>
          <Route path="women" element={<Women></Women>}></Route>
          <Route path="kids" element={<Kids></Kids>}></Route>
        </Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
