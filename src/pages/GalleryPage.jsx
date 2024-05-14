import React from 'react'
import CustomHeader from '../component/CustomHeader'
import Footer from '../component/Footer'
import GallerySlider from '../component/GallerySlider'

function Gallery() {
  return (
    <>
    <CustomHeader title={'Gallery'}/>
    <div className=' w-[65.3%] mx-auto '>
      <GallerySlider/>
    </div>
    <Footer/>
    </>
  )
}

export default Gallery