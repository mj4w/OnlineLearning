import React from 'react'
import logo from '../img/logo.png'
import { MdLanguage } from 'react-icons/md'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

function Footer() {
  return (
    <div className='sub_text'>
        <footer className="relative w-full h-64 bg-[#1C1D1F]">
            <div className='flex justify-between m-auto flex-wrap'>
                <div className='flex w-[70%] mx-4 my-2 p-4 gap-6 text-[15px] text-white '>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                    </ul>
                    <ul>
                        <li>Sitemap</li>
                        <li>Social Media</li>
                    </ul>
                </div>
             
                <div className='p-4 my-2 mx-4'>
                    <div className='p-2 px-5 flex border border-white bg-[#1C1D1F] items-center text-white'>
                        <MdLanguage />
                        <button className=''> English</button>
                    </div>
                    
                </div>

              
            </div>
            <div className='absolute bottom-0 left-0 w-full bg-[#1C1D1F]'>
                <div className='flex justify-between m-auto flex-wrap px-7 py-4'>
                    <div>
                        <img src={logo} width='91' height='34' />
                    </div>
                    <div className='flex items-center gap-1'>
                        <AiOutlineCopyrightCircle className='text-white' />
                        <p className='text-sm text-white'>2024 OnlineCourse Inc.</p>
                    </div> 
                </div>
            </div>


        </footer>
    </div>
  )
}

export default Footer