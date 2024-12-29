import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Info,
  DollarSign,
  Calendar,
  Flower2,
  ListChecks,
  TrendingUp,
  Leaf,
  Calculator
} from 'lucide-react';

const WeddingFlowerInfo = () => {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-10">
      {/* How It Works Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-500" />
            How the Calculator Works
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Our wedding flower cost calculator uses real market data and industry standards to provide accurate estimates for your floral budget. Here's how it determines costs:</p>
          
          <div className="space-y-2 pl-4">
            <p>1. <strong>Base Pricing:</strong> Starts with current market rates for different floral elements</p>
            <p>2. <strong>Seasonal Adjustments:</strong> Applies multipliers based on your chosen season</p>
            <p>3. <strong>Style Considerations:</strong> Factors in your preferred style from minimal to luxurious</p>
            <p>4. <strong>Quantity Calculations:</strong> Uses guest count and venue size to determine arrangement needs</p>
            <p>5. <strong>Budget Analysis:</strong> Compares total costs against industry recommendations</p>
          </div>
        </CardContent>
      </Card>

      {/* Cost Factors Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-500" />
            Understanding Cost Factors
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Seasonal Impact</h3>
              <p>Flower costs vary significantly by season:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Spring (Peak): 20% premium due to high demand and popular blooms</li>
                <li>Summer: 10% premium with good availability</li>
                <li>Fall: Standard pricing with autumn varieties</li>
                <li>Winter: 10% discount but limited flower choices</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Style Levels</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Minimal:</strong> Emphasizes greenery, basic blooms, simpler designs</li>
                <li><strong>Moderate:</strong> Balance of premium and standard flowers</li>
                <li><strong>Luxurious:</strong> Premium blooms, complex designs, rare varieties</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Venue Considerations</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Small Venues:</strong> Basic installation needs, focused decoration</li>
                <li><strong>Medium Venues:</strong> Standard installation, multiple focal points</li>
                <li><strong>Large Venues:</strong> Complex installation, multiple areas to decorate</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Planning Timeline Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-purple-500" />
            Planning Timeline
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold">9-12 Months Before:</h3>
              <ul className="list-disc pl-6">
                <li>Research and choose your florist</li>
                <li>Determine overall flower budget</li>
                <li>Begin creating inspiration boards</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold">6-9 Months Before:</h3>
              <ul className="list-disc pl-6">
                <li>Book your florist</li>
                <li>Discuss seasonal availability</li>
                <li>Initial design consultation</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">3-6 Months Before:</h3>
              <ul className="list-disc pl-6">
                <li>Finalize flower choices</li>
                <li>Confirm ceremony and reception designs</li>
                <li>Review and adjust budget if needed</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">1-2 Months Before:</h3>
              <ul className="list-disc pl-6">
                <li>Final design meeting</li>
                <li>Confirm delivery timeline</li>
                <li>Review installation details</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Money-Saving Tips Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-red-500" />
            Money-Saving Tips
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <p className="font-semibold">Strategic ways to optimize your flower budget:</p>
            
            <div>
              <h3 className="font-semibold">Smart Scheduling</h3>
              <ul className="list-disc pl-6">
                <li>Choose off-peak seasons for better pricing</li>
                <li>Consider a Sunday or Friday wedding</li>
                <li>Book early to lock in current prices</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Design Strategies</h3>
              <ul className="list-disc pl-6">
                <li>Use more greenery to reduce flower costs</li>
                <li>Focus on statement pieces in key areas</li>
                <li>Repurpose ceremony flowers at reception</li>
                <li>Choose locally grown, seasonal flowers</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Smart Substitutions</h3>
              <ul className="list-disc pl-6">
                <li>Mix premium and standard blooms</li>
                <li>Use similar-looking, lower-cost alternatives</li>
                <li>Incorporate non-floral elements</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes to Avoid */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ListChecks className="w-5 h-5 text-yellow-500" />
            Common Mistakes to Avoid
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold">Budgeting Mistakes</h3>
              <ul className="list-disc pl-6">
                <li>Underestimating installation and delivery costs</li>
                <li>Forgetting to account for service fees and taxes</li>
                <li>Not including a buffer for last-minute changes</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Planning Mistakes</h3>
              <ul className="list-disc pl-6">
                <li>Choosing out-of-season flowers</li>
                <li>Not considering venue restrictions</li>
                <li>Waiting too long to book a florist</li>
                <li>Ignoring weather considerations</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Design Mistakes</h3>
              <ul className="list-disc pl-6">
                <li>Overlooking the venue's existing decor</li>
                <li>Not considering flower longevity</li>
                <li>Choosing fragile flowers for outdoor events</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Calculator Usage Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-indigo-500" />
            Making the Most of the Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>To get the most accurate estimates from our calculator:</p>
          
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold">Before Using</h3>
              <ul className="list-disc pl-6">
                <li>Have your total wedding budget determined</li>
                <li>Know your approximate guest count</li>
                <li>Have a general style direction in mind</li>
                <li>Research your venue's requirements</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">While Using</h3>
              <ul className="list-disc pl-6">
                <li>Experiment with different style options</li>
                <li>Adjust greenery ratios to see cost impacts</li>
                <li>Compare seasonal differences</li>
                <li>Pay attention to budget percentage warnings</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">After Calculations</h3>
              <ul className="list-disc pl-6">
                <li>Save different scenarios for comparison</li>
                <li>Use results as a starting point with florists</li>
                <li>Consider suggested adjustments if over budget</li>
                <li>Review money-saving tips for optimization</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeddingFlowerInfo;