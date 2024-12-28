import type { Metadata } from 'next';
import Hero from '@/components/LayoutComponents/Hero';
import RecentCarousel from '@/components/LayoutComponents/RecentCarousel';
import Image from 'next/image';
import { Calculators } from '@/config/calculator';
import TabbedCalculators from '@/components/LayoutComponents/TabbedCalculator';
import Aboutus from '@/components/LayoutComponents/Aboutus';
import Aboutthem from '@/components/LayoutComponents/Aboutthem';

export const metadata: Metadata = {
  title: 'The Home of Calculators & Generators | Outgenerate',
  description: 'From calorie counters (BMI included) to Calculus, and every conversion metric in between—down to the last 0-degree precision, all powered by the best of algorithms.',
  verification: {
    google: 'yZM3MDKPQDYSjj07MBGzL4uhTD75VHgYTlTIeETOxGU',
  },
}
export default function Home() {
  return (
  <div className='space-y-32'>
    
    
    <Hero className='mt-16'/>
    <Aboutus />
    <RecentCarousel className='mt-16' calculators={Calculators}/>
    <Aboutthem />
    <TabbedCalculators calculators={Calculators} />
    

    
    


  </div>

  
  );
}
