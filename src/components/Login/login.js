import React, { useState } from 'react'
import Google from '../../img/google.png';
import Github from '../../img/github.png'
import Facebook from '../../img/facebook.png'
import './login.css'
const Login = () => {
  const [username,setusername] = useState("")
  const [password,setpassword] = useState("")
  const google = () =>{
    window.open("http://localhost:5000/auth/google","_self")
  }
  const github = () =>{
    window.open("http://localhost:5000/auth/github","_self")
  }
  return (
    <div className='login-container'>
      <div className='wrapper'>
      <h2 className='login-title'>Choose Login Method</h2>
      <div className='sub-wrapper'>
        <div className='left-wrapper'>
          <div className='social-media-container Google' onClick={google}>
            <img src={Google} alt="google" className='image-icon'></img>
            Google
          </div>
          <div className='social-media-container Facebook'>
            <img src={Facebook} alt="facebook" className='image-icon'></img>
            Facebook
          </div>
          <div className='social-media-container Github' onClick={github}>
            <img src={Github} alt="Github" className='image-icon'></img>
            Github
          </div>
        </div>
        <div className="center">
           <div className='line'/>
          <div className="or">OR</div>
          <div className='line'/>
        </div>
        <div className='form-container'>
          <input type="text" value={username} onChange = {(event)=>setusername(event.target.value)} placeholder='UserName'/>
          <input type="password" onChange = {(event)=>setpassword(event.target.value)} value = {password} placeholder='Password'/>
          <button type='submit' className='submit-button'>Submit</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login

