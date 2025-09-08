import React from 'react'
import Home from './Home'

const Enhancer = () => {
  return (
    <div className=' flex flex-col items-center justify-center min-h-[100vh] py-8 px-4'>
      <Home/>
      <div className='text-lg text-gray-500 mt-4'>
        Powered By Tanmay
      </div>
    </div>
  )
}

export default Enhancer