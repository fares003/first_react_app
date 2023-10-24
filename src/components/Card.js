import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Card(props){
    /*
    const repeat_icons=()=>{
        for(let i=0;i<5;i++){
            <FontAwesomeIcon icon={faStar} className='starIcon' color='orange'/>     

        }
    }*/
    return(
             <div class="coment">
                <button className="edit">

                </button>
        <div class="image"><img src={props.image} alt="" /></div>
        <h2>{props.name}</h2>
        <p>props.title</p>


     
            <FontAwesomeIcon icon={faStar} className='starIcon' color='orange'/>     
            <FontAwesomeIcon icon={faStar} className='starIcon' color='orange'/>     
            <FontAwesomeIcon icon={faStar} className='starIcon' color='orange'/>     
            <FontAwesomeIcon icon={faStar} className='starIcon' color='orange'/>     
            <FontAwesomeIcon icon={faStar} className='starIcon' color='orange'/>     

   
        <p>
      {props.describe}
        </p>
</div>
    )
}
export default Card;