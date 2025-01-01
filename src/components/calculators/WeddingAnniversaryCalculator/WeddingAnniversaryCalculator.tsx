import RecentCarousel from "@/components/LayoutComponents/RecentCarousel"
import ReusableHero from "@/components/reusables/reusablehero"
import { Calculators } from "@/config/calculator"
import WeddingAnniversaryLogic from "./Logic"
import WeddingAnniversaryInfo from "./Info"

const WeddingAnniversaryCalculator = () => {
    const calculator = Calculators.find((calculator) => calculator.id === 'wedding-anniversary')!

  return (
    <div className="space-y-16">
        <ReusableHero calculator={calculator}/>
        <WeddingAnniversaryLogic />
        <WeddingAnniversaryInfo />

        <RecentCarousel className="mt-16" calculators={Calculators}/>
    </div>
  )
}

export default WeddingAnniversaryCalculator
