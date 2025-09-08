import React from 'react'
import { Spiral } from 'ldrs/react'
import 'ldrs/react/Spiral.css'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      {/* <div className='animate-spin border-4 border-t-transparent w-10 h-10 scale-200 rounded-full'>
      </div> */}
      <Spiral
        size="40"
        speed="0.9"
        color="black" 
      />
    </div>
  )
}

export default Loading

