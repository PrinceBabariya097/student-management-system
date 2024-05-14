import React from 'react'
import headerBackgroung from '/image 18.png'
import logo from '/image 12.png'
import './css/header.css'

function Header() {
  return (
    <div className=' h-[528px] ' id='header' >
        {/* <img src={headerBackgroung} alt="" className='w-full absolute'/> */}
        <nav className='flex w-full justify-between pt-9'>
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
        <header className=' h-[250px] w-[697px] top-[161px] left-[165px] relative  '>
            <h4 className='text-white relative bottom-3'>MOTTO</h4>
            <h1 className='text-white text-2xl'>
            SMP N 1 Cibadak (Cerdas Beretika) Ceria, Empati, Rasional, Damai, Aktif, Sabar, Bersih, Elok, Tulus, Iman, Konsiste, Amanah.
            </h1>
            <button className='bg-blue-500 py-1 px-5 top-7 relative rounded text-white'>Contact us</button>
        </header>
    </div>
  )
}

export default Header