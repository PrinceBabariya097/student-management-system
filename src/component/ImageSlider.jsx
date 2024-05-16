import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '/img1.png'
import img2 from '/img2.png'
import img3 from '/img3.png'
import img4 from '/img4.png'
import img5 from '/img5.png'
import f1 from '/f1.jpg'
import f2 from '/f2.jpg'
import f3 from '/f3.jpg'
import f4 from '/f4.jpeg'
import f6 from '/f6.webp'
import f7 from '/f7.webp'
import { useEffect, useState } from "react";


function ImageSlider() {
  const [slides, setSlides] = useState(4)
 
  useEffect(() => {
    if (window.innerWidth <= 426) {
      setSlides(1)
    }else if(window.innerWidth <= 769){
      setSlides(2)
    }
    
  },[window.innerWidth])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1
  };
  return (
    <>
    
    <div className='max-[426px]:w-[70%] w-3/4 mx-auto '>
      <div className="content-center py-5 text-white">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="text-center">
            <img src={d.img} alt="" className=" w-[255px] h-[253px] mx-auto " />
            <p className='py-3'>{d.name}</p>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
    </>
  );
}

const data = [
  {
    name: `John Morgan`,
    img: img1,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Ellie Anderson`,
    img: img2,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Nia Adebayo`,
    img: img3,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Rigo Louie`,
    img: img4,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `lois`,
    img: f1,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `mini`,
    img: f2,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `lisa`,
    img: f3,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `jimni`,
    img: f4,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `james`,
    img: f6,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Max`,
    img: f7,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  
];

export default ImageSlider;