import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Info, 
  DollarSign, 
  Calendar, 
  ClipboardCheck, 
  Search, 
  Clock, 
  AlertTriangle,
  HandHeart,
  Lightbulb,
  Building
} from 'lucide-react';

const WeddingVenueInfo = () => {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      {/* How It Works Section */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-700">
            <Info className="h-6 w-6" />
            How It Works
          </CardTitle>
          <CardDescription>Your step-by-step guide to finding and booking the perfect wedding venue</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-blue-50">
              <h3 className="font-semibold flex items-center gap-2 mb-2">
                <Search className="h-4 w-4" />
                1. Research Phase
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Determine your wedding style and vision</li>
                <li>Set your budget using our calculator</li>
                <li>Research venues in your preferred location</li>
                <li>Read reviews and look at past wedding photos</li>
                <li>Create a shortlist of potential venues</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-blue-50">
              <h3 className="font-semibold flex items-center gap-2 mb-2">
                <ClipboardCheck className="h-4 w-4" />
                2. Visit & Book
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Schedule venue tours (typically 3-5 venues)</li>
                <li>Prepare questions for venue coordinators</li>
                <li>Review contract terms carefully</li>
                <li>Put down deposit to secure your date</li>
                <li>Start planning your layout and design</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Understanding Costs Section */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <DollarSign className="h-6 w-6" />
            Understanding Venue Costs
          </CardTitle>
          <CardDescription>Breaking down what affects venue pricing and what's typically included</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg bg-green-50">
              <h3 className="font-semibold mb-2">Base Rental Fee Includes:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Designated ceremony space</li>
                <li>Reception area</li>
                <li>Basic furniture (tables, chairs)</li>
                <li>Parking facilities</li>
                <li>Basic utilities</li>
                <li>Standard cleaning</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-green-50">
              <h3 className="font-semibold mb-2">Common Additional Costs:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Security deposit</li>
                <li>Insurance requirements</li>
                <li>Extended hours fees</li>
                <li>Setup/breakdown time</li>
                <li>Premium furniture upgrades</li>
                <li>Additional staff</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-green-50">
              <h3 className="font-semibold mb-2">Price-Affecting Factors:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Season and day of week</li>
                <li>Guest count capacity</li>
                <li>Location and accessibility</li>
                <li>Included amenities</li>
                <li>Duration of rental</li>
                <li>Venue popularity</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timing & Seasonality Section */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-700">
            <Calendar className="h-6 w-6" />
            Timing & Seasonality
          </CardTitle>
          <CardDescription>Strategic timing can significantly impact your venue costs and availability</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold mb-3">Peak vs. Off-Peak Pricing:</h3>
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-medium">Peak Season (June-September)</p>
                  <p className="text-sm text-gray-600">Highest pricing, earliest bookings required (12-18 months ahead)</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-medium">Shoulder Season (April-May, October)</p>
                  <p className="text-sm text-gray-600">Moderate pricing, good weather potential (10-14 months ahead)</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-medium">Off-Peak (November-March)</p>
                  <p className="text-sm text-gray-600">Best pricing, more flexibility (8-12 months ahead)</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Day of Week Impact:</h3>
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-medium">Saturday</p>
                  <p className="text-sm text-gray-600">Premium pricing, highest demand</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-medium">Friday/Sunday</p>
                  <p className="text-sm text-gray-600">10-30% savings vs Saturday</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-medium">Monday-Thursday</p>
                  <p className="text-sm text-gray-600">30-50% savings vs Saturday</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tips & Considerations Section */}
      <Card className="border-l-4 border-l-amber-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-700">
            <Lightbulb className="h-6 w-6" />
            Expert Tips & Considerations
          </CardTitle>
          <CardDescription>Key insights to help you make the best venue decision</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <div className="p-4 bg-amber-50 rounded-lg">
                <h3 className="font-semibold flex items-center gap-2 mb-2">
                  <HandHeart className="h-4 w-4" />
                  Money-Saving Strategies
                </h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Book during off-peak seasons</li>
                  <li>Consider non-Saturday dates</li>
                  <li>Look for all-inclusive packages</li>
                  <li>Ask about military or other discounts</li>
                  <li>Book well in advance for better rates</li>
                </ul>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg">
                <h3 className="font-semibold flex items-center gap-2 mb-2">
                  <Building className="h-4 w-4" />
                  Venue Types Comparison
                </h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Hotels: Full service, higher cost</li>
                  <li>Barns: Rustic charm, weather dependent</li>
                  <li>Gardens: Beautiful scenery, seasonal risks</li>
                  <li>Banquet Halls: Practical, less unique</li>
                  <li>Historic Sites: Character, strict rules</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-amber-50 rounded-lg">
                <h3 className="font-semibold flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-4 w-4" />
                  Common Pitfalls to Avoid
                </h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Booking without reading full contract</li>
                  <li>Ignoring noise ordinances/time limits</li>
                  <li>Forgetting to ask about vendor restrictions</li>
                  <li>Not checking parking situation</li>
                  <li>Missing hidden fees or requirements</li>
                </ul>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg">
                <h3 className="font-semibold flex items-center gap-2 mb-2">
                  <Clock className="h-4 w-4" />
                  Timeline Recommendations
                </h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Book 12-18 months in advance</li>
                  <li>Schedule tours 14-16 months ahead</li>
                  <li>Sign contract 12-14 months before</li>
                  <li>Pay deposit upon signing</li>
                  <li>Final walk-through 1 month prior</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeddingVenueInfo;