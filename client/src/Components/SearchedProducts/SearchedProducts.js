import { useContext } from "react"
import { ProductsContext } from "../../Contexts/ProductsContext"
import { Catalog } from "../Catalog/Catalog"
export function SearchedProducts(){
    const {searchedProducts} = useContext(ProductsContext)
    const heading = "Your search:"
    return(
    Catalog(searchedProducts,heading)
    )
}