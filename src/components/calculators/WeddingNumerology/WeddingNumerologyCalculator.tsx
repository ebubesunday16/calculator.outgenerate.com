import ReusableHero from "@/components/reusables/reusablehero"
import { Calculators } from "@/config/calculator"
import WeddingNumerologyLogic from "./Logic"
import NumerologyInfo from "./Info"
import NumerologyFAQ from "./Faq"
import RecentCarousel from "@/components/LayoutComponents/RecentCarousel"


const WeddingNumerologyCalculator = () => {
    const calculator = Calculators.find((calculator) => calculator.id === 'wedding-numerology')!

  return (
    <div className="space-y-16">
        <ReusableHero calculator={calculator}/>
        <WeddingNumerologyLogic />
        <NumerologyInfo />
        <NumerologyFAQ />
        <RecentCarousel className="mt-16" calculators={Calculators}/>        



        
      
    </div>
  )
}

export default WeddingNumerologyCalculator
