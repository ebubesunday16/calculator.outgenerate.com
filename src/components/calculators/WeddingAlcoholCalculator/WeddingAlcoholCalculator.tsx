import { Calculators } from '@/config/calculator'
import RecentCarousel from '@/components/LayoutComponents/RecentCarousel'
import ReusableHero from '@/components/reusables/reusablehero'
import WeddingAlcoholLogic from './Logic'
import WeddingAlcoholInfo from './Info'
import WeddingAlcoholFaq from './Faq'

const WeddingAlcoholCalculator = () => {
    const calculator = Calculators.find((calculator) => calculator.id === 'wedding-alcohol-calculator')!

  return (
    <div className="space-y-16">
        <ReusableHero calculator={calculator}/>
        <WeddingAlcoholLogic />
        <WeddingAlcoholInfo />
        <WeddingAlcoholFaq />

        <RecentCarousel className="mt-16" calculators={Calculators}/>        
      
    </div>
  )
}

export default WeddingAlcoholCalculator
