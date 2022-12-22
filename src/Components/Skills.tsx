import React from 'react'

type Props = {}

const Skills = (props: Props) => {
  return (
    <div className='h-vh w-full py-20 mb-5'><h1 className='text-3xl font-semibold'>Skills & Experience</h1>
    <div className='flex my-16'>
        <div className='w-2/4 flex justify-end grid grid-rows-3  grid-flow-col-dense gap-x-3 gap-y-6'>
            {new Array(7).fill(null).map((i,k)=><div key={k.toString()} className="flex flex-col justify-center  items-center h-28 w-28 mx-8 rounded-full bg-[#f8f1ff]">
                <img src={require('../Images/img/js.png')} className="h-10 w-10 " />
                <p className='text-sm font-semibold mt-3'>30%</p>
            </div>)}
        </div>
        <div className='w-2/4 '>
        {new Array(3).fill(null).map((i,k)=> <div key={i+"re"} className='flex justify-center gap-x-6 mb-20'>
          
            <div className='flex gap-x-20'>
            <h2 className="text-secondaryColor text-sm font-semibold">2022</h2>
            <div className='flex flex-col items-start'>
            <h1 className='text-xl font-semibold'>Designation name</h1>
                <h1 className=' text-grayColor text-sm'>Company name</h1>
                </div>
        
            </div>
         </div>)}
        </div>
        <div>
      
        </div>
        </div></div>
  )
}

export default Skills