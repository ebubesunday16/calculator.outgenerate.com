import { Calculators } from "@/config/calculator"
import ReusableHero from "../../reusables/reusablehero"
import ChasePointsLogic from "./Logic"
import ChasePointsFAQ from "./Faq"
import RecentCarousel from "@/components/LayoutComponents/RecentCarousel"
import ChasePointsMeta from "./Info"

const ChasePointsCalculator = () => {
  const calculator = Calculators.find((calculator) => calculator.id === 'chase-points')!

  return (
    <div>
      <ReusableHero calculator={calculator}/>
      <ChasePointsLogic/>
      <ChasePointsMeta />
      <ChasePointsFAQ />
      <RecentCarousel className="mt-16" calculators={Calculators}/>
      
    </div>
  )
}

export default ChasePointsCalculator
