import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import slide1 from "./images/men.jpg";
import slide2 from "./images/women.jpg";
import slide3 from "./images/electronics.jpg";
import slide4 from "./images/jewellery.jpg";


const fadeImages  = [
    {
      src: slide1,
      caption: "Men's Fashion"
    },
    {
      src: slide2,
      caption: "Women's Fashion"
    },
    {
      src: slide3,
      caption: 'Electronics'
    },
    {
        src: slide4,
        caption: 'Jewellery'
    },
   
  ];

function SlideShow(props) {
 
  

  return (
    <div className="slide-container mt-24 relative -z-10 h-fit">
      <Fade duration={2000} arrows={false} >
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container rounded-full">

              <h1 className=' mx-4 '>
                <img src={fadeImage.src} alt="loading" className=" h-44 sm:h-72 lg:h-screen  min-w-full rounded-lg " />
              </h1>

              <h1 className=' mx-10 '>
              <img src={fadeImage.src} alt="loading" className="hidden  h-44 sm:h-72 lg:h-96  min-w-full rounded-3xl" style={{height:430}}/>
              </h1>
            <div className="flex justify-center">
              <h1 className={`text-center mt-4 font-semibold text-2xl lg:text-3xl border-b-4 border-orange-400  ${props.mode==='dark'?"text-white":"text-black"}`}>{fadeImage.caption}</h1>
              </div>
            </div>
            
          </div>
        ))}
      </Fade>
    </div>
    
  )
}

export default SlideShow