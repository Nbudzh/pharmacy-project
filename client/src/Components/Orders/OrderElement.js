import { useContext } from "react"
import { ProductsContext } from "../../Contexts/ProductsContext"
import { useState } from "react"

export function OrderElement(
    order
){
    const [fullfilled,setFullfilled] = useState(order.fullfilled)
    const {onFullFill} = useContext(ProductsContext)
   
    const address = `${order.clientInfo["country"]}, ${order.clientInfo["city"]}, ${order.clientInfo["address"]}`
  
    const orderedItems = Object.entries(order.quantityPerProduct)
   function onFullFillClick(){
   setFullfilled(!fullfilled)
    onFullFill(order._id,{...order,fullfilled:!order.fullfilled})
   }
    return(
    <tr>
        <th scope="row">{order.clientInfo[`name`]}</th>
        <td>{order.clientInfo[`number`]}</td>
        <td>{order.clientInfo[`delivery`]}</td>
        <td>{address}</td>
        <td>{orderedItems.join(`, `)}</td>
        <td>{order.totalPrice.toFixed(2)}</td>
        <td><button onClick={onFullFillClick} className={fullfilled ? "btn btn-success" : "btn btn-danger"}>{fullfilled ? "Fullfilled" : "Fullfill"}</button></td>
    </tr>
    )
}