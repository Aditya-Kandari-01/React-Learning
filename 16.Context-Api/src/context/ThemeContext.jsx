import { createContext, useEffect } from "react";
import { useState } from "react";
export const ThemeDataContext = createContext();
const ThemeContext = (props) => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.body.className = theme;

  }, [theme]);
  return (
    <div>
      <ThemeDataContext.Provider value={[theme, setTheme]}>
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  );
};

export default ThemeContext;
