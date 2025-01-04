import RecentCarousel from "@/components/LayoutComponents/RecentCarousel"
import ReusableHero from "@/components/reusables/reusablehero"
import { Calculators } from "@/config/calculator"
import PythagoreanNumerologyLogic from "./Logic"
import PythagoreanNumerologyInfo from "./Info"
import PythagoreanNumerologyFaq from "./Faq"

const PythagoreanNumerologyCalculator = () => {
    const calculator = Calculators.find((calculator) => calculator.id === 'pythagorean-numerology')!

  return (
    <div className="space-y-16">
        <ReusableHero calculator={calculator}/>
        <PythagoreanNumerologyLogic />
        <PythagoreanNumerologyInfo />
        <PythagoreanNumerologyFaq />
 
        <RecentCarousel className="mt-16" calculators={Calculators}/>  
      
      
    </div>
  )
}

export default PythagoreanNumerologyCalculator
