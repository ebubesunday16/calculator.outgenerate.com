import Link from 'next/link'
import React from 'react'
import { Fly, Illustration } from '../svgs'

const Aboutthem = () => {
  return (
    <div className='flex flex-col items-center space-y-6'>
        <p className="text-xs bg-[#FF6C2D]/10 text-[#f1662a] px-6 py-2 rounded-2xl font-extrabold z-40" >The why...</p>

        <div className='flex flex-col items-center space-y-6 relative '>
            <Fly className='absolute top-0 -right-0 transform translate-x-16 hidden sm:block'/>

            
            <h2 className='text-3xl font-bold'>OUTGENERATE had to come...</h2>
            <Illustration />
            <p className="text-xs text-center max-w-[500px]">We took the leap. We built a tool that covers all sorts of calculators as niched as <span className='underline'><Link href={'/wedding-cake-cost-calculator'}>Wedding Cake Cost Calculator</Link></span> and sometimes as complex as Calculus 2, while we never fail to make it interactive. We built OUTGENERATE.</p>
            <button className=" ">
            <Link className="text-xs border-black border rounded-[15px] px-4 py-[4px] hover:shadow-minimalistic-3" href='/about-us'>
                    
                    Read More...
                
            </Link>
            </button>
        </div>

    

  
</div>
  )
}

export default Aboutthem
