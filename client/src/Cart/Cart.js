import { useContext, useEffect, useState } from "react"
import { ProductsContext } from "../Contexts/ProductsContext"
import { CartElement } from "./CartElement"
import './Cart.css'
import { useCheckout } from "../Hooks/useCheckout"

export function Cart() {
  const { cart, onCheckoutSubmit,total } = useContext(ProductsContext)
  let finalPrice = 0
  Object.values(total).map(el=>finalPrice+=Number(el))
  
  const [deliveryPrice, setDeliveryPrice] = useState("")
  const { values, onChange, onSubmit } = useCheckout({
    name: "",
    number: "",
    delivery: "",
    country: "",
    city: "",
    address: ""
  }, onCheckoutSubmit, finalPrice)
  useEffect(() => {
    if (finalPrice > 60) {
      setDeliveryPrice(0)
    } else {
      if (values.delivery === "ekont" || values.delivery === "speedy") {
        setDeliveryPrice(6)
       
      } else if (values.delivery === "address") {
        setDeliveryPrice(8)
      }
    }
  }, [values.delivery, finalPrice])

  return (



    <div className=" row cart-container">

      <div className="cart-products col-6 ps-0 pe-0">
        <div className="section-heading-container col-12">
          <h1 className="section-heading">
            Cart
          </h1>
        </div>
        <div className="col-12 ps-3 pe-3 pb-3">
        {cart.map(cartEl => <CartElement {...cartEl} />)}
        </div>
        
      </div>
      <div className="cart-products col-4 ps-0 pe-0">
      <div className="section-heading-container col-12">
          <h1 className="section-heading">
            Delivery information
          </h1>
        </div>
      <div className="col-12 ps-5 pe-5 pb-5">
        <form onSubmit={onSubmit}>
          
          <div class="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Full name</label>
            <input name="name" value={values.name} onChange={onChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3">
            <label htmlFor="exampleInputEmail5" className="form-label">Mobile number</label>
            <input name="number" value={values.number} onChange={onChange} type="text" className="form-control" id="exampleInputEmail5" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">


            <div className="form-check mb-1">
              <input className="form-check-input" type="radio" name="delivery" onChange={onChange} value="ekont" checked={values.delivery === "ekont"} id="flexRadioDefault1" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Delivery to Ekont office
              </label>
            </div>
            <div className="form-check mb-1">
              <input className="form-check-input" type="radio" name="delivery" onChange={onChange} value="speedy" checked={values.delivery === "speedy"} id="flexRadioDefault2" />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Delivery to Speedy office
              </label>
            </div>
            <div className="form-check mb-1">
              <input className="form-check-input" type="radio" name="delivery" onChange={onChange} value="address" checked={values.delivery === "address"} id="flexRadioDefault2" />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Delivery to home address
              </label>
            </div>
          </div>
          {values.delivery === "address" && <> <div class="mb-3">
            <label htmlFor="exampleInputEmail2" className="form-label">Country</label>
            <input name="country" onChange={onChange} value={values.country} type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
          </div>
            <div class="mb-3">
              <label htmlFor="exampleInputEmail2" className="form-label">City</label>
              <input name="city" onChange={onChange} value={values.city} type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
              <label htmlFor="exampleInputEmail2" className="form-label">Address</label>
              <input name="address" onChange={onChange} value={values.address} type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
            </div></>}
          {values.delivery === "ekont" && <> <div class="mb-3">
            <label htmlFor="exampleInputEmail2" className="form-label">Country</label>
            <input name="country" onChange={onChange} value={values.country} type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
          </div>
            <div class="mb-3">
              <label htmlFor="exampleInputEmail2" className="form-label">City</label>
              <input name="city" onChange={onChange} value={values.city} type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
              <label htmlFor="exampleInputEmail2" className="form-label">Ekont office address</label>
              <input name="address" onChange={onChange} value={values.address} type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
            </div></>}
          {values.delivery === "speedy" && <> <div class="mb-3">
            <label htmlFor="exampleInputEmail2" className="form-label">Country</label>
            <input name="country" onChange={onChange} value={values.country} type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
          </div>
            <div class="mb-3">
              <label htmlFor="exampleInputEmail2" className="form-label">City</label>
              <input name="city" onChange={onChange} value={values.city} type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
              <label htmlFor="exampleInputEmail2" className="form-label">Speedy office address</label>
              <input name="address" onChange={onChange} value={values.address} type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
            </div></>}
          <div className="mb-3 row">
            <div className="col-8 total-text-container">
              <legend className="total-text">
                Delivery fee: {deliveryPrice}lv
              </legend>
              <legend className="total-text">
                Total: {Number(finalPrice.toFixed(2)) + Number(deliveryPrice)}lv
              </legend>
            </div>
            <div className="col-4">
              <button type="submit" className="btn btn-primary">Checkout</button>
            </div>

          </div>


        </form>
        </div>
      </div>
    </div>
  )
}