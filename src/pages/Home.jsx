import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import videoImage from '/Image Video.png'
import ImageSlider from '../component/ImageSlider'
import Cards from '../component/Cards'
import Gallery from '../component/gallery'


function Home() {


  return (
    <>
      <Header />
      <div className='flex max-[426px]:flex-col my-20 mx-auto  w-fit '>
        <div className='sm:mr-14 max-[426px]:mx-auto'>
          <img src={videoImage} className=' h-[325.71px] w-[400px] ' alt="" />
        </div>
        <div className='flex flex-col justify-around w-full'>
          <p className='font-bold md:text-lg lg:text-3xl w-[397px] my-3'>Sambutan Kepala Sekolah SMP Negeri 1 Cibadak</p>
          <p className='text-sm lg:w-[585px] md:w-fit text-wrap my-3'>Puji dan syukur mari kita panjatkan kehadirat Allah SWT. Yang senantiasa dengan sifat kasih dan sayangnya banyak memberikan nikmat ...</p>
          <button className='bg-[#0193DC] rounded py-2 w-[184px]'>Lebih Lanjut</button>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <p className='font-bold text-2xl mb-3'>Blogs</p>
      </div>
      <div>
        <Cards />
      </div>
      <div className='bg-black flex flex-col h-[549px]'>
        <div className="text-center py-10 ">
          <h1 className="text-white font-bold text-2xl">Our Best Facultys</h1>
        </div>
        <ImageSlider />
      </div>
      <div className='w-full px-auto'>
        <div className='flex justify-center flex-col items-center'>
        <p className='font-bold text-2xl pt-10 w-[70%]'>Gallery</p>
        <Gallery/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home