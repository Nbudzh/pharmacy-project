import './register.css'
import { useContext } from 'react'
import { useForm } from '../../Hooks/useForm'
import { UserContext } from '../../Contexts/AuthContext'
export function Register(){
  const {onRegisterUser} = useContext(UserContext)
  const{values,onChange,onSubmit}=useForm({
    email:"",
    password:"",
    rePassword:""
  },onRegisterUser)
    return(
        <div className="row justify-content-center my-5 register-row">
            <div className="col-4 register-col border">
                
        <form onSubmit={onSubmit} className="register-form">
            <div className="form-heading">
                <h3>
                    Register form
                </h3>
            </div>
  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
    <input value={values.email} name='email' onChange={onChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
    <input value={values.password} name='password' onChange={onChange} type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputPassword2" class="form-label">Repeat password</label>
    <input value={values.rePassword} name='rePassword' onChange={onChange} type="password" class="form-control" id="exampleInputPassword2"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Register</button>
</form>

</div>
        </div>
    )
}