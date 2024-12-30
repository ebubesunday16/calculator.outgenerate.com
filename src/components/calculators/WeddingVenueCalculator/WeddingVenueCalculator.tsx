import RecentCarousel from "@/components/LayoutComponents/RecentCarousel"
import ReusableHero from "@/components/reusables/reusablehero"
import { Calculators } from "@/config/calculator"
import WeddingVenueLogic from "./Logic"
import WeddingVenueInfo from "./Info"
import WeddingVenueFaq from "./Faq"

const WeddingVenueCalculator = () => {
    const calculator = Calculators.find((calculator) => calculator.id === 'wedding-venue-cost')!

  return (
    <div className="space-y-16">
        <ReusableHero calculator={calculator}/>
        <WeddingVenueLogic />
        <WeddingVenueInfo />
        <WeddingVenueFaq />
        <RecentCarousel className="mt-16" calculators={Calculators}/>  
      
    </div>
  )
}

export default WeddingVenueCalculator
