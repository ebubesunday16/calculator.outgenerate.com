import RecentCarousel from "@/components/LayoutComponents/RecentCarousel"
import ReusableHero from "@/components/reusables/reusablehero"
import { Calculators } from "@/config/calculator"
import WeddingPhotographyLogic from "./Logic"
import WeddingPhotographyInfo from "./Info"
import WeddingPhotographyFaq from "./Faq"

const WeddingPhotographyCalculator = () => {
    const calculator = Calculators.find((calculator) => calculator.id === 'wedding-photography-pricing')!


  return (
    <div className="space-y-16">
        <ReusableHero calculator={calculator}/>
        <WeddingPhotographyLogic />
        <WeddingPhotographyInfo />
        <WeddingPhotographyFaq />

        <RecentCarousel className="mt-16" calculators={Calculators}/>
      
    </div>
  )
}

export default WeddingPhotographyCalculator
