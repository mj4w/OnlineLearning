import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div>
        <NavBar/>
        <div className='flex m-auto justify-center items-center h-screen'>
          <div className='md:w-[25%] w-[80%]'>
            <h1 className='sub_text font-extrabold text-1xl my-3'>Sign up and start learning</h1>
            <div>
              <input className='sub_text border flex items-center border-1 border-black p-3 gap-2 w-[100%] text-1xl my-2' type='text' required placeholder='Full Name' />
            </div>
            <div>
              <input className='sub_text border flex items-center border-1 border-black p-3 gap-2 w-[100%] text-1xl my-2' type='email' required placeholder='Email' />
            </div>
            <div>
              <input className='sub_text border flex items-center border-1 border-black p-3 gap-2 w-[100%] text-1xl my-2' type='password' required placeholder='Password' />
            </div>
            <div className='p-3 w-full bg-[#0056d2] text-center'>
              <button className='text-[1.1rem] font-bold text-white'>Sign up</button>
            </div>
            <div className='p-3 w-full border text-center sub_text text-[11px]'>
              By signing up, you agree to our <a href className='font-semibold underline'>Terms of Use</a> and <a href className='font-semibold underline'>Privacy Policy</a>
            </div>
            <div className='p-3 w-full text-center'>
              Already have an account? <Link to='/sign-up' className='text-[1.1rem] font-semibold underline text-[#0056d2]'>Log in</Link>
            </div>
  
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default SignUp