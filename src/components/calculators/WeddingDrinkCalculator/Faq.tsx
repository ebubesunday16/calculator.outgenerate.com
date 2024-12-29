import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircleQuestion, Calculator, GlassWater, Clock, DollarSign, ThermometerSun, Users } from 'lucide-react';

const WeddingDrinkFaq = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircleQuestion className="h-6 w-6" />
            Frequently Asked Questions
          </CardTitle>
          <CardDescription>
            Common questions about wedding drink planning and our calculator
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {/* Calculator Usage Questions */}
            <AccordionItem value="calculator-section">
              <AccordionTrigger className="font-semibold text-lg">
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Calculator Usage
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-base">How accurate is the drink calculator?</h3>
                    <p className="text-muted-foreground mt-1">
                      Our calculator is based on industry standards and real wedding data. It considers multiple factors including weather, duration, and guest count. We include a 10% buffer for unexpected situations. While highly accurate, you can adjust quantities based on your specific knowledge of your guests.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base">Why do temperature and season matter in the calculations?</h3>
                    <p className="text-muted-foreground mt-1">
                      Temperature and season significantly affect drink consumption. Higher temperatures increase drink consumption by up to 15% per 10°F above 70°F. Seasonal preferences also shift between hot and cold beverages, which our calculator accounts for.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base">Can I adjust the calculator for children or non-drinking guests?</h3>
                    <p className="text-muted-foreground mt-1">
                      Yes. When entering guest count, you can separate adults from children or adjust the drinking style to 'light' if many guests don't drink alcohol. The calculator will adjust quantities accordingly.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* General Planning Questions */}
            <AccordionItem value="planning-section">
              <AccordionTrigger className="font-semibold text-lg">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  General Planning
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-base">How far in advance should I plan the drink menu?</h3>
                  <p className="text-muted-foreground mt-1">
                    Start planning 6-8 months before the wedding. This gives you time to:
                    - Research and book vendors
                    - Plan seasonal drinks
                    - Order special items
                    - Arrange rentals if needed
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base">What's the best way to handle both alcoholic and non-alcoholic drinks?</h3>
                  <p className="text-muted-foreground mt-1">
                    Plan for a 1:1 ratio of alcoholic to non-alcoholic options. Ensure non-alcoholic options are equally sophisticated and appealing. Consider creating "mocktail" versions of signature cocktails.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base">Should I hire professional bartenders?</h3>
                  <p className="text-muted-foreground mt-1">
                    Yes, we recommend professional bartenders for weddings over 50 guests. They ensure proper serving, maintain cleanliness, and handle any issues professionally. Plan for 1 bartender per 50 guests.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Non-Alcoholic Specific Questions */}
            <AccordionItem value="non-alcoholic-section">
              <AccordionTrigger className="font-semibold text-lg">
                <div className="flex items-center gap-2">
                  <GlassWater className="h-5 w-5" />
                  Non-Alcoholic Beverages
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-base">What are the must-have non-alcoholic options?</h3>
                  <p className="text-muted-foreground mt-1">
                    Essential non-alcoholic options include:
                    - Water (still and sparkling)
                    - Soft drinks
                    - Coffee and tea
                    - At least one signature mocktail
                    - Juice options
                    - Sparkling cider for toasts
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base">How do I make non-alcoholic options special?</h3>
                  <p className="text-muted-foreground mt-1">
                    Elevate non-alcoholic options with:
                    - Creative presentation
                    - Fresh garnishes
                    - Quality glassware
                    - Unique flavor combinations
                    - Beautiful garnishes
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base">How much water should I provide?</h3>
                  <p className="text-muted-foreground mt-1">
                    Plan for 1 liter of water per guest minimum, plus additional for hot weather. Include both still and sparkling options. Consider water stations throughout the venue.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Cost and Budget Questions */}
            <AccordionItem value="budget-section">
              <AccordionTrigger className="font-semibold text-lg">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Cost and Budget
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-base">What percentage of the wedding budget should go to beverages?</h3>
                  <p className="text-muted-foreground mt-1">
                    Typically, 10-15% of your total wedding budget should be allocated to beverages, including both alcoholic and non-alcoholic options, service, and rentals.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base">How can I save money on drinks without compromising quality?</h3>
                  <p className="text-muted-foreground mt-1">
                    Consider these cost-saving strategies:
                    - Buy in bulk from wholesale suppliers
                    - Limit premium options to signature drinks
                    - Create batch cocktails
                    - Use seasonal ingredients
                    - Consider drink stations instead of full service
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base">What hidden costs should I plan for?</h3>
                  <p className="text-muted-foreground mt-1">
                    Don't forget to budget for:
                    - Glassware rental
                    - Ice and ice storage
                    - Garnishes and mixers
                    - Service staff
                    - Delivery fees
                    - Setup and cleanup costs
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Weather and Seasonal Questions */}
            <AccordionItem value="weather-section">
              <AccordionTrigger className="font-semibold text-lg">
                <div className="flex items-center gap-2">
                  <ThermometerSun className="h-5 w-5" />
                  Weather and Seasonal Considerations
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-base">How do I plan for an outdoor summer wedding?</h3>
                  <p className="text-muted-foreground mt-1">
                    For outdoor summer weddings:
                    - Increase water quantities by 40%
                    - Plan extra ice
                    - Provide shade for drink stations
                    - Consider frozen drink options
                    - Have backup cooling systems
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base">What adjustments are needed for winter weddings?</h3>
                  <p className="text-muted-foreground mt-1">
                    Winter wedding considerations:
                    - Increase hot beverage options
                    - Set up coffee and hot chocolate stations
                    - Provide warm signature drinks
                    - Ensure proper beverage temperature maintenance
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base">How do I handle unexpected weather changes?</h3>
                  <p className="text-muted-foreground mt-1">
                    Always have a weather contingency plan:
                    - Extra covered areas for outdoor events
                    - Backup indoor locations for drink stations
                    - Temperature control equipment
                    - Additional staff for quick setup changes
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Service and Logistics Questions */}
            <AccordionItem value="service-section">
              <AccordionTrigger className="font-semibold text-lg">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Service and Logistics
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-base">How many servers do I need for drinks?</h3>
                  <p className="text-muted-foreground mt-1">
                    Plan for:
                    - 1 bartender per 50 guests
                    - 1 server per 25-30 guests for passed drinks
                    - Additional staff for setup and cleanup
                    - Extra servers for complex signature drinks
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base">What's the best way to set up drink stations?</h3>
                  <p className="text-muted-foreground mt-1">
                    Effective drink station setup includes:
                    - Multiple stations to prevent lines
                    - Clear signage and menus
                    - Proper traffic flow planning
                    - Backup supply storage nearby
                    - Easy access to ice and water
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base">How do I handle special dietary requirements?</h3>
                  <p className="text-muted-foreground mt-1">
                    Address dietary needs by:
                    - Offering allergen-free options
                    - Clearly labeling ingredients
                    - Training staff on alternatives
                    - Having dedicated stations for specific needs
                    - Providing ingredient lists
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeddingDrinkFaq;