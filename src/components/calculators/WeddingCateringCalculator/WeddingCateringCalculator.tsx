import RecentCarousel from "@/components/LayoutComponents/RecentCarousel"
import ReusableHero from "@/components/reusables/reusablehero"
import { Calculators } from "@/config/calculator"
import WeddingCateringLogic from "./Logic"
import WeddingCateringInfo from "./Info"
import WeddingAlcoholFaq from "../WeddingAlcoholCalculator/Faq"

const WeddingCateringCalculator = () => {
    const calculator = Calculators.find((calculator) => calculator.id === 'wedding-catering')!

  return (
    <div className="space-y-16">

        <ReusableHero calculator={calculator}/>
        <WeddingCateringLogic />
        <WeddingCateringInfo />
        <WeddingAlcoholFaq />
        <RecentCarousel className="mt-16" calculators={Calculators}/>        
    </div>
  )
}

export default WeddingCateringCalculator
