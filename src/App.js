import React, { useState } from "react";
import Counter from "./Counter";

export const themeContext = React.createContext();
function App() {
  const [theme, setTheme] = useState({
    backgroundColor: "white",
    color: "black",
  });

  return (
    <themeContext.Provider
      value={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <Counter initialCount={69} />
      <button
        onClick={() => {
          setTheme((prevTheme) => ({
            backgroundColor:
              prevTheme.backgroundColor === "white" ? "black" : "white",
            color: prevTheme.color === "black" ? "white" : "black",
          }));
        }}
      >
        Switch Theme
      </button>
    </themeContext.Provider>
  );
}

export default App;
