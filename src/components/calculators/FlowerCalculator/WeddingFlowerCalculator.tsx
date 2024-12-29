import RecentCarousel from "@/components/LayoutComponents/RecentCarousel"
import ReusableHero from "@/components/reusables/reusablehero"
import { Calculators  } from "@/config/calculator"
import WeddingFlowerLogic from "./Logic"
import WeddingFlowerInfo from "./Info"
import WeddingFlowerFAQ from "./Faq"

const WeddingFlowerCalculator = () => {
    const calculator = Calculators.find((calculator) => calculator.id === 'wedding-flower-calculator')!

  return (
    <div className="space-y-16">
        <ReusableHero calculator={calculator}/>
        <WeddingFlowerLogic />
        <WeddingFlowerInfo />
        <WeddingFlowerFAQ />
        <RecentCarousel className="mt-16" calculators={Calculators}/>        
      
    </div>
  )
}

export default WeddingFlowerCalculator
