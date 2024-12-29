import RecentCarousel from '@/components/LayoutComponents/RecentCarousel'
import ReusableHero from '@/components/reusables/reusablehero'
import { Calculators } from '@/config/calculator'
import WeddingDrinkLogic from './Logic'
import WeddingDrinkInfo from './Info'
import WeddingDrinkFaq from './Faq'

const WeddingDrinkCalculator = () => {
    const calculator = Calculators.find((calculator) => calculator.id === 'non-alcoholic-drink-calculator')!

  return (
    <div className='space-y-16'>
        <ReusableHero calculator={calculator}/>
        <WeddingDrinkLogic />
        <WeddingDrinkInfo />
        <WeddingDrinkFaq />


        <RecentCarousel className="mt-16" calculators={Calculators}/>   
      
    </div>
  )
}

export default WeddingDrinkCalculator

 