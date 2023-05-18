import { useContext } from "react";
import { UserContext } from "../../../Contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
export function Logout(){
const {onLogoutClick} = useContext(UserContext)
useEffect(()=>{
    onLogoutClick()
},[onLogoutClick])

return(
    <Navigate to={"/"}></Navigate>
)
}