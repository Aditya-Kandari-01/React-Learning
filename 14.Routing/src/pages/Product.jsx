import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Product = () => {
  return (
    <div>
      <div className="flex justify-center gap-5 py-4 items-center">
        <Link className='text-xl font-semibold' to='/product/men'>Men</Link>
        <Link className='text-xl font-semibold' to='/product/women'>Women</Link>
        <Link className='text-xl font-semibold' to="/product/kids">Kids</Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Product;
