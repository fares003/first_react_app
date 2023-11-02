import { useState } from "react";

function Form1(){
    const [name,set_Name]=useState('');
    const [password,set_password]=useState('');
    const [type,set_type]=useState('');
const nameHandler=(value)=>{
    set_Name(value);
}
const passHandler=(value)=>{
    set_password(value);
}
const typeHandler=(value)=>{
    set_type(value);
}
    return(
    <form onSubmit={(e)=>{
        e.preventDefault();
        console.log(name);
        console.log(password);
        console.log(type);

    }}>
        <label>
            name
        </label>
        <input type="text" placeholder="Enter your Name" onChange={(event)=>{nameHandler(event.target.value)}}/>
        <br/>
        <label>
            password
        </label>
        <input type="password" placeholder="Enter your password" onChange={(event)=>{passHandler(event.target.value)}}/>
        <br/>
        <label>
            type
        </label>
        <select onChange={(event)=>{typeHandler(event.target.value)}}>
            <option value={"male"}  >male</option>
            <option value={"female"} >female</option>

        </select>
<br/>
<button type="submit">submit</button>
    </form>
    )
}
export default Form1;