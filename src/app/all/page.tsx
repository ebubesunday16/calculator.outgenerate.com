import TabbedCalculator from "@/components/LayoutComponents/TabbedCalculator"
import { Calculators } from "@/config/calculator"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Explore All Tools By Category | Outgenerate',
  description: 'From calorie counters (BMI included) to Calculus, and every conversion metric in between—down to the last 0-degree precision, all powered by the best of algorithms.',
}

const AllTools = () => {
  return (
    <div className="mt-16 space-y-16">
        <h1 className="text-3xl font-bold">Sort By Category:</h1>


    <TabbedCalculator calculators={Calculators} />

      
    </div>
  )
}

export default AllTools
