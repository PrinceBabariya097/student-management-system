import React,{useRef} from 'react'
import galleryData from './Datas/GalleryData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';

function GallerySlider() {
    const scrollRef = useRef(null)

    const handleScroll = (scrollOffset) => {
        scrollRef.current.scrollLeft += scrollOffset;
      };
  return (
    <>
    <div className='flex flex-col flex-wrap h-[1365px] overflow-auto [transition:all_transform_0.3s_ease] ' ref={scrollRef}>
                {
                    galleryData.map((data, index) => (
                        <div key={data.id * 999} className=' h-[415px] w-[300px] m-5'>
                            <div className=' w-[275px] h-[325px] my-7 flex m-auto'>
                                <img src={data.imgSrc} alt="Teachers Photo" />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className=" mx-auto w-[100px] flex justify-between mt-8 mb-20 ">
                <button onClick={() => handleScroll(-330)}><FontAwesomeIcon icon={faBackward} size='2x '/></button>
                <button onClick={() => handleScroll(330)}><FontAwesomeIcon icon={faForward} size='2x'/></button>
            </div>
    </>
  )
}

export default GallerySlider