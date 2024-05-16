import React from 'react'
import logo from '/image 12.png'
import { Link,NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex w-full justify-between items-center py-3  bg-[#101524]'>
            <div className='lg:ml-[165px] max-[426px]:hidden'>
                <img src={logo} alt="" />
            </div>
            <div className='lg:mr-[165px] max-[321px]:mx-auto '>
            <ul class="flex flex-wrap  list-none text-[#CECDCD] text-[14px] max-[321px]:text-xs">
            <NavLink to='/' className={({isActive}) => `${isActive? `text-white` : ``}`}><li className='px-3 max-[321px]:px-1'>Home</li></NavLink>
            <NavLink to='/gallery' className={({isActive}) => `${isActive? `text-white` : ``}`}><li className='px-3 max-[321px]:px-1'>Gallery</li></NavLink>
            <NavLink to='/teachers' className={({isActive}) => `${isActive? `text-white` : ``}`}><li className='px-3 max-[321px]:px-1'>Teachers</li></NavLink>
            <NavLink to='/aboutus' className={({isActive}) => `${isActive? `text-white` : ``}`}><li className='px-3 max-[321px]:px-1'>About</li></NavLink>
            <NavLink to='/contectus' className={({isActive}) => `${isActive? `text-white` : ``}`}><li className='px-3 max-[321px]:px-1'>Contect Us</li></NavLink>
            <NavLink to='/blog' className={({isActive}) => `${isActive? `text-white` : ``}`}><li className='px-3 max-[321px]:px-1'>Blog</li></NavLink>
            </ul>
            </div>
        </nav>
  )
}

export default Navbar