import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Calculator, 
  Cake, 
  DollarSign, 
  Scale, 
  Scissors, 
  ShoppingCart, 
  Calendar,
  HeartHandshake,
  Sparkles,
  Award
} from 'lucide-react';

const CakeInfo = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-serif flex items-center justify-center gap-3">
          <Cake className="h-8 w-8 text-pink-400" />
          Wedding Cake Guide
        </CardTitle>
        <CardDescription>
          Everything you need to know about wedding cakes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="howItWorks" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="howItWorks">How It Works</TabsTrigger>
            <TabsTrigger value="pricing">Pricing Guide</TabsTrigger>
            <TabsTrigger value="planning">Planning Tips</TabsTrigger>
            <TabsTrigger value="trends">2025 Trends</TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[600px] w-full rounded-md border p-4">
            <TabsContent value="howItWorks" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-pink-500" />
                    Using Our Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">1. Enter Guest Count</h4>
                    <p>Start by entering your expected guest count. This helps determine the size and number of tiers needed. Consider whether you want full or half servings - many couples opt for half servings since not all guests will eat cake.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">2. Choose Cake Specifications</h4>
                    <p>Select your cake shape, number of tiers, and design complexity. Each choice affects the final price, with more elaborate designs and additional tiers increasing the cost.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">3. Customize Details</h4>
                    <p>Choose frosting type, flavors, and additional options like dietary requirements or delivery. Each selection is accompanied by detailed information about its impact on the final cost.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="h-5 w-5 text-pink-500" />
                    Cake Sizing Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Round Cakes (Servings)</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>6-inch: 12 servings</li>
                        <li>8-inch: 24 servings</li>
                        <li>10-inch: 38 servings</li>
                        <li>12-inch: 56 servings</li>
                        <li>14-inch: 78 servings</li>
                        <li>16-inch: 100 servings</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">Square Cakes (Servings)</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>6-inch: 18 servings</li>
                        <li>8-inch: 32 servings</li>
                        <li>10-inch: 50 servings</li>
                        <li>12-inch: 72 servings</li>
                        <li>14-inch: 98 servings</li>
                        <li>16-inch: 128 servings</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pricing" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-pink-500" />
                    Understanding Cake Costs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Base Price Ranges</h4>
                    <p>Wedding cakes typically cost between $500-$1200 nationally, with custom designs reaching $2000+. Pricing per slice ranges:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Basic designs: $2.50-$4.00 per slice</li>
                      <li>Mid-range designs: $4.00-$8.00 per slice</li>
                      <li>Premium designs: $8.00-$12.00+ per slice</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Cost Factors</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Design complexity (25-100% increase)</li>
                      <li>Fondant vs. buttercream ($2-4 more per slice)</li>
                      <li>Special dietary requirements (30% increase)</li>
                      <li>Delivery and setup ($50-150)</li>
                      <li>Location premium (up to 50% in major cities)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5 text-pink-500" />
                    Money-Saving Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Scissors className="h-4 w-4 mt-1 text-pink-400" />
                      <div>
                        <span className="font-semibold">Opt for half servings:</span>
                        <p>Most guests only eat a small portion, saving 30-40% on cake size.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Scissors className="h-4 w-4 mt-1 text-pink-400" />
                      <div>
                        <span className="font-semibold">Choose buttercream:</span>
                        <p>Saves $2-4 per slice compared to fondant while still looking beautiful.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Scissors className="h-4 w-4 mt-1 text-pink-400" />
                      <div>
                        <span className="font-semibold">Consider a display cake:</span>
                        <p>Use a smaller decorated cake for display and photos, with sheet cakes for serving.</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="planning" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-pink-500" />
                    Timeline & Planning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">6-12 Months Before</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Research and contact bakeries</li>
                        <li>Schedule tastings</li>
                        <li>Review portfolio and designs</li>
                        <li>Get quotes and compare prices</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">3-6 Months Before</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Book your baker</li>
                        <li>Finalize design and flavors</li>
                        <li>Pay deposit</li>
                        <li>Coordinate with florist for cake flowers</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">1 Month Before</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Confirm final guest count</li>
                        <li>Finalize delivery details</li>
                        <li>Make final payment</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HeartHandshake className="h-5 w-5 text-pink-500" />
                    Working with Bakers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Questions to Ask</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>What's included in the price?</li>
                        <li>How do you handle dietary restrictions?</li>
                        <li>What's your backup plan for emergencies?</li>
                        <li>How do you handle design changes?</li>
                        <li>What's your cancellation policy?</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trends" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-pink-500" />
                    2025 Wedding Cake Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Popular Styles</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Sheet cake renaissance</li>
                        <li>Textured buttercream designs</li>
                        <li>Pressed flower decorations</li>
                        <li>Metallic accents</li>
                        <li>Minimalist designs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">Trending Flavors</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Earl Grey with orange</li>
                        <li>Lavender honey</li>
                        <li>Salted caramel</li>
                        <li>Champagne and berries</li>
                        <li>Matcha green tea</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-pink-500" />
                    Modern Alternatives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Popular Options</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Dessert tables with multiple mini cakes</li>
                        <li>Cheese wheel cakes</li>
                        <li>Cupcake towers</li>
                        <li>Donut walls</li>
                        <li>Macaron towers</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">Sustainability Trends</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Locally sourced ingredients</li>
                        <li>Edible decorations only</li>
                        <li>Eco-friendly packaging</li>
                        <li>Zero-waste policies</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CakeInfo;