import { useContext, useEffect, useState } from "react"
import { ProductsContext } from "../Contexts/ProductsContext"

export function CartElement(
  cartEl
) {


  const {setTotal,setCart,setQuantityPerProduct} = useContext(ProductsContext)
  const [quantity,setQuantity] = useState(1)
  const [totalPerProduct,setTotalPerProduct] = useState(quantity*cartEl.price)
  useEffect(()=>{
    setTotal(state=>({...state,[cartEl.title]:cartEl.price*quantity}))
  },[quantity])
  useEffect(()=>{
    setQuantityPerProduct(state=>({...state,[cartEl.title]:quantity}))
  },[quantity])
  function onQuantityChange(e){
    
    setQuantity(e.target.value)
   
    setTotal(state=>({...state,[cartEl.title]:totalPerProduct}))
    
  }
  function deleteFromCart(){
    setCart(state=>state.filter(el=>el.title!==cartEl.title))
    setTotal(state=>{ 
      delete state[`${cartEl.title}`]
      return {...state}})
  }
  return (
    <div className="row">
      <div className="col-12">


        <div class="card mb-3 border-success">
          <div class="row g-0 cart-row">
            <div class="col-md-2 border">
              <img src={cartEl.image} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8 text-success card-container">
              <div class="card-body justify-content-start">
                <h5 class="card-title">{cartEl.title}</h5>
                <p class="card-text">Price: {cartEl.price}</p>
                <div className="quantity-container">
                
              <label className="quantity-label" htmlFor="quantity">Quantity:</label>
                <input value={quantity} onChange={onQuantityChange} className="quantity-input" type="number" name="quantity" min="1" />
              </div>

              </div>
              



            </div>
            <div className="col-2 btn-container">
            <button onClick={deleteFromCart} type="button" className="btn btn-danger remove-btn">X</button>
          </div>
          </div>
          
        </div>

      </div>
    </div>
  )
}