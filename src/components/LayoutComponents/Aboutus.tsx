import { Arrow } from '../svgs'

const Aboutus = () => {


  return (
    <div className='flex flex-col items-center space-y-8'>
        <p className="text-xs bg-[#FF6C2D]/10 text-[#FF6C2D] px-6 py-2 rounded-2xl font-extrabold z-40" >About us</p>
        <h2 className='text-3xl font-bold'>Why OUTGENERATE?</h2>
        <Arrow />
        <p className="text-xs text-center max-w-[500px]">It all started with a simple question: "Why are online calculators so... boring?" Can’t there be a world where calculation tools are powerful, informative and pleasant to use?</p>
        

      
    </div>
  )
}

export default Aboutus
