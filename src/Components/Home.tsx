import { connect,useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
//import { setDataOnStore } from '../ActionCreators/HomeActionCreators'
import { setDataOnStore } from '../ActionCreators/HomeActionCreators'
import { useAppDispatch } from '../HooksTypes/hooks'

type Props = {
  //setDataToStore:()=>any
}

const Home = ( props: Props ) => {
 const dispatch = useAppDispatch()
  // useEffect(()=>{
  //   dispatch(setDataToStore())
  // },[])

  const onBtClick =()=>{
dispatch(setDataOnStore())
  }
  return (
    <div className='flex h-screen w-full bg-primaryColor justify-center'>

      <div className='flex justify-center '>
      <div className='bg-[#b1b4d7] h-4 w-4 rounded-full absolute left-80 bottom-40  z-10' />
        <div className='Round absolute bottom-10 left-24 z-10' />
        <div className='relative top-40 left-20 '>


          <div className='flex bg-white h-32 w-64 rounded-xl drop-shadow-2xl items-center justify-evenly animate-wobble'>
            <img src={ require( '../Images/img/waving-hand.png' ) } className="h-16 w-auto" />
            <div onClick={onBtClick} className="">
              <h6 className='text-grayColor text-sm'>Hello, I am</h6>
              <h2 className='text-3xl text-black'>Ruban</h2>
            </div>
          </div>
          <div className=' [&>*]:text-black [&>*]:text-left  mt-14 bg-white h-16 w-48 p-4 rounded-xl animate-wobble'>
            <h6 className='text-sm font-secondary'>React Native Developer</h6>
            <h2 className='text-sm text-black font-secondary '>React Developer</h2>
          </div>
        </div>
        <div className='profileRound '>
          {/* <img className='h-3/4 w-auto' src={ require( '../Images/img/profile.png' ) } /> */}
          </div>
        <div>
          <div className='flex justify-center items-center drop-shadow-sm  bg-white h-24 w-24 rounded-full relative right-70 top-10  z-10 animate-fade'>
            <img src={ require( '../Images/img/react.png' ) } className="h-16 w-auto " />
          </div>
          <div className='flex justify-center items-center drop-shadow-sm  bg-white h-52 w-52 rounded-full relative left-20 top-10  z-10 animate-fade'>
            <img src={ require( '../Images/img/js.png' ) } className="h-24 w-auto " />
          </div>
          <div className='flex justify-center items-center drop-shadow-sm  bg-white h-20 w-20 rounded-full relative left-5 top-20  z-10 animate-fade'>
            <img src={ require( '../Images/img/nodejs.png' ) } className="h-16 w-auto " />
          </div>
        </div>
      </div>


    </div>
  )
}
// const mapDispatchToProps = dispatch=>{
//   return {
//     setDataToStore:()=>dispatch(setDataOnStore())
//   }
// }
export default Home