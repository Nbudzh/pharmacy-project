import { Card } from "../Card/Card";
import { useContext } from "react";
import { ProductsContext } from "../../Contexts/ProductsContext";
import { Catalog } from "../Catalog/Catalog";



export function Beauty() {
    
   const heading = "Beauty"
    const { beauty } = useContext(ProductsContext)
    return (
       Catalog(beauty,heading)
    )
}