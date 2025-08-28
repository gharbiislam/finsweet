import React from 'react'
import { Link } from 'react-router-dom'
const Join = () => {
  return (
    
        <div className="flex justify-center ">
  <div className='text-center w-[414px] content-center' >
    <h2 className='text-3xl font-bold '>Join our team to be a part of our story</h2>
    <p className='text-gray-600 my-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    <button className='bg-[var(--color-secondry)] hover:bg-[var(--color-secondry2)] font-semibold px-8 py-3'>
        <Link to={`/contact`}  onClick={() => window.scrollTo(0, 0)}>Join Now</Link></button>
  </div>
</div>
  )
}

export default Join