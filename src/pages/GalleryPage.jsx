import React from 'react'
import CustomHeader from '../component/CustomHeader'
import Footer from '../component/Footer'
import GallerySlider from '../component/GallerySlider'

function Gallery() {
  return (
    <>
    <CustomHeader title={'Gallery'}/>
    <div className=' lg:w-[65.3%] md:w-[75%] max-[426px]:w-[70%] mx-auto '>
      <GallerySlider/>
    </div>
    <Footer/>
    </>
  )
}

export default Gallery