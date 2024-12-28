import RecentCarousel from "@/components/LayoutComponents/RecentCarousel"
import ReusableHero from "@/components/reusables/reusablehero"
import { Calculators } from "@/config/calculator"
import WeddingRSVPLogic from "./Logic"
import RSVPInfo from "./Info"
import RSVPFaq from "./Faq"



const WeddingRSVPCalculator = () => {
  const calculator = Calculators.find((calculator) => calculator.id === 'wedding-rsvp-date')!

  return (
    <div>
      <ReusableHero calculator={calculator}/>
      <WeddingRSVPLogic />
      <RSVPInfo />
      <RSVPFaq />

      <RecentCarousel className="mt-16" calculators={Calculators}/>
      
      
    </div>
  )
}

export default WeddingRSVPCalculator
