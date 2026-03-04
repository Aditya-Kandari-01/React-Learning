import React from "react";
import head from "./Header.module.css"
const Header = () => {
  return (
    <div className="header">
      <h3>Header</h3>
      <button className={head.button}>Login</button>
    </div>
  );
};

export default Header;
