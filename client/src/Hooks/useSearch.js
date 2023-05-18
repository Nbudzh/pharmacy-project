import { useState } from "react"

export function useSearch(){
    const [search,setSearch] = useState(``)
   function onSearchChange(e){
    setSearch(e.target.value)
    
   }
    
   return {
    search,
    onSearchChange
   }
 
}