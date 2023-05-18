import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faGem,faHome,faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export function Footer(){
    return(
      
        <footer className="border-div text-center text-lg-start bg-light text-muted">
       
        
        
      
        
        <section className="">
          <div className="container text-center text-md-start mt-5">
            
            <div className="row mt-3">
              
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                
                <h6 className="text-uppercase fw-bold mb-4">
                  <FontAwesomeIcon icon={faGem} className="fas fa-gem me-3"></FontAwesomeIcon>Demo application
                </h6>
                <p>
                  This website is for training purpose only.
                </p>
              </div>
              
      
              
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                
                <h6 className="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <Link to="/products" className="text-reset">Products</Link>
                </p>
                <p>
                  <Link to="/products/pharmaceuticals" className="text-reset">Pharmaceuticals</Link>
                </p>
                <p>
                  <Link to="/products/supplements" className="text-reset">Supplements</Link>
                </p>
                <p>
                  <Link to="/products/beauty" className="text-reset">Beauty</Link>
                </p>
              </div>
              
      
              
              
              
      
              
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><FontAwesomeIcon icon={faHome} className="fas fa-home me-3"></FontAwesomeIcon> New York, NY 10012, US</p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} className="fas fa-envelope me-3"></FontAwesomeIcon>
                  info@example.com
                </p>
                <p><FontAwesomeIcon icon={faPhone} className="fas fa-phone me-3"></FontAwesomeIcon> + 01 234 567 88</p>
                <p><FontAwesomeIcon icon={faPhone} className="fas fa-print me-3"></FontAwesomeIcon> + 01 234 567 89</p>
              </div>
              
            </div>
            
          </div>
        </section>
        
      
        
        <div className="border-div text-center p-4">
          © 2023 Copyright
         
        </div>
        
      </footer>
       
    )
}