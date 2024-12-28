import RecentCarousel from "@/components/LayoutComponents/RecentCarousel"
import ReusableHero from "@/components/reusables/reusablehero"
import { Calculators } from "@/config/calculator"
import CakeFaq from "./Faq"
import WeddingCakeLogic from "./Logic"
import CakeInfo from "./Info"


const WeddingCakeCalculator = () => {
    const calculator = Calculators.find((calculator) => calculator.id === 'wedding-cake-cost')


  return (
    <div>
      <ReusableHero calculator={calculator}/>
      <div className="space-y-16">
        <WeddingCakeLogic />
        <CakeInfo />
        <CakeFaq />

      </div>
      <RecentCarousel className="mt-16" calculators={Calculators}/>


      
    </div>
  )
}

export default WeddingCakeCalculator
