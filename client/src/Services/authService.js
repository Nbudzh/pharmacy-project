import { requestBinder } from "./requester";
export function authService(token){
const baseUrl = "https://pharm-server.onrender.com/users"
const authRequester = requestBinder(token)

return{
    register:(data)=>authRequester.post(`${baseUrl}/register`,data),
    login:(data)=>authRequester.post(`${baseUrl}/login`,data),
    logout:()=>authRequester.get(`${baseUrl}/logout`)
}
}