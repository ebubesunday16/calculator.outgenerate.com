import { Calculators } from "@/config/calculator"
import ReusableHero from "@/components/reusables/reusablehero"
import TravelFeeLogic from "./Logic"
import TravelCalculatorFAQ from "./Faq"
import RecentCarousel from "@/components/LayoutComponents/RecentCarousel"

    

const PhotographerTravelFee = () => {
    const calculator = Calculators.find((calculator) => calculator.id === 'photographer-travel-fee')


  return (
    <div>
        <ReusableHero calculator={calculator}/>
        <TravelFeeLogic />
        <TravelCalculatorFAQ />

        <RecentCarousel className="mt-16" calculators={Calculators}/>        
      
    </div>
  )
}

export default PhotographerTravelFee
