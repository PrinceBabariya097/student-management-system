import React from 'react'
import g1 from '/Mask Group (1).png'
import g2 from '/Mask Group (2).png'
import g3 from '/Mask Group (3).png'
import g4 from '/Mask Group.png'
import g5 from '/Rectangle 7.png'
import g6 from '/Rectangle 8.png'


function Gallery() {
  return (
    <div className='w-[70%]'>
      <div className='flex justify-between my-10'>
        <img src={g1} alt="Gallery Image" />
        <img src={g2} alt="Gallery Image" />
        <img src={g3} alt="Gallery Image" />
        </div>
        <div className='flex justify-between my-10'>
        <img src={g4} alt="Gallery Image" />
        <img src={g5} alt="Gallery Image" />
        <img src={g6} alt="Gallery Image" />
        </div>
        <div className='w-full flex justify-center mb-[200px]'>
          <button className='bg-blue-500 font-bold text-sm w-[184px] h-[50px] rounded text-white'>Lebih Lanjut</button>
        </div>
    </div>
  )
}

export default Gallery