import { useState } from "react";

export default function InputB(){
    const[name,setName]=useState({firstName:"",lastName:""})
    return(
        <div>
            <h1>{name.firstName} {name.lastName}</h1>
            <form>
                <input onChange={(e)=>setName({...name ,firstName:e.target.value})}    type="text" value={name.firstName}></input>
                <input onChange={(e)=>setName({...name ,lastName:e.target.value})}  type="text" value={name.lastName}></input>
            </form>
        </div>
    )
}