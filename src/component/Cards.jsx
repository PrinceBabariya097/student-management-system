import React from 'react'
import eclips2 from '/Ellipse 2.png'
import eclips3 from '/Ellipse 3.png'
import new1 from '/eclips1.png'

function Cards() {
  return (
    <div className='flex max-[426px]:flex-wrap justify-around mb-[100px] relative '>
      <div className='w-full h-[253px] bg-[#EAEAEA] absolute z-[-1] bottom-[-100px] '></div>
      <div className=' h-[330px] w-[330px] bg-gray-400 my-2'>
        <div className=' my-10 mx-5 '>
          <img src={new1} alt="" className=' h-[84.48px] w-[84.48px] rounded-full mb-2 ' />
          <p className='py-3 font-bold text-xl'>Fasilitas</p>
          <p className=' w-[285.5px] text-xs '>Lorem ipsum dolor sit amet adipcing aqua lorem ipsum.</p>
        </div>
      </div>
      <div className=' h-[330px] w-[330px] bg-gray-400 my-2 '>
        <div className=' my-10 mx-5 '>
          <img src={eclips2} alt="" />
          <p className='py-3 font-bold text-xl' >Lokasi</p>
          <p className=' w-[285.5px] text-xs '>Lorem ipsum dolor sit amet adipcing aqua lorem ipsum.</p>
        </div>
      </div>
      <div className=' md:hidden lg:block h-[330px] w-[330px] bg-gray-400 my-2 '>
        <div className=' my-10 mx-5 '>
          <img src={eclips3} alt="" />
          <p className='py-3 font-bold text-xl'>Sejarah</p>
          <p className=' w-[285.5px] text-xs '>Lorem ipsum dolor sit amet adipcing aqua lorem ipsum.</p>
        </div>
      </div>
    </div>
  )
}

export default Cards