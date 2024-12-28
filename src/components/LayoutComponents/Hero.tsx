import Link from "next/link"

import { MoveRight } from "lucide-react"

const Hero = ({className}: {className: string}) => {
  return (
    <div className={`
        ${className}
        flex
        flex-col
        items-center 
        space-y-9
        relative
        
        `
    }>  
        <div className='sm:w-72 sm:h-72 w-48 h-48 bg-[#C3B9E8]/40 rounded-full blur-3xl absolute right-0 -z-10'
        aria-hidden="true"/>
        <div className='sm:w-72 sm:h-72 w-48 h-48 bg-[#E8CBB9]/40 rounded-full blur-[80px] absolute left-0 -z-10'
        aria-hidden="true"/>
        <div className='sm:w-72 sm:h-72 w-48 h-48 bg-[#B9E8D5]/40 rounded-full blur-3xl absolute bottom-1/2 transform translate-y-1/2 -z-10'
        aria-hidden="true"/>
        <div className="flex flex-col items-center space-y-5">
            <p className="text-xs bg-[#FF6C2D]/10 text-[#FF6C2D] px-6 py-2 rounded-2xl font-extrabold " >BOOKMARK US!</p>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-center ">The Home of <span className="text-[#8665FF]">Calculators</span> & Generators</h1>
        </div>
        <p className="text-xs text-center max-w-[500px]">From calorie counters (BMI included) to Rizz generators, and every conversion metric in between—down to the last 0-degree precision, all powered by the best of algorithms.</p>

            
        <Link href={`/`}>
            
            <button className="hover:shadow-minimalistic border border-black bg-transparent text-sm px-10 py-2">
                <MoveRight className="inline-block pr-4"
                size={40} />   {` `} 
                 Create Your Account
            </button>
        </Link>

      
    </div>
  )
}

export default Hero
