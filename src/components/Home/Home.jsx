import React from 'react'
import './Home.css'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom';

const HomePage = () => {
 
  return (
    <div className='homePage'>
      <h1 className='homeH1'>Fun Science</h1>

      <form className='loginForm mt-5'>
        <img className='homeLogo' src={logo} alt='logo' />

        <h3 className='login-main'>LOGIN</h3>
        <div className='form-group'>
          <label className='mb-3'>Mobile Number</label>
          <input
            type='email'
            className='form-control'
            placeholder='Enter Mobile Number'
            value='(0534)-826-8732'
          />
        </div>
        <div className='form-group'>
          <label className='mt-3 mb-3'>Password</label>
          <input
            type='password'
            className='form-control mb-3'
            placeholder='Enter password'
            value="******"
          />
        </div>

        <div className='form-group'>
          <div className='custom-control custom-checkbox'>
            <input
              type='checkbox'
              className='custom-control-input'
              id='customCheck1'
            />
            <label className='custom-control-label' htmlFor='customCheck1'>
              Remember me
            </label>
          </div>
        </div>

        <Link  type='submit' className='homeButton btn btn-outline-light' to="/chapters">
          Sign in
        </Link>
        <p className='forgot-password text-right'>
        <a to='#' className="forgot-password "> Forgot password?</a>
          <p>Sign in using code</p>
        </p>
      </form>
    </div>
  )
}
export default HomePage
