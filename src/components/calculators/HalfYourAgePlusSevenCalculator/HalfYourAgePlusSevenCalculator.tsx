import RecentCarousel from '@/components/LayoutComponents/RecentCarousel'
import ReusableHero from '@/components/reusables/reusablehero'
import { Calculators } from '@/config/calculator'
import HalfAgePlusSevenInfo from './Info'
import HalfAgePlusSevenFaq from './Faq'
import HalfAgePlusSevenLogic from './Logic'

const HalfYourAgePlusSevenCalculator = () => {
    const calculator = Calculators.find((calculator) => calculator.id === 'half-seven')!

  return (
    <div className='space-y-16'>
        <ReusableHero calculator={calculator}/>
        <HalfAgePlusSevenLogic />
        <HalfAgePlusSevenInfo />
        <HalfAgePlusSevenFaq />
 
        <RecentCarousel className="mt-16" calculators={Calculators}/>  
      
    </div>
  )
}

export default HalfYourAgePlusSevenCalculator
