import React,{ useState } from 'react'
import Logo from '../img/logo.png'
import { BsFillBookmarksFill } from 'react-icons/bs'
import { TbCategory2 } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import DropDownCategory from './DropDownCategory'


function NavBar() {
    const [isDropdownVisible, setDropwdownVisible] = useState(false);
    const handleMouseEnter = () => {
        setDropwdownVisible(true);
    };
    const handleMouseLeave = () => {
        setDropwdownVisible(false);
    };

    return (
        <div className='bg-white shadow-md sub_text'>
            <nav className='max-w-screen-xl flex flex-wrap items-center mx-auto justify-between gap-2 p-3'>
                <li className='list-none'>
                    <a href="/" className='text-sm'><img src={Logo} width='100' /></a>
                </li>
                <li className='list-none'>
                    <div onMouseEnter={handleMouseEnter} className='flex items-center gap-1'>
                        <TbCategory2 className='text-2xl' />
                            <button to='/bookmarks' className='text-sm'>
                                Category
                            </button>    

                    </div>
                    <div className='relative'>
                        <div className='absolute sub_text cursor-pointer' onMouseLeave={handleMouseLeave}>
                            {isDropdownVisible && <DropDownCategory/>}
                        </div>
                       
                    </div>

                </li>
                <li className='list-none'>
                    <div>   
                        <form>   
                            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-40 sm:w-56 md:w-64 lg:w-72 xl:w-80 px-4 py-2 p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500dark:border-gray-600" placeholder="Search Anything..." required />
                        
                            </div>
                        </form>
                    </div>
                </li>
                <li className='list-none'>
                    <div className='flex items-center gap-1'>
                        <BsFillBookmarksFill className='text-1xl'/>
                        <Link to='/bookmarks' className='text-sm'>
                            Bookmarks
                        </Link>    
                    </div>

                </li>
                <div className='flex gap-3'>
                    <li className='list-none'>
                        <Link to='/login' className='text-sm rounded-sm bg-[#0056d2] p-2 text-white'>Login</Link>
                    </li>
                    <li className='list-none'>
                        <Link to='/sign-up' className='text-sm'>Sign up</Link>
                    </li>
                </div>

            </nav>
        </div>
    )
}

export default NavBar