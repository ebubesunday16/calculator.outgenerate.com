import RecentCarousel from '@/components/LayoutComponents/RecentCarousel'
import ReusableHero from '@/components/reusables/reusablehero'
import { Calculators } from '@/config/calculator'
import ChaldeanCalculatorLogic from './Logic'
import ChaldeanNumerologyInfo from './Info'
import ChaldeanNumerologyFaq from './Faq'

const ChaldeanNumerologyCalculator = () => {
    const calculator = Calculators.find((calculator) => calculator.id === 'chaldean-numerology')!

  return (
    <div className='space-y-16'>

        <ReusableHero calculator={calculator}/>
        <ChaldeanCalculatorLogic />
        <ChaldeanNumerologyInfo />
        <ChaldeanNumerologyFaq />
 
        <RecentCarousel className="mt-16" calculators={Calculators}/>  
      
    </div>
  )
}

export default ChaldeanNumerologyCalculator
