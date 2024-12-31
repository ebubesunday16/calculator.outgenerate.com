import RecentCarousel from '@/components/LayoutComponents/RecentCarousel'
import ReusableHero from '@/components/reusables/reusablehero'
import WeddingTentLogic from './Logic'
import { Calculators } from '@/config/calculator'
import WeddingTentInfo from './Info'
import WeddingTentFaq from './Faq'

const WeddingTentCalculator = () => {
    const calculator = Calculators.find((calculator) => calculator.id === 'wedding-tent-calculator')!


  return (
    <div className='space-y-16'>
        <ReusableHero calculator={calculator}/>
        <WeddingTentLogic />
        <WeddingTentInfo />
        <WeddingTentFaq />

        <RecentCarousel className="mt-16" calculators={Calculators}/>  
      
    </div>
  )
}

export default WeddingTentCalculator
