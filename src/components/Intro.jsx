import React from 'react'

function Intro() {
  return (
    <div className='flex mt-5 items-center gap-10 justify-between sm:flex-col md:flex-col'>
    <div className='flex flex-col sm:gap-5 xl:ml-32 sm:ml-0 lg:ml-0'>
        <h1 className='text-9xl sm:text-7xl md:text-8xl text-primary font-bold'>SHEY</h1>
        <h1 className='text-9xl sm:text-7xl md:text-8xl text-secondary font-bold'>HIRING</h1>
        <div className='flex gap-10 mt-5 items-center'>
            <h1 className='text-xl text-gray-600 ml-2'>Find A Reason To Progress</h1>
            <button className='bg-primary text-white px-8 py-3 rounded'>Get Started</button>
        </div>
    </div>
    <div className='xl:mr-32 sm:mr-0 lg:mr-0'>
        <img 
        src="https://img.freepik.com/free-vector/men-success-laptop-relieve-work-from-home-computer-great_10045-646.jpg?w=740&t=st=1659194063~exp=1659194663~hmac=61dbc92c4268555d68c1f6bdf586830a497437bb2daf313135d1404841919c21" 
        alt="" 
        className='h-[600px] sm:h-[400px] md:h-[500px]'
        />
    </div>
    </div>
  )
}

export default Intro