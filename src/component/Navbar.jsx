import React from 'react'
import logo from '/image 12.png'

function Navbar() {
  return (
    <nav className='flex w-full justify-between items-center py-3 bg-[#101524]'>
            <div className='relative left-[165px]'>
                <img src={logo} alt="" />
            </div>
            <div className='right-[165px] relative '>
            <ul class="flex flex-wrap justify-center list-none text-white text-[14px]">
                <li className='px-3'>Home</li>
                <li className='px-3'>Gallery</li>
                <li className='px-3'>Teachers</li>
                <li className='px-3'>About</li>
                <li className='px-3'>Contect Us</li>
                <li className='px-3'>Blog</li>
            </ul>
            </div>
        </nav>
  )
}

export default Navbar