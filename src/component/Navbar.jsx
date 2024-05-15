import React from 'react'
import logo from '/image 12.png'
import { Link,NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex w-full justify-between items-center py-3 bg-[#101524]'>
            <div className='relative left-[165px]'>
                <img src={logo} alt="" />
            </div>
            <div className='right-[165px] relative '>
            <ul class="flex flex-wrap justify-center list-none text-[#CECDCD] text-[14px]">
            <NavLink to='/' className={({isActive}) => `${isActive? `text-white` : ``}`}><li className='px-3'>Home</li></NavLink>
            <NavLink to='/gallery' className={({isActive}) => `${isActive? `text-white` : ``}`}><li className='px-3'>Gallery</li></NavLink>
            <NavLink to='/teachers' className={({isActive}) => `${isActive? `text-white` : ``}`}><li className='px-3'>Teachers</li></NavLink>
            <NavLink to='/aboutus' className={({isActive}) => `${isActive? `text-white` : ``}`}><li className='px-3'>About</li></NavLink>
            <NavLink to='/contectus' className={({isActive}) => `${isActive? `text-white` : ``}`}><li className='px-3'>Contect Us</li></NavLink>
            <NavLink to='/blog' className={({isActive}) => `${isActive? `text-white` : ``}`}><li className='px-3'>Blog</li></NavLink>
            </ul>
            </div>
        </nav>
  )
}

export default Navbar