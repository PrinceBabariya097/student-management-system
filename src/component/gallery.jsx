import React from 'react'
import g1 from '/Mask Group (1).png'
import g2 from '/Mask Group (2).png'
import g3 from '/Mask Group (3).png'
import g4 from '/Mask Group.png'
import g5 from '/Rectangle 7.png'
import g6 from '/Rectangle 8.png'


function Gallery() {
  return (
    <div className='lg:w-[70%] md:w-[98%]'>
      <div className='flex justify-around lg:h-[600px] md:h-[(280*6)] flex-wrap my-10'>
        <img src={g1} alt="Gallery Image" className=' lg:h-[280px] md:h-[250px] my-2 ' />
        <img src={g2} alt="Gallery Image" className=' lg:h-[280px] md:h-[250px] my-2 '/>
        <img src={g3} alt="Gallery Image" className=' lg:h-[280px] md:h-[250px] my-2 '/>
        <img src={g4} alt="Gallery Image" className=' lg:h-[280px] md:h-[250px] my-2 '/>
        <img src={g5} alt="Gallery Image" className=' lg:h-[280px] md:h-[250px] my-2 '/>
        <img src={g6} alt="Gallery Image" className=' lg:h-[280px] md:h-[250px] my-2 '/>
        </div>
        <div className='w-full flex justify-center mb-[200px]'>
          <button className='bg-blue-500 font-bold text-sm w-[184px] h-[50px] rounded text-white'>Lebih Lanjut</button>
        </div>
    </div>
  )
}

export default Gallery;