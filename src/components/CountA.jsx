import { useState } from "react";
export default function CountA(){
    const[count,setCount]=useState(0);
    return(
        <div>
            <h1>VALUE OF COUNT={count}</h1>
            <button onClick={()=>setCount(count+1)}>INCREMENT</button>
            <button onClick={()=>setCount(count-1)}>DECREMENT</button>
            <button onClick={()=>setCount(0)}>RESET</button>
        </div>
    )
}