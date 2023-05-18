import { useContext } from "react"
import { ProductsContext } from "../../Contexts/ProductsContext"
import { OrderElement } from "./OrderElement"
export function Orders() {
    const {orders} = useContext(ProductsContext)
    return (
        <div className="row">
            <div className="col-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Number</th>
                            <th scope="col">Delivery</th>
                            <th scope="col">Address</th>
                            <th scope="col">Products</th>
                            <th scope="col">Total price</th>
                            <th scope="col">Finished</th>
                        </tr>
                    </thead>
                    <tbody>
                       {orders.map(order=><OrderElement {...order}/>)}
                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}