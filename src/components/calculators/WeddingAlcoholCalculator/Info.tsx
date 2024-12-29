import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Wine, 
  Clock,
  Calculator,
  Palmtree,
  ScrollText,
  ShoppingCart,
  AlertTriangle
} from "lucide-react";

const WeddingAlcoholInfo = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Wedding Bar Planning Guide</CardTitle>
          <CardDescription>
            Everything you need to know about planning and stocking your wedding bar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="how-it-works" className="space-y-4">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
              <TabsTrigger value="types-of-bars">Types of Bars</TabsTrigger>
              <TabsTrigger value="planning-tips">Planning Tips</TabsTrigger>
              <TabsTrigger value="seasonal">Seasonal Guide</TabsTrigger>
            </TabsList>

            {/* How It Works Section */}
            <TabsContent value="how-it-works">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="w-5 h-5" />
                      Understanding Drink Calculations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Standard Drink Sizes</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Wine: 5 ounces per serving</li>
                        <li>Beer: 12 ounces per serving</li>
                        <li>Spirits: 1.5 ounces per serving</li>
                        <li>Champagne: 4 ounces per toast</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Bottles Yield</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Wine (750ml): 5 glasses</li>
                        <li>Champagne (750ml): 6-8 toasting glasses</li>
                        <li>Liquor (750ml): 16 drinks</li>
                        <li>Liquor (1L): 22 drinks</li>
                        <li>Beer keg (15.5 gallons): 165 12-oz servings</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Timing Considerations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Drinking Patterns</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>First Hour: Guests typically consume 2 drinks</li>
                        <li>Additional Hours: 1 drink per hour on average</li>
                        <li>Peak Consumption: Usually during cocktail hour and after dinner</li>
                        <li>Slower Periods: During dinner and formal events</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Types of Bars Section */}
            <TabsContent value="types-of-bars">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wine className="w-5 h-5" />
                      Bar Service Options
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Full Open Bar</h4>
                      <p className="text-gray-600 mb-2">
                        Offers complete selection of liquor, beer, and wine. Most generous but also most expensive option.
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Typically includes premium spirits</li>
                        <li>Multiple beer and wine options</li>
                        <li>Signature cocktails available</li>
                        <li>Average Cost: $15-$45 per person</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Limited Open Bar</h4>
                      <p className="text-gray-600 mb-2">
                        Curated selection of drinks with some restrictions.
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Beer and wine only</li>
                        <li>Selected spirits only</li>
                        <li>Limited hours of service</li>
                        <li>Average Cost: $15-$30 per person</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Consumption Bar</h4>
                      <p className="text-gray-600 mb-2">
                        You pay for what guests actually drink.
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Pay per drink served</li>
                        <li>Can set consumption limits</li>
                        <li>Good for light-drinking crowds</li>
                        <li>Requires careful monitoring</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Planning Tips Section */}
            <TabsContent value="planning-tips">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ScrollText className="w-5 h-5" />
                      Expert Planning Advice
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Staffing Guidelines</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>1 bartender per 50 guests for full bar</li>
                        <li>1 bartender per 75 guests for beer/wine only</li>
                        <li>Add bar backs for events over 100 guests</li>
                        <li>Consider additional staff for passed drinks</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Money-Saving Tips</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Buy wine by the case (usually 10-15% discount)</li>
                        <li>Consider returnable unopened bottles</li>
                        <li>Limit premium spirits to specific times</li>
                        <li>Use batch cocktails for signature drinks</li>
                        <li>Consider kegs for beer service</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Essential Supplies</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Ice: 1 pound per guest for drinks, 1/2 pound for chilling</li>
                        <li>Mixers: 3 types of juices, 2 types of sodas</li>
                        <li>Garnishes: lemons, limes, olives, cherries</li>
                        <li>Non-alcoholic options: sodas, sparkling water, mocktails</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Important Considerations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Check venue alcohol policies and restrictions</li>
                      <li>Verify if you need event insurance</li>
                      <li>Plan for secure storage of alcohol</li>
                      <li>Arrange transportation options for guests</li>
                      <li>Consider hiring professional bartenders</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Seasonal Guide Section */}
            <TabsContent value="seasonal">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palmtree className="w-5 h-5" />
                      Seasonal Drink Guidelines
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Summer Weddings</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Increase beer quantities by 20%</li>
                        <li>Focus on light wines and rosé</li>
                        <li>Popular drinks: Moscow Mules, Gin & Tonics</li>
                        <li>Extra ice needed: 2 pounds per guest</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Winter Weddings</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Increase red wine quantities by 20%</li>
                        <li>Reduce beer quantities by 20%</li>
                        <li>Popular drinks: Old Fashioneds, Whiskey-based cocktails</li>
                        <li>Consider hot drinks like spiked cider or coffee</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Spring/Fall Weddings</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Standard drink distribution</li>
                        <li>Equal red and white wine split</li>
                        <li>Popular drinks: Champagne cocktails, Spritzes</li>
                        <li>Consider seasonal garnishes and ingredients</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Quick Reference Footer */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Quick Shopping Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Bar Equipment</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Ice bins and scoops</li>
                <li>Cocktail shakers and strainers</li>
                <li>Bottle openers and cork screws</li>
                <li>Jiggers and pourers</li>
                <li>Bar mats and towels</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Glassware (per 100 guests)</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>120 wine glasses</li>
                <li>120 champagne flutes</li>
                <li>100 highball glasses</li>
                <li>80 rocks glasses</li>
                <li>100 beer glasses</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Additional Supplies</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Cocktail napkins</li>
                <li>Stirrers and straws</li>
                <li>Garnish picks and containers</li>
                <li>Ice coolers</li>
                <li>Backup supplies</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeddingAlcoholInfo;