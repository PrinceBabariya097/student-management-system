import React,{useRef} from 'react'
import galleryData from './Datas/GalleryData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';

function GallerySlider() {
    const scrollRef = useRef(null)


    const handleScroll = (scrollOffset) => {
        scrollRef.current.scrollLeft += scrollOffset;
      };
  return (
    <>
    <div className='flex flex-col flex-wrap h-[1365px] overflow-auto' ref={scrollRef}>
                {
                    galleryData.map((data, index) => (
                        <div key={data.id * 999} className=' h-[415px] w-[300px] lg:m-5'>
                            <div className=' w-[275px] h-[325px] my-7 flex m-auto'>
                                <img src={data.imgSrc} alt="Teachers Photo" />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className=" mx-auto w-[100px] flex justify-between mt-8 mb-20 ">
                <button onClick={() => handleScroll(-310)} className='bg-slate-300 p-2 rounded-[100%]'><FontAwesomeIcon icon={faLessThan} /></button>
                <button onClick={() => handleScroll(310)} className='bg-slate-300 p-2 rounded-[100%]'><FontAwesomeIcon icon={faGreaterThan} /></button>
            </div>
    </>
  )
}

export default GallerySlider