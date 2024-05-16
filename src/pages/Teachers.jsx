import React from 'react'
import CustomHeader from '../component/CustomHeader'
import Footer from '../component/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import TeacherSlider from '../component/TeacherSlider'

function Teachers() {
  return (
    <>
    <CustomHeader title={'Our Best Feaculty'} subTitle={'Data Guru - Guru SMP Negeri 1 Cibadak'} />
    <div className=' w-[70%] mx-auto mt-7 '>
        <div className=' h-[48px] lg:w-[400px] bg-gray-100 flex items-center  float-right'>
            <div className='ml-1'>
            <label htmlFor="search">
                <FontAwesomeIcon icon={faSearch} size='sm'/>
            </label>
            </div>  
            <div className='ml-3 h-full w-full'>
                <input id='search' type="text" className='bg-transparent h-full w-full focus:outline-none' placeholder='Search Teacher' />
            </div>
        </div>
    </div>
    <div className=' w-[70%] h-[2px] bg-[#DFDFDF] mx-auto mb-20 mt-28 '></div>
    <div className=' lg:w-[65.3%] md:w-[75%] max-[426px]:w-[70%] mx-auto '><TeacherSlider/></div>
    <Footer/>
    </>
  )
}

export default Teachers