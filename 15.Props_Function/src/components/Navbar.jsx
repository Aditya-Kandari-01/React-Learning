import React from "react";

const Navbar = (props) => {
  const changeTheme = () =>{
    props.setTheme(props.theme==='dark'?'light':"dark")
  }
  return (

    <div>
      <p>{props.theme}</p>
      <button onClick={changeTheme} className="">Change theme</button>
    </div>
  );
};

export default Navbar;
