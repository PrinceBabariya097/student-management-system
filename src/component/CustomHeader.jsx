import React from 'react'
import './css/header.css'
import Navbar from './Navbar'

function CustomHeader({title, subTitle}) {
  return (
    <div className='h-[528px] ' id='header'>
        <Navbar/>
        <div className=' w-full h-full flex flex-col justify-center items-center  '>
            <p className='font-bold text-2xl md:w-[656px] md:h-[120px] text-wrap text-white text-center'>{title}</p>
            <p className='text-sm text-[#DFDFDF]'>{subTitle}</p>
        </div>
    </div>
  )
}

export default CustomHeader