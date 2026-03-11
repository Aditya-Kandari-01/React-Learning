import { useContext } from "react";
import Navbar1 from "./Navbar1"
import { ThemeDataContext } from "../context/ThemeContext";

const Navbar = () => {
  const [theme,setTheme] = useContext(ThemeDataContext)

  return (
    <div className={`nav ${theme}`}>
      <h2>Aditya's</h2>
      <Navbar1></Navbar1>
    </div>
  );
};

export default Navbar;
