import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { FcGoogle } from 'react-icons/fc'
import { GrFacebook } from 'react-icons/gr'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <NavBar/>
        <div className='flex m-auto justify-center items-center h-screen'>
          <div className='md:w-[25%] w-[80%]'>
            <h1 className='sub_text font-extrabold text-1xl my-3'>Log in to your OL account</h1>
            <div className='sub_text  flex items-center border border-1 border-black p-3 gap-2  font-bold w-[100%] text-2xl'>
              <FcGoogle />
              <p className='text-left text-[1.1rem]'>Continue with Google</p>
            </div>
            <div className='sub_text  flex items-center border border-1 border-black p-3 gap-2  font-bold w-[100%] text-2xl my-2'>
              <GrFacebook className='text-[#0056d2] rounded-md'/>
              <p className='text-left text-[1.1rem]'>Continue with Facebook</p>
            </div>
            <div>
              <input className='sub_text border flex items-center border-1 border-black p-3 gap-2 w-[100%] text-1xl my-2' type='email' required placeholder='Email' />
            </div>
            <div>
              <input className='sub_text border flex items-center border-1 border-black p-3 gap-2 w-[100%] text-1xl my-2' type='password' required placeholder='Password' />
            </div>
            <div className='p-3 w-full bg-[#0056d2] text-center'>
              <button className='text-[1.1rem] font-bold text-white'>Login</button>
            </div>
            <div className='p-3 w-full border text-center'>
              or <a href className='text-[1.1rem] font-semibold underline text-[#0056d2]'>Forgot Password</a>
            </div>
            <div className='p-3 w-full text-center'>
              Don't have an account? <Link to='/sign-up' className='text-[1.1rem] font-semibold underline text-[#0056d2]'>Sign up</Link>
            </div>
  
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Login