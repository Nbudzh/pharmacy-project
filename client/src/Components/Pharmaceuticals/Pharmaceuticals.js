import { useContext } from "react";
import { ProductsContext } from "../../Contexts/ProductsContext";
import { Catalog } from "../Catalog/Catalog";

export function Pharmaceuticals() {
    const { pharmaceuticals } = useContext(ProductsContext)
    const heading = "Pharmaceuticals"
   return (
   Catalog(pharmaceuticals,heading)
    )
}