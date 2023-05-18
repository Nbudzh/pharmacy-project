import { useForm } from '../../Hooks/useForm'
import { useContext } from 'react'
import { ProductsContext } from '../../Contexts/ProductsContext'
export function Create() {
    const { onCreateSubmit } = useContext(ProductsContext)
    const initialValues = {
        title:"",
        price:"",
        content:"",
        summary:"",
        image:"",
        category:"supplements",
        usage:""

    }
    const { values, onChange, onSubmit } = useForm(initialValues , onCreateSubmit)

    return (
        <div className="row justify-content-center my-5 register-row">
            <div className="col-4 register-col border">

                <form onSubmit={onSubmit} className="register-form">

                    <div className="form-heading">
                        <h3>
                            Create form
                        </h3>
                    </div>
                 
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Product title</label>
                        <input name='title' value={values.title} onChange={onChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Price</label>
                        <input name='price' value={values.price} onChange={onChange} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                   
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Content</label>
                        <input name='content' value={values.content} onChange={onChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Quick description</label>
                        <textarea name='summary' value={values.description} onChange={onChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className='mb-3 align-self-start'>
                    <label htmlFor="image" className='form-label'>Image</label>
                    <input value={values.image} onChange={onChange} name='image' type="text" className='form-control' />
                    </div>
                    <label htmlFor="category" className='form-label'>Category</label>
                    <select  value={values.category} onChange={onChange} name='category' className="form-select mb-3">
                        <option  value="supplements">Supplements</option>
                        <option value="pharmaceuticals">Pharmaceuticals</option>
                        <option value="beauty">Beauty</option>
                    </select>
                    <label htmlFor="usage" className='form-label'>What is it used for</label>
                    <input type="text" name='usage' onChange={onChange} value={values.usage} className='form-control'/>
                    </div>


                    <button type="submit" className="btn btn-primary">Create</button>
                </form>

            </div>
        </div>
    )
}