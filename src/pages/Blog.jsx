import React from 'react'
import CustomHeader from '../component/CustomHeader'
import Footer from '../component/Footer'
import b1 from '/blog/b1.png'
import b2 from '/blog/b2.png'
import b3 from '/blog/b3.png'
import b4 from '/blog/b4.png'
import b5 from '/blog/b5.png'


function Blog() {
    return (
        <>
            <CustomHeader title={'Blog'} />
            <div className='mt-12'>
                <div className='mb-5 w-[80%] mx-auto '>
                    <h1 className='font-bold text-2xl'>Blogs</h1>
                </div>
                <div className='  flex w-[80%] mx-auto justify-between '>
                    <div className='w-[350px]'>
                        <img src={b1} alt="" className='rounded' />
                        <p className='font-bold text-lg'>Kegiatan Belajar Mengajar di Rumah 2020</p>
                        <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem <span className='text-blue-500 font-bold text-sm'>Read More...</span></p>
                    </div>
                    <div className='w-[350px]'>
                        <img src={b2} alt="" className='rounded' />
                        <p className='font-bold text-lg'>Kegiatan Belajar Mengajar di Rumah</p>
                        <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem <span className='text-blue-500 font-bold text-sm'>Read More...</span></p>
                    </div>
                    <div className='w-[350px]'>
                        <img src={b3} alt="" className='rounded' />
                        <p className='font-bold text-lg'>Belajar dirumah</p>
                        <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem <span className='text-blue-500 font-bold text-sm'>Read More...</span></p>
                    </div>
                </div>
            </div>
            <div className=' w-[80%] flex mx-auto my-24 '>
                <div>
                    <img src={b4} alt="" />
                </div>
                <div className='w-[472px] ml-16 my-auto'>
                    <p className='font-bold text-3xl '>Kegiatan Belajar Mengajar dirumah</p>
                    <p className='text-[#919FAE] py-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis lobortis lorem. Quisque mattis felis augue. Quisque sed elit eget ante faucibus blandit facilisis ac nibh.</p>
                    <button className='bg-blue-500 text-white h-10 w-[184px]'>Read More</button>
                </div>
            </div>
            <div className=''>
                <div className='  flex w-[80%] mx-auto justify-between h-[768px] flex-wrap '>
                    <div className='w-[350px]'>
                        <img src={b1} alt="" className='rounded' />
                        <p className='font-bold text-lg'>Kegiatan Belajar Mengajar di Rumah 2020</p>
                        <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem <span className='text-blue-500 font-bold text-sm'>Read More...</span></p>
                    </div>
                    <div className='w-[350px]'>
                        <img src={b2} alt="" className='rounded' />
                        <p className='font-bold text-lg'>Kegiatan Belajar Mengajar di Rumah</p>
                        <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem <span className='text-blue-500 font-bold text-sm'>Read More...</span></p>
                    </div>
                    <div className='w-[350px]'>
                        <img src={b3} alt="" className='rounded' />
                        <p className='font-bold text-lg'>Belajar dirumah</p>
                        <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem <span className='text-blue-500 font-bold text-sm'>Read More...</span></p>
                    </div>
                    <div className='w-[350px]'>
                        <img src={b4} alt="" className='rounded' />
                        <p className='font-bold text-lg'>Belajar dirumah</p>
                        <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem <span className='text-blue-500 font-bold text-sm'>Read More...</span></p>
                    </div>
                </div>
            </div>
            <div className='w-[80%] mx-auto mb-12'>
                <div className='mb-7'>
                    <h1 className='font-bold text-2xl'>Recent Post</h1>
                </div>
                <div className=' h-[84px] w-[600px] flex flex-wrap justify-between '>
                    <p className='border-solid border border-[#2BA7E2] rounded-[20px] text-[#919FAE]  h-[34px] px-2'>Belajar Sehari di Luar di Kelas SMPN 1 Cibadak</p>
                    <p className='border-solid border border-[#2BA7E2] rounded-[20px] text-[#919FAE]  h-[34px] px-2'>Kegiatan Belajar mengajar di rumah</p>
                    <p className='border-solid border border-[#2BA7E2] rounded-[20px] text-[#919FAE]  h-[34px] px-2'>Kegiatan Belajar Mengajar di Rumah 2020</p>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blog