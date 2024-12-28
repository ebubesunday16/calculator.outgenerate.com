import TabbedCalculator from "@/components/LayoutComponents/TabbedCalculator"
import { Calculators } from "@/config/calculator"

const AllTools = () => {
  return (
    <div className="mt-16 space-y-16">
        <h1 className="text-3xl font-bold">Sort By Category:</h1>


    <TabbedCalculator calculators={Calculators} />

      
    </div>
  )
}

export default AllTools
