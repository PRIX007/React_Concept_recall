import React,{useState,useContext} from "react";
import { ThemeContext } from "./App";
export default function CounterHooks(props)
{const [state,setState]=useState({count :props.initialCount})
const style=useContext(ThemeContext); 
const changeCount=function(amount)
 {
    setState(prevState=>{return {...prevState,count:prevState.count+amount}})
 }    
return(
    <div>
        <button style={style} onClick={()=>changeCount(-1)}>-</button>
        <span>{state.count}</span>
        <button style={style} onClick={()=>changeCount(1)}>+</button>
    </div>
)


}