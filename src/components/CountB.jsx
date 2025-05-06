import { useState } from "react";

export default function CountB(){
    const[count,setCount]=useState(0);
    const[incrementBy,setIncrementBy]=useState(1);

    return(
        <div>
        <h1>COUNT VALUE IS={count}</h1>
        <button onClick={()=>setCount(count+incrementBy)}>INCREMENT</button>
        <button onClick={()=>setCount(count-incrementBy)}>DECREMENT</button>
        <button onClick={()=>setCount(0)}>RESET</button>
        <h1>WE ARE INCREMENT THE VALUE BY={incrementBy}</h1>
        <button onClick={()=>setIncrementBy(incrementBy+1)}>INCREMENT</button>
        <button onClick={()=>setIncrementBy(incrementBy+1)}>DECREMENT</button>
        </div>
    )
}