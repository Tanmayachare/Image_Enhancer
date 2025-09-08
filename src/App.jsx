import {React, useRef} from 'react'
import Enhancer from './components/Enhancer'
import { motion, useScroll, useTransform } from "motion/react"
import './index.css'

const App = () => {

  const containerRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  // const scale = useTransform(scrollYProgress, [0, 0.5], [0.65, 1.35]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.2, 0.95]);
  // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className='bg1'>
      <marquee onstart className='bg-blue-950 text-zinc-100 font-semibold pt-1 pb-1 text-[20px]'>⚠️ The image enhancement feature is subject to an overall API usage limit. Service may be temporarily unavailable if the limit is reached.</marquee>
      <div className=' pt-15 h-40 w-full flex flex-col justify-center items-center overflow-hidden'>
        <div className='text-center z-20'>
          <h1 className='text-5xl font-bold text-white mb-4'>Ai Image Enhancer</h1>
          <p className='text-lg text-zinc-300'>Upload your Image and let Ai enhance</p>
        </div>
      </div>

      <div className='bg2'>
        <section ref={containerRef} className='relative h-[115vh]'>
          <motion.div style={{scale}} className='w-full overflow-hidden z-10 rounded-md shadow-black shadow-2xl'>
            <video autoPlay muted loop className='h-[40%] w-full object-cover'>
              <source src="background.mp4" />
            </video>
          </motion.div>
        </section>
        <Enhancer /> 
      </div>
    </div>
  )
}
export default App
// hover:scale-101 transition delay-150