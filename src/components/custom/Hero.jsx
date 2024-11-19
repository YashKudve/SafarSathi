import React from 'react'
import { Button } from '../ui/button'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[50px] text-center mt-16'><span className="text-[#f56551]">Discover Your Next Adventure with AI: </span> Personalized Iternaries at Your Fingertips</h1>

      <p className="text-xl text-gray-500 text-center">Your personal trip planner and travel curator, creating custom itenaries, tailored to your interest and budget.</p>

      {/* <button className='background-color:black'>Get Started. Its free</button> */}

      <Button variant="outline" className="text-center">Get Started. Its free</Button>
    </div>
  )
}

export default Hero
