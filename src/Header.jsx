import { useNavigate } from "react-router-dom"

const Header=()=>{
    const navigate = useNavigate()
    const handleHeader=(route)=>{
        navigate('/'+route)
      }
    return(
        <div>
            <h2 onClick={()=>handleHeader('home')}>Products</h2>
      <h2 onClick={()=>handleHeader('Jwellery')}>Jwellery</h2>
        </div>
    )
}
export default Header