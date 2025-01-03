import RecentCarousel from '@/components/LayoutComponents/RecentCarousel'
import ReusableHero from '@/components/reusables/reusablehero'
import { Calculators } from '@/config/calculator'
import CoupleNumerologyLogic from './Logic'
import CoupleNumerologyInfo from './Info'
import CoupleNumerologyFaq from './Faq'

const CoupleNumerologyCalculator = () => {
    const calculator = Calculators.find((calculator) => calculator.id === 'couple-numerology')!


  return (
    <div className='space-y-16'>
        <ReusableHero calculator={calculator}/>
        <CoupleNumerologyLogic />
        <CoupleNumerologyInfo />
        <CoupleNumerologyFaq />

        <RecentCarousel className="mt-16" calculators={Calculators}/>        
    </div>
  )
}

export default CoupleNumerologyCalculator
