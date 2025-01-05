import RecentCarousel from "@/components/LayoutComponents/RecentCarousel"
import ReusableHero from "@/components/reusables/reusablehero"
import { Calculators } from "@/config/calculator"
import AcceptableAgeGapLogic from "./Logic"
import AcceptableAgeGapInfo from "./Info"
import AcceptableAgeGapFaq from "./Faq"

const AcceptableAgeGapCalculator = () => {
    const calculator = Calculators.find((calculator) => calculator.id === 'acceptable-age-gap-calculator')!

  return (
    <div className="space-y-16">
        <ReusableHero calculator={calculator}/>
        <AcceptableAgeGapLogic />
        <AcceptableAgeGapInfo />
        <AcceptableAgeGapFaq />

        <RecentCarousel className="mt-16" calculators={Calculators}/> 
      
    </div>
  )
}

export default AcceptableAgeGapCalculator
