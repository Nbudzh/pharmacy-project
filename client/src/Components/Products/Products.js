import './Products.css'
import { Card } from "../Card/Card"
import { useContext } from "react"
import { ProductsContext } from "../../Contexts/ProductsContext"

export function Products() {
    const { products } = useContext(ProductsContext)
    return (
        <div className="row mt-4 justify-content-center section-products-container">
            <div className="col-10 align-self-center products-container " >
                <div className="row mb-4">
                    <div className="section-heading-container">
                        <h1 className='section-heading'>
                            All products
                        </h1>
                    </div>
                </div>


                
                <div className="row ps-4 pe-4 justify-content-around">
                    {products.map(product =>
                        <Card key={product._id} {...product} />
                    )}


                </div>
            </div>
        </div>

    )
}