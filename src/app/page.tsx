

import Hero from '@/components/LayoutComponents/Hero';
import RecentCarousel from '@/components/LayoutComponents/RecentCarousel';
import Image from 'next/image';
import { Calculators } from '@/config/calculator';
import TabbedCalculators from '@/components/LayoutComponents/TabbedCalculator';
import Aboutus from '@/components/LayoutComponents/Aboutus';
import Aboutthem from '@/components/LayoutComponents/Aboutthem';


export default function Home() {
  return (
  <div className='space-y-32'>
    
    
    <Hero className='mt-16 z-50'/>
    <Aboutus />
    <RecentCarousel className='mt-16 z-50' calculators={Calculators}/>
    <Aboutthem />
    <TabbedCalculators calculators={Calculators} />
    

    
    


  </div>

  
  );
}
