import { Calculators } from "@/config/calculator"
import ReusableHero from "@/components/reusables/reusablehero"
import RecentCarousel from "@/components/LayoutComponents/RecentCarousel"
import FengShuiLogic from "./Logic"
import FengShuiInfo from "./Info"
import FengShuiFaq from "./Faq"


const FengShouiCalculator = () => {
  const calculator = Calculators.find((calculator) => calculator.id === 'feng-shui-wedding')!

  return (
    <div>
      <ReusableHero calculator={calculator}/>
      <FengShuiLogic />
      <FengShuiInfo />
      <FengShuiFaq />


      <RecentCarousel className="mt-16" calculators={Calculators}/>


      
    </div>
  )
}

export default FengShouiCalculator
