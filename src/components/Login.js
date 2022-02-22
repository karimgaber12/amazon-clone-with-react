/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './login.css'
import {Link,useNavigate} from 'react-router-dom'
import {auth} from './firebase'
function Login(){
  const navigate = useNavigate() // like navigate by url in angular router
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  
  // login with user using firebase
  const login = e=>{
    e.preventDefault()
    auth.signInWithEmailAndPassword(email,password)
    .then(auth=>{
      navigate('/')
    }).catch(error=>alert(error.message))
  }
  // register with new user using firebase
  const register = e =>{
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
      if (auth) {
        navigate('/')
      }
    }).catch(error=>alert(error.message))
  }
  return (
    <div className='Login'>
        <Link to="/">
          <img className='login_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG1.png' alt='amazon logo'></img>
        </Link>               
        <div className='login_container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={(e) =>{ setEmail(e.target.value)}}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={(e) => {setPassword(e.target.value)}}/>

                <button className='login_signInButton' onClick={login}>Sign In</button>
            </form>

            <p>
                By signing-in you agree to the AMAZON FAKE CLONE conditions
                of Use & Sale. Please see our Privacy Notice, our Cookies
                Notice and our Interest-Based Ads Notice.
            </p>
            <button className='login_registerButton' onClick={register}>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login
