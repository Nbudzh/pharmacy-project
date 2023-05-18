import { Card } from '../Card/Card'
import bannerOne from '../../pictures/banners.jpg'
import bannerTwo from '../../pictures/Pharma-Awards-Banner-Indesign2.png'
import bannerThree from '../../pictures/R (1).jpg'
import './homepage.css'
import { useContext } from 'react'
import { ProductsContext } from '../../Contexts/ProductsContext'
export function HomePage() {
  const { products } = useContext(ProductsContext)
  
  return (
    <div className="homepage">
      <div className="row">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={bannerOne} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={bannerTwo} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={bannerThree} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>



      <div className="row latest-products mt-5 mb-5">
        <div className="col-10">
          <div className="row">
            <div className="col-12 latest-section-heading">
              <h1 className='section-heading-text'>Latest products</h1>
            </div>
            <div className="col-12">
              <div className="row latest-products-container">
                {products.slice(0,4).map(product => <Card key={product._id} {...product} />)}
              </div>


            </div>
          </div>




        </div>

      </div>
    </div>
  )
}