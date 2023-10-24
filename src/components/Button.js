function Button(props){
    //events handler
    const btnHandler= () =>{
console.log("hello world")
    }
    return(
<button onClick={btnHandler} >
    click me
</button>
    );
}
export default Button;