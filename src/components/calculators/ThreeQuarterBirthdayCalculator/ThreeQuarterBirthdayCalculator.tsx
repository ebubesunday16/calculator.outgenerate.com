import RecentCarousel from '@/components/LayoutComponents/RecentCarousel'
import ReusableHero from '@/components/reusables/reusablehero'
import { Calculators } from '@/config/calculator'
import ThreeQuarterBirthdayCalculatorLogic from './Logic'
import ThreeQuarterBirthdayCalculatorInfo from './Info'


const ThreeQuarterBirthdayCalculator = () => {
    const calculator = Calculators.find((calculator) => calculator.id === 'three-quarter-birthday')!

  return (
    <div className='space-y-16'>
      <ReusableHero calculator={calculator}/>
      <ThreeQuarterBirthdayCalculatorLogic />
      <ThreeQuarterBirthdayCalculatorInfo />

        <RecentCarousel className="mt-16" calculators={Calculators}/>  
    </div>
  )
}

export default ThreeQuarterBirthdayCalculator
