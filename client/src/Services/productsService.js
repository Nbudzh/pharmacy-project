import { requestBinder } from "./requester";
export function productsService(token){
const baseUrl = "https://pharm-server.onrender.com/data"
const orderUrl="https://pharm-server.onrender.com/jsonstore/orders"
const request = requestBinder(token)
return{
    getAll:(url)=>request.get(`${baseUrl}${url}`),
    create:(data,url)=>request.post(`${baseUrl}${url}`, data),
    getOne: (url)=>request.get(`${baseUrl}${url}`),
    order:(data)=>request.post(orderUrl, data),
    getOrders:()=>request.get(orderUrl),
    fullfillOrder:(data,url)=>request.put(`${orderUrl}/${url}`,data),
    deleteOne:(url)=>request.del(`${baseUrl}/${url}`)
}
}