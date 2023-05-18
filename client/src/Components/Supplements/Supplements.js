import { useContext } from "react";
import { ProductsContext } from "../../Contexts/ProductsContext";
import { Catalog } from "../Catalog/Catalog";

export function Supplements() {
    const { supplements } = useContext(ProductsContext)
    const heading = "Supplements"
    return (
      Catalog(supplements,heading)
      )
}