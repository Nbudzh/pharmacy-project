import './login.css'
import { useForm } from '../../Hooks/useForm'
import { useContext } from 'react'
import { UserContext } from '../../Contexts/AuthContext'

export function Login(){
    const {onUserLogin} = useContext(UserContext)
    const {values,onChange,onSubmit} =useForm( {
      email:"",
      password:""  
    },onUserLogin)
    return(
        <div className="row justify-content-center my-5 register-row">
            <div className="col-4 register-col border">
                
        <form onSubmit={onSubmit} className="register-form">
            <div className="form-heading">
                <h3>
                   Login form
                </h3>
            </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input name='email' value={values.email} onChange={onChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input name='password' value={values.password} onChange={onChange} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  
  <button type="submit" className="btn btn-primary">Login</button>
</form>

</div>
        </div>
    )
}