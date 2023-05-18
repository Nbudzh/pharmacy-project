import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { authService } from "../Services/authService";
export const UserContext = createContext()
export  function UserProvider(
    {
        children
    }
){
    
   
    const navigate = useNavigate()
    const [user,setUser] = useState({})
    const userRequest = authService(user.accessToken)
   useEffect(()=>{
    if(!!sessionStorage.getItem("user")){
        setUser(JSON.parse(sessionStorage.getItem("user")))
    }else{
        setUser({})
    }
    
   },[sessionStorage.user])
    async function onRegisterUser(data){
        if(data.password!==data.rePassword){
            alert(`Passwords don't match. Please try again!`)
            return
        }
     
        const body = {
            email:data.email,
            password:data.password
        }
        const result = await userRequest.register(body)
        try{
            sessionStorage.setItem("user", JSON.stringify(result))
            // setUser(JSON.parse(sessionStorage.getItem("user")))
            navigate('/')
            console.log(result)
        }catch(error){
            console.log(error)
        }
    }
    async function onUserLogin(data){
        const result = await userRequest.login(data)
        try{
            sessionStorage.setItem("user", JSON.stringify(result))
            
            navigate('/')
            
        }catch(error){
            console.log(error)
        }
    } 
    function onLogoutClick(){
        
    
         userRequest.logout()
         sessionStorage.clear()
        
       
       }
      
  
    const context={
    isLoggedIn: !!user._id,
      email: user.email,
      userId: user._id,
      token:user.accessToken,
      onRegisterUser,
      onUserLogin,
      onLogoutClick,
      user,
      setUser
    }
    return(
        <UserContext.Provider value={context}>
            {children}
        </UserContext.Provider>
    )
}

