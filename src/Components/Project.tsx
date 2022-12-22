import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {connect,useSelector} from 'react-redux'
import { useAppSelector } from '../HooksTypes/hooks'

// interface dprops{
//   name:string,
//   username:string,
//   phone:string
// }
// type dataTy ={
//   data:dprops
// }
// type Props = {
   
//   data:dataTy
// }

const Project = () => {

  return (
    <div className='h-max my-10'>
      <div className='[&>*]:mt-2'>
      <h1 className='text-3xl font-bold'>I know that <span className='text-ternaryColor text-3xl font-bold'>good Code </span>meant</h1>
     
      <h1 className='text-3xl font-bold'><span className='text-ternaryColor text-3xl font-bold'>Good business</span></h1>
      </div>
      {/* <h1 className='text-3xl mt-5'>My Projects</h1> */}
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='mt-20 '
    >
      {new Array(5).fill(null).map((i,k)=><SwiperSlide key={k+"resume"}><div className='flex ' >
        <div className='w-7/12'>
          <img alt='test'/>
        </div>
        <div className='  w-5/12 [&>*]:text-left flex flex-col'>
          <h3 className='text-secondaryColor text-2xl'>Prescrip</h3>
      <h5 className='text-ternaryColor text-sm font-semibold mb-3'> Healthcare</h5>
          <p >Prescrip is designed to enable you to print your prescriptions and maintain</p>
          <p >  patient records with absolute ease(No Typing/No Writing Required).</p>
         <h3 className='text-secondaryColor text-lg mt-3'>Key Features:</h3>
         <p>1. Extremely Simple and Focussed</p>
         <p>2. Video Consultation</p>
         <p>3. Online Appointment</p>
         <p>4. e-Prescription</p>
         <p>5. Online Payment</p>
         <h3 className='text-secondaryColor text-lg mt-3'>Technology used</h3>
         <p>React Native, Nodejs, mongoDb, AWS</p>
         <h3 className='text-secondaryColor text-lg mt-3'>Link</h3>
         <p>www.precrip.in</p>
        </div>
        </div></SwiperSlide>)}

    </Swiper>
      {/* <div className='flex flex-row overscroll-x-contain'>
      {["red","green","blue"].map(i=><div key={i.toString()} className={`flex flex-row h-64 w-full bg-orange-500`}>
<h1>hi</h1>
      </div>)}
      </div> */}
    </div>
  
  )
}

export default Project