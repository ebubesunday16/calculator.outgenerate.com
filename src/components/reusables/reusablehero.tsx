
import { CalculatorConfig } from "@/types"

const ReusableHero = ({className, calculator}:{className: string, calculator: CalculatorConfig}) => {
  return (
    <div className={`
    ${className}
    flex
    flex-col
    items-center 
    space-y-9
    relative
    mb-16
    `
}>  
    <div className='sm:w-72 sm:h-72 w-48 h-48 bg-[#C3B9E8]/40 rounded-full blur-3xl absolute right-0'/>
    <div className='sm:w-72 sm:h-72 w-48 h-48 bg-[#E8CBB9]/40 rounded-full blur-[80px] absolute left-0'/>
    <div className='sm:w-72 sm:h-72 w-48 h-48 bg-[#B9E8D5]/40 rounded-full blur-3xl absolute bottom-1/2 transform translate-y-1/2'/>
    <div className="flex flex-col items-center space-y-5">
        <p className="text-xs bg-[#FF6C2D]/10 text-[#FF6C2D] px-6 py-2 rounded-2xl font-extrabold z-40" >BOOKMARK US!</p>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center z-40">{calculator.title}</h1>
    </div>
    <p className="text-xs text-center max-w-[500px]">{calculator.description}</p>

        


  
</div>
  )

}

export default ReusableHero
