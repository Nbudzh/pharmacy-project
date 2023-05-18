import './Header.css'
import headerImage from '../../pictures/img-removed.png.png'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Contexts/AuthContext'
import { useContext, useState, } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

import { ProductsContext } from '../../Contexts/ProductsContext'

export function Header() {
  const { email,  } = useContext(UserContext)
  const { onSearch,cart } = useContext(ProductsContext)
  let username = ""
  if (email) {
    username = email.split('@')[0]
  } else {
    username = "guest"
  }
  const [search, setSearch] = useState(``)
  function onSearchChange(e) {
    setSearch(e.target.value)
  }
  function onSearchClick(e) {
    e.preventDefault()
    onSearch(search)
    setSearch("")
  }


  return (<div className='row navigation-container'>
    <div className="col-12">
    <div className="row header-navigation justify-content-between pb-1">
      <div className="col-3 align-self-center">
        <div className="row justify-content-center">
        <div className="col-3 align-self-center">
          <img className='card-img' src={headerImage} alt="..." />
        </div>
        </div>
        

      </div>
      <div className="col-3 align-self-center">
        <div className="col-12">
          <h1 className="top-nav-text" >Welcome, {username}</h1>
        </div>
        <div className="col-12">
          <Link className="navbar-brand top-nav-text-category" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" >Categories</Link>
        </div>


      </div>
      <div className="col-3 align-self-center">
        <div className="cart-num">
          {cart.length}
        </div>
        <Link className="nav-link cart-link" to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
      </div>
    </div>
    </div>
    

    <nav className="  border-container navbar p-0 navbar-expand-lg bg-body-tertiary">
      <div className="header-navigation container-fluid">



        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">All products</Link>
            </li>
            {email===undefined  && <li className="nav-item">
              <Link className="nav-link" to='/register'>Register</Link>
            </li>}
            {email===undefined && <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>}
           
            {email!==undefined && <li className="nav-item">
              <Link className="nav-link" to="/logout">Logout</Link>
            </li>}
            {email==="adminapteka@apteka" && <li className="nav-item">
              <Link className="nav-link" to="/create">Create</Link>
            </li>}
            {email==="adminapteka@apteka" && <li className="nav-item">
              <Link className="nav-link" to="/orders">Orders</Link>
            </li>}
          </ul>
          <form className="d-flex" role="search">
            <input onChange={onSearchChange} value={search} name='search' className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button onClick={onSearchClick} className="btn btn-dark" type="submit">Search</button>
          </form>
        </div>
      </div>


    </nav>


    <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="staticBackdropLabel">Categories</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/products/pharmaceuticals">Pharmaceuticals</Link>
              <Link className="nav-link active" aria-current="page" to="/products/supplements">Supplements</Link>
              <Link className="nav-link active" aria-current="page" to="/products/beauty">Beauty</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>

  )
}