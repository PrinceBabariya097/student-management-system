import React, { useRef } from 'react'
import TeachersData from './Datas/TeachersData.js'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';

function TeacherSlider() {

    const scrollRef = useRef(null)

    const handleScroll = (scrollOffset) => {
        scrollRef.current.scrollLeft += scrollOffset;
      };


    return (
        <>
            <div className='flex flex-col flex-wrap h-[1365px] overflow-scroll ' ref={scrollRef}>
                {
                    TeachersData.map((data, index) => (
                        <div key={data.id * 999} className=' h-[415px] w-[300px] shadow-lg lg:m-5'>
                            <div className=' w-[144px] h-[177px] my-7 flex m-auto'>
                                <img src={data.img} alt="Teachers Photo" />
                            </div>
                            <div className='pl-2'>
                                <p className='font-bold text-sm whitespace-break-spaces mb-1'>Name       : <span className='font-normal text-base'>{data.name}</span></p>
                                <p className='font-bold text-sm whitespace-break-spaces mb-1'>Nip           : <span className='font-normal text-base'>{data.Nip}</span></p>
                                <p className='font-bold text-sm whitespace-break-spaces'>Pelajaran : <span className='font-normal text-base'>{data.Pelajaran}</span></p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className=" mx-auto w-[100px] flex justify-between mt-8 mb-20 ">
                <button onClick={() => handleScroll(-310)} className='bg-slate-300 p-2 rounded-[100%]'><FontAwesomeIcon icon={faLessThan}/></button>
                <button onClick={() => handleScroll(310)} className='bg-slate-300 p-2 rounded-[100%]'><FontAwesomeIcon icon={faGreaterThan}/></button>
            </div>
        </>
    )
}

export default TeacherSlider