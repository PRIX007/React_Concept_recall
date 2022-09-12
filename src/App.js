import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

export const ThemeContext =React.createContext();

function App() {
  const [theme,setTheme]=useState();
  return (<ThemeContext.Provider value={{backgroundColor:theme}}>
    <Counter initialCount={10}/>
    
    <CounterHooks initialCount={10}/>
    <button onClick={()=>{setTheme((prev)=>{return prev==="red" ?"blue":"red"})}}>ToggleTheme</button>
    </ThemeContext.Provider>
  );
}

export default App;
