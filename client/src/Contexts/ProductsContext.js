import { useNavigate } from "react-router-dom";
import { productsService } from "../Services/productsService";
import { UserContext } from "./AuthContext";
import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../Services/authService";
import { initialProducts } from "../initialProducts/initialProducts";
export const ProductsContext = createContext()
export function ProductsProvider(
    {
        children
    }
) {
    const [quantityPerProduct,setQuantityPerProduct] = useState({})
    const [orders,setOrders] = useState([])
    const [searchedProducts, setSearchedProducts] = useState([])
    const [total, setTotal] = useState({})
    const navigate = useNavigate()
    const [cart, setCart] = useState([])
    const [supplements, setSupplements] = useState([])
    const [pharmaceuticals, setPharmaceuticals] = useState([])
    const [beauty, setBeauty] = useState([])
    const [products, setProducts] = useState([])
    const { token } = useContext(UserContext)
    const request = productsService(token)
    const currentUrl = window.location.href
    const {setUser,user} = useContext(UserContext)
    const userRequest = authService(user.accessToken)
    
   
    useEffect(() => {
        request.getAll("/supplements")
            .then(result => setSupplements(result))
    }, [])
    useEffect(() => {
        request.getAll("/pharmaceuticals")
            .then(result => setPharmaceuticals(result))
    }, [])
    useEffect(() => {
        request.getAll("/beauty")
            .then(result => setBeauty(result))
    }, [])
    useEffect(() => {

        setProducts([...beauty, ...pharmaceuticals, ...supplements])

    }, [currentUrl, beauty, pharmaceuticals, supplements])
    useEffect(()=>{
            request.getOrders()
            .then(result=>setOrders(Object.values(result)))
            

    },[])
    useEffect(()=>{
        (async()=>{
           const response = await fetch("https://pharm-server.onrender.com/data/beauty")
           
            if(!response.ok){
                console.log(`zdr`)
                
               const profile = await fetch("https://pharm-server.onrender.com/users/register",{
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify({
                        email:"adminapteka@admin",
                        password:"6261"
                    }
                        
                    )
                    
                 })
                 const response = await profile.json()
                 
                 
                 
                
                 initialProducts.forEach(async (product)=>{
                    const prod = await fetch(`https://pharm-server.onrender.com/data/${product.category}`,{
                        method:"POST",
                        headers:{
                            "content-type": "application/json",
                            "X-Authorization":response.accessToken
                        },
                        body:JSON.stringify(product)
                    }
                    )
                    if(product.category==="supplements"){
                        setSupplements(state=>[...state,product])
                    }else if(product.category==="beauty"){
                        setBeauty(state=>[...state,product])
                    }else if(product.category==="pharmaceuticals"){
                        setPharmaceuticals(state=>[...state,product])
                    }
                })
                
                await userRequest.logout()
                
            }else{
                return
            }
        }) ()
       
            
       
    },[])


    async function onCreateSubmit(data, url) {

        const response = await request.create(data, url)
        if (url === "/supplements") {
            setSupplements(state => [...state, response])
        } else if (url === "/pharmaceuticals") {
            setPharmaceuticals(state => [...state, response])
        } else if (url === "/beauty") {
            setBeauty(state => [...state, response])
        }

        navigate('/products')
    }
    async function onSearch(search) {

        setSearchedProducts([...beauty, ...pharmaceuticals, ...supplements])
        setSearchedProducts(state => state.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())))
        navigate("/productssearch")


    }
    function cartAdd(product) {
        setCart(state => [...state, product])
    
    }
    async function onCheckoutSubmit(totalPrice, clientInfo) {
        setCart([])
        const body = { clientInfo, total, totalPrice,quantityPerProduct, fullfilled:false }
        await request.order(body)
        navigate("/successfulorder")
    }
    function onFullFill(orderId,fullFilled){
        request.fullfillOrder(fullFilled,orderId)
    }

    const context = {
        supplements,
        onCreateSubmit,
        pharmaceuticals,
        beauty,
        onSearch,
        products,
        cartAdd,
        cart,
        total,
        setTotal,
        onCheckoutSubmit,
        searchedProducts,
        setCart,
        orders,
        quantityPerProduct,
        setQuantityPerProduct,
        onFullFill

    }
    return (
        <ProductsContext.Provider value={context}>
            {children}
        </ProductsContext.Provider>
    )

}