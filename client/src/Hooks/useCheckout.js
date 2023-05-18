import { useState } from "react";

export function useCheckout(initialValues,submitHandler,totalPrice){
const [values,setValues] = useState(initialValues)

function onChange(e){
    setValues(state=>({...state,[e.target.name]:e.target.value}))
}
function onSubmit(e){
    e.preventDefault()
    if(Object.values(values).includes("")){
        alert("All fields are required")
        return
    }
    submitHandler(totalPrice,values)
}
return{
    values,
    onChange,
    onSubmit
}
}