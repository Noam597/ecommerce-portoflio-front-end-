
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'


const Rate = ({rating,onClick}) => {


    
  return (
    <>
    <label>Rating:</label>
    <br/>
    {[...Array(5)].map((_,i)=>{
       return <span key={i} onClick={(i)=>{onClick(i)}} style={{cursor:'pointer'}}>
        {rating > i ? <AiFillStar/>:<AiOutlineStar/>}
       </span>
    })}
    </>
  )
}

export default Rate