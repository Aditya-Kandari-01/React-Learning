import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex items-center bg-blue-800  justify-between p-5">
      <h3>Aditya's</h3>
      <div className="flex items-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
