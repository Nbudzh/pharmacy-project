import './card.css'
import defImg from '../../pictures/nasodren.png'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../Hooks/useCart'
import { useContext } from 'react'
import { ProductsContext } from '../../Contexts/ProductsContext'
export function Card(
  supplement
){
  const {cartAdd} = useContext(ProductsContext)
  const navigate= useNavigate()
function onDetailsClick(){
 const locationArr = window.location.href.split("/")
 const lastLocation = locationArr[locationArr.length-1]

  if(lastLocation==="products"){
    navigate(`${supplement.category}/${supplement._id}`)
    
  }else if(window.location.href==="https://pharm-server.onrender.com"){
    navigate(`products/${supplement.category}/${supplement._id}`)
  }
  else{
    navigate(`${supplement._id}`)
    console.log(window.location.href)
  }

  
  
}

const {onAdd} = useCart(supplement,cartAdd)
function onAddClick(e){
e.target.innerText="Added"
e.target.disabled=true
e.target.className="btn disabled-button"
onAdd()
}
    return(
      <div className="col-3 my-1 mx">
        <div className="card">
        <img onClick={onDetailsClick} src={supplement.image} className="card-img-top border" alt="..."/>
        <div className="card-body">
          <h5 onClick={onDetailsClick}  className="card-title">{supplement.title}</h5>
          <div className="price-container">
          <span className="card-text">Price: {supplement.price}lv</span>
          <button onClick={onAddClick} type="button" className="btn btn-success">Buy</button>
          </div>
        </div>
      </div>
      </div>
    )
}