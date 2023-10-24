import { useState } from "react";

function Welcome(props){
    let [count,setCount]=useState(0);
    console.log(props);
    return( 
        <>
<h1>hello</h1>
<p>{count}</p>
 <button onClick={()=>
   
   setCount(++count)
           }>
               add me
           </button>
           </>
        );
}
export default Welcome;