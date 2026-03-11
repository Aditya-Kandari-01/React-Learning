import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Button = () => {
   const [theme,setTheme] = useContext(ThemeDataContext)
  return (
    <div className={`btn ${theme} p-2 border rounded m-2 w-40`}>
      <button onClick={()=>{
        setTheme(theme==='light'?'dark':'light')
      }}>Change Theme {theme}</button>
    </div>
  );
};

export default Button;
