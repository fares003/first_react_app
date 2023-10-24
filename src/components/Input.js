import { useState } from "react";

function Input(){
    const [value,setvalue]=useState();
    return(
        <>
        <label>name</label>
        <input type="text" onChange={(event)=>{
            setvalue(event.target.value);
        }}/>
<p>{value}</p>
        </>
    )
    
}
export default Input ;