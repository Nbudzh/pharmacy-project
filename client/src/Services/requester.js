async function requester(method,token,url,body){
    const options={}
    if(method!=="GET"){
        options.method=method
        if(body){
            const bodyStringified= JSON.stringify(body)
            options.headers={
                "content-type":"application/json"
            }
            options.body=bodyStringified
    
        }
       
    }
    if(token){
        options.headers={
            ...options.headers,
            "X-Authorization":token
        }
    }
    const response = await fetch(url,options)
    if(response.status===204){
        return {}
    }
    const result = response.json()
    if(!response.ok){
       
    throw new Error(`Data error`)
    }
    return result

}

export function requestBinder(token){
    return{
        get:requester.bind(null, "GET", token),
        post:requester.bind(null, "POST", token),
        put:requester.bind(null, "PUT", token),
        patch:requester.bind(null, "PATCH", token),
        // del:requester.bind(null, "DELETE", token)
    }
}

