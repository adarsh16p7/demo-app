import React from 'react';
import "./LogIn.css";
import login_logo from "./../assests/login_image.jpg"
import { useNavigate } from 'react-router-dom';


const LogIn = () => {

  const navigate = useNavigate();
  
  const handleLogin = () =>{
    navigate("/home");
  }

  return (
  <div className='container'>
    <div className='container-1'>
      <div>
        <img src={login_logo} alt='Hello' className='image_login'/>
      </div>
      <div className="LogIn">
        Log In
      </div>
      <div className="input_fields">
        <form className='form_values'>
          <label>
            <input type="email"  placeholder='Email' className='input_values'/>
          </label>
          <label>
            <input type="password"  placeholder='Password' className='input_values'/>
          </label>
        </form>
        <div className="reset_password">
          <a>Forgot Password?</a>
        </div>
        <button className="form_button" onClick={handleLogin}>Log In</button>
        <div className="reset_password">
          <a>Sign Up</a>
        </div>
      </div>
    </div>
  </div>  
  )
}

export default LogIn;