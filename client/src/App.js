import { Routes,Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './Components/HomePage/HomePage';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Register } from './Components/Register/Register';
import { Login } from './Components/Login/Login';
import { UserProvider } from './Contexts/AuthContext';
import { Logout } from './Components/Header/Logout/Logout';
import { Supplements } from './Components/Supplements/Supplements';
import { Create } from './Components/Create/Create';
import { ProductsProvider } from './Contexts/ProductsContext';
import { Beauty } from './Components/Beauty/Beauty';
import { Pharmaceuticals } from './Components/Pharmaceuticals/Pharmaceuticals';

import { Products } from './Components/Products/Products';
import { Details } from './Components/Details/Details';
import { Cart } from './Cart/Cart';
import { SearchedProducts } from './Components/SearchedProducts/SearchedProducts';
import { Orders } from './Components/Orders/Orders';
import { SuccessfullOrder } from './Cart/SuccessfulOrder/SuccessfulOrder';

function App() {
  return (

    <UserProvider>
      <ProductsProvider>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/products/supplements' element={<Supplements/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/products/beauty' element={<Beauty/>}/>
        <Route path='/products/pharmaceuticals' element={<Pharmaceuticals/>}/>
        <Route path='/productssearch' element={<SearchedProducts/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:category/:id' element={<Details/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/successfulorder' element={<SuccessfullOrder/>}/>
      </Routes>
     
    </div>
    <Footer/>
    </ProductsProvider>
    </UserProvider>
  );
}

export default App;
