import React from 'react'
import headerBackgroung from '/image 18.png'
import logo from '/image 12.png'
import './css/header.css'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className=' h-[528px] ' id='header' >
        {/* <img src={headerBackgroung} alt="" className='w-full absolute'/> */}
        <nav className='flex w-full justify-between pt-7'>
            <div className='relative md:left-2 lg:left-[165px]'>
                <img src={logo} alt="" />
            </div>
            <div className='md:right-2 lg:right-[165px] relative '>
            <ul class="flex flex-wrap justify-center list-none text-[#CECDCD] text-[14px]">
               <NavLink to='/' className={({isActive}) => `${isActive? `text-white` : ``}`}> <li className='px-3'>Home</li></NavLink>
               <NavLink to='/gallery' className={({isActive}) => `${isActive? `text-white` : ``}`}><li className='px-3'>Gallery</li></NavLink>
               <NavLink to='/teachers' className={({isActive}) => `${isActive? `text-white` : ``}`}><li className='px-3'>Teachers</li></NavLink>
               <NavLink to='/aboutus' className={({isActive}) => `${isActive? `text-white` : ``}`}><li className='px-3'>About</li></NavLink>
               <NavLink to='/contectus' className={({isActive}) => `${isActive? `text-white` : ``}`}><li className='px-3'>Contect Us</li></NavLink>
               <NavLink to='/blog' className={({isActive}) => `${isActive? `text-white` : ``}`}><li className='px-3'>Blog</li></NavLink>
            </ul>
            </div>
        </nav>
        <header className=' h-[250px] sm:w-[697px] top-[161px] md:left-2 lg:left-[165px] relative  '>
            <h4 className='text-white relative bottom-3'>MOTTO</h4>
            <h1 className='text-white text-2xl max-[426px]:text-lg '>
            SMP N 1 Cibadak (Cerdas Beretika) Ceria, Empati, Rasional, Damai, Aktif, Sabar, Bersih, Elok, Tulus, Iman, Konsiste, Amanah.
            </h1>
            <button className='bg-blue-500 py-1 px-5 top-7 relative rounded text-white'>Contact us</button>
        </header>
    </div>
  )
}

export default Header