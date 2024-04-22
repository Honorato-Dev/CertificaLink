import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFlip, Autoplay } from 'swiper';
import "swiper/css";
import 'swiper/swiper-bundle.min.css';
import Image from 'next/image';



const Slider = ({slides}:any) => {

    
  return (
    <>
    
       <Swiper
         effect={'flip'}
         grabCursor={true}
         pagination={true}
         autoplay={true}
         navigation={true}
         modules={[EffectFlip, Pagination, Navigation,Autoplay]}
         className=" max-w-xl"
    >
      {slides.map((slide:any)=>(
        <SwiperSlide key={slide.image}>
          
          <Image src={slide.image} alt={slide.title} width={600} height={300} />
        </SwiperSlide>
      ))}
      
   
      
    </Swiper>
    </>
  )
}

export default Slider