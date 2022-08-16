import { useState } from "react"

export default function Counter(){

    const[count,setCount]=useState(0)

    return(
        <div data-testid="counter">
        <h2>{count}</h2>
        <button data-testid="addBtn" onClick={()=>setCount((count)=>count+1)}>Add</button>
        <button data-testid="reduceBtn" onClick={()=>setCount((count)=>count-1)}>Reduce</button>
        </div>
    )
}