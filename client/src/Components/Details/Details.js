import { useContext, useEffect, useState } from 'react'
import './Details.css'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../Contexts/AuthContext'
import { productsService } from '../../Services/productsService'
import { useCart } from '../../Hooks/useCart'
import { ProductsContext } from '../../Contexts/ProductsContext'
import { useNavigate } from 'react-router-dom'
export function Details() {
    const { category, id } = useParams()
    const { token,email } = useContext(UserContext)
    const { cartAdd } = useContext(ProductsContext)
    const request = productsService(token)
    const [detailsItem, setDetailsItem] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        request.getOne(`/${category}/${id}`)
            .then(response => setDetailsItem(response))
    }, [])
    const { onAdd } = useCart(detailsItem, cartAdd)
    function onAddClick(e) {
        e.target.innerText = "Added"
        e.target.disabled = true
        e.target.className = "btn disabled-button"
        onAdd()
    }
    const target = `https://pharm-server.onrender.com/data/${detailsItem.category}/${detailsItem._id}`
    function onProductDeleteClick(){
        fetch(target,{
            method:"DELETE",
            headers:{
                "content-type":"application/json",
                "X-Authorization":token,
                "X-Admin":""
            }
            
        })
        try{
            navigate(-1)
        }catch(error){
            alert(error)
        }
        
        
        
    }
    return (
        <div className="details-section">
            <div className="row justify-content-center">
                <div className="details-container mt-4 mb-4 p-3 border col-10 justify-self-center">
                    <div className="row">
                        <div className="col-5">
                            <div className="img-container">
                                <img className="card-img-top border" src={detailsItem.image} alt="..." />
                            </div>
                        </div>
                        <div className="col-5 align-self-center">
                            <h1 className="card-heading mb-3">{detailsItem.title}</h1>
                            <div className="break"></div>
                            <p className="mb-3 heading-text">Price: {detailsItem.price}</p>
                            <div className="break"></div>
                            <p className="mb-3 heading-text">Categories: {detailsItem.usage}</p>
                            <div className="break"></div>
                            <div className="btn-container col-6 mt-3">
                                <button onClick={onAddClick} className="btn btn-success">Add to card</button>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
            <div className="row justify-content-around mb-4">
                <div className="col-10 details-container">
                    <div className="row">
                        <div className="section-heading-container col-12 ps-0 pe-0">
                            <h1 className='section-heading'>Summary</h1>
                        </div>
                    </div>
                    <div className="row mt-4 justify-content-center">
                        <div className="col-12 p-2 justify-content-center">
                           
                            <p>
                                {detailsItem.summary}
                            </p>



                        </div>
                    </div>
                </div>
            </div>
            
            {email==="adminapteka@apteka" && <div className="row justify-content-center">
                <div className="col-3">
                    <button onClick={onProductDeleteClick} className='btn btn-danger'>Delete product</button>
                </div>
            </div>}
        </div>
    )
}