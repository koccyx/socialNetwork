import React from "react";
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { login, setAuthUserData } from '../../redux/auth-reducer.js'
import { Navigate } from "react-router-dom";


function LoginForm({setAuthUserData, login, ...props}) {
  const { register, handleSubmit, formState: { errors }, } = useForm();

  const onSubmit = (data) => {
    setAuthUserData(data);
    login(data);
  };

  // debugger;
  
  if (props.isAuth) {
    return <Navigate to='/profile'/>
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input 
            {...register('email', { required: true })} placeholder="email"
            aria-invalid={errors.email ? "true" : "false"}  
          />
        </div>
        <div>
          <input {...register('password', { required: true })} placeholder="password"/>
        </div>
        <div>
          <input type="checkbox" {...register('rememberMe')}/> Remember me
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
  )
}
let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})

let ConnectedLogin = connect(mapStateToProps,{setAuthUserData, login})(LoginForm)

const Login = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <ConnectedLogin/>
    </div>
  )
} 

export default Login;