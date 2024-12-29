import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Calculator, 
  Clock, 
  Calendar,
  DollarSign,
  ClipboardList,
  GlassWater,
  Sparkles,
  BookOpen
} from 'lucide-react';

const WeddingDrinkInfo = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* How It Works Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-6 w-6" />
            How Our Wedding Soft Drink Calculator Works
          </CardTitle>
          <CardDescription>
            Understanding the science behind our beverage calculations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="base-calculations">
              <AccordionTrigger>Base Calculations</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <p>Our calculator uses several key factors to determine drink quantities:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Base consumption rate: 1 drink per person per hour</li>
                  <li>Event duration multiplier adjusts total volume based on party length</li>
                  <li>Guest count forms the foundation of all calculations</li>
                  <li>10% buffer added for spillage and unexpected consumption</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="adjustment-factors">
              <AccordionTrigger>Adjustment Factors</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <p>Results are fine-tuned based on:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Temperature: Consumption increases 15% per 10°F above 70°F</li>
                  <li>Outdoor events: 20% increase in overall consumption</li>
                  <li>Time of day: Morning events need more coffee/tea, evening events more festive drinks</li>
                  <li>Seasonal variations: Summer increases cold drink needs, winter increases hot beverages</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Planning Timeline Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-6 w-6" />
            Beverage Planning Timeline
          </CardTitle>
          <CardDescription>
            Month-by-month guide for wedding drink planning
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h3 className="font-semibold">6-8 Months Before:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Determine beverage service style (full bar, beer/wine only, non-alcoholic)</li>
              <li>Research and book beverage catering if needed</li>
              <li>Start collecting inspiration for signature drinks</li>
              <li>Consider seasonal factors in drink selection</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold">3-4 Months Before:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Finalize drink menu and quantities using calculator</li>
              <li>Order specialty items or unique ingredients</li>
              <li>Plan non-alcoholic alternatives</li>
              <li>Arrange for rental equipment if needed</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold">1 Month Before:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Confirm orders and delivery schedules</li>
              <li>Plan ice quantities and delivery</li>
              <li>Prepare setup instructions for staff</li>
              <li>Create shopping lists for last-minute items</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Budget Considerations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-6 w-6" />
            Budget Planning & Cost Saving Tips
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Smart Budgeting Strategies:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Consider bulk purchasing for non-perishable items</li>
              <li>Look for wholesale options and seasonal discounts</li>
              <li>Balance premium and standard options</li>
              <li>Calculate cost per person using our estimates</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Money-Saving Tips:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Buy in returnable containers where possible</li>
              <li>Consider drink stations instead of full service</li>
              <li>Use seasonal fruits for garnishes</li>
              <li>Create batch cocktails for efficient service</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Seasonal Considerations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-6 w-6" />
            Seasonal Drink Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Summer Weddings:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Increase water quantities by 40%</li>
                <li>Focus on refreshing options (lemonade, iced tea)</li>
                <li>Plan extra ice for chilling drinks</li>
                <li>Consider frozen drink options</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Winter Weddings:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Increase hot beverage options</li>
                <li>Hot chocolate and coffee stations</li>
                <li>Seasonal garnishes (cinnamon, nutmeg)</li>
                <li>Warm signature drinks</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Special Considerations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardList className="h-6 w-6" />
            Special Considerations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Dietary Restrictions:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Include sugar-free options</li>
              <li>Consider common allergens in mixers</li>
              <li>Label ingredients clearly</li>
              <li>Provide variety of options</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Religious Considerations:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Research cultural drink traditions</li>
              <li>Plan appropriate alternatives</li>
              <li>Consider fasting periods</li>
              <li>Respect dietary laws</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Non-Alcoholic Alternatives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GlassWater className="h-6 w-6" />
            Creative Non-Alcoholic Options
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Mocktail Ideas:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Virgin mojitos with fresh mint</li>
                <li>Sparkling fruit punch combinations</li>
                <li>Herb-infused lemonades</li>
                <li>Non-alcoholic sangria</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Presentation Tips:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use attractive garnishes</li>
                <li>Serve in elegant glassware</li>
                <li>Create drink stations with fresh ingredients</li>
                <li>Include creative naming for mocktails</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Service Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-6 w-6" />
            Service Excellence Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Staff Guidelines:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>1 server per 50 guests for drink service</li>
                <li>Proper pouring techniques</li>
                <li>Glass management and cleanup</li>
                <li>Emergency situation protocols</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Setup Requirements:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Proper table arrangements</li>
                <li>Ice station management</li>
                <li>Glass washing facilities</li>
                <li>Backup supply storage</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            Additional Planning Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Checklists:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Complete beverage shopping list</li>
                <li>Equipment and supplies checklist</li>
                <li>Timeline for ordering and setup</li>
                <li>Emergency contacts list</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Planning Tools:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Drink calculator (as provided above)</li>
                <li>Budget planning spreadsheet</li>
                <li>Vendor comparison chart</li>
                <li>Setup diagram templates</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeddingDrinkInfo;