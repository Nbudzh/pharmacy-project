import {useState} from 'react'
export function useForm(initialValues,submitHandler){
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
        if(!values.category){
            submitHandler(values)
        }else{
            if(values.category==="supplements"){
            submitHandler({
                title:values.title,
                price:values.price,
                content:values.content,
                summary:values.summary,
                image:values.image,
                usage:values.usage,
                category:values.category
                
        },"/supplements")
        }
        else if(values.category==="pharmaceuticals"){
            submitHandler({
                title:values.title,
                content:values.content,
                summary:values.summary,
                image:values.image,
                usage:values.usage,
                category:values.category,
                price:values.price
                
        },"/pharmaceuticals")
        }
        else if(values.category==="beauty"){
            submitHandler({
                title:values.title,
                content:values.content,
                summary:values.summary,
                image:values.image,
                usage:values.usage,
                price:values.price,
                category:values.category
                
        },"/beauty")
        }
        

    }
}
    return{
        values,
        onChange,
        onSubmit
    }

}