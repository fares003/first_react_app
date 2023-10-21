import React from "react";

class WelcomeCL extends React.Component{
constructor(props){
    super(props);
    this.state ={
        FirstName :"fares",
        lastName :"zakaria",
    
    }
}
    render(){
        return (
            <>

        <h1>class component ,{this.props.name}</h1>
        <h6>created by {this.state.FirstName},{this.state.lastName}</h6>
        <button onClick={()=>
 this.setState({
    lastName :"abdo",
}
)

        }>
            change my name
        </button>
        </>
        );
    } 
componentDidMount(){
   
}
}
export default WelcomeCL;