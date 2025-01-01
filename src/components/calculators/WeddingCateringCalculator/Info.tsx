import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  DollarSign, 
  ChefHat,
  ClipboardList,
  AlertCircle
} from 'lucide-react';

const WeddingCateringInfo = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* How It Works Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardList className="w-5 h-5" />
            How Wedding Catering Works
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="process">
              <AccordionTrigger>The Planning Process</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>Planning your wedding catering typically follows these steps:</p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Determine your guest count and budget parameters</li>
                    <li>Research and contact potential caterers</li>
                    <li>Schedule tastings with your top choices</li>
                    <li>Review and compare detailed proposals</li>
                    <li>Discuss dietary restrictions and special requirements</li>
                    <li>Finalize menu selections and service style</li>
                    <li>Confirm timeline and logistics</li>
                    <li>Review final headcount and make adjustments</li>
                  </ol>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="packages">
              <AccordionTrigger>What's Included in Catering Packages</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>Standard catering packages typically include:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Food preparation and service</li>
                    <li>Professional wait staff and bartenders</li>
                    <li>Basic linens and table settings</li>
                    <li>Setup and cleanup</li>
                    <li>Non-alcoholic beverages</li>
                    <li>Cake cutting service</li>
                  </ul>
                  <p>Additional services often available:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Specialty linens and decorative items</li>
                    <li>Custom menu creation</li>
                    <li>Specialty equipment rental</li>
                    <li>Bar packages and specialty cocktails</li>
                    <li>Late night snack options</li>
                    <li>Vendor meals</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Cost Factors Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5" />
            Understanding Cost Factors
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="location">
              <AccordionTrigger>Location Impact</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>Location significantly affects catering costs:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Hometown weddings average $81 per person</li>
                    <li>Destination weddings average $102 per person</li>
                    <li>Metropolitan areas typically have higher base costs</li>
                    <li>Travel fees may apply for remote locations</li>
                    <li>Venue kitchen access can impact pricing</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="service-style">
              <AccordionTrigger>Service Styles and Pricing</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Plated Service</h4>
                    <p>Most formal option, typically highest cost due to additional staff needed</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Buffet Style</h4>
                    <p>More economical option, requires less staff but may need more food preparation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Food Stations</h4>
                    <p>Interactive experience, pricing varies based on complexity and number of stations</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Family Style</h4>
                    <p>Middle-range option, combines elements of plated and buffet service</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="extras">
              <AccordionTrigger>Additional Services and Add-ons</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>Common add-ons that affect total cost:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Bar service (Full bar adds approximately 30% to base cost)</li>
                    <li>Passed appetizers ($12-15 per person)</li>
                    <li>Dessert stations ($8-10 per person)</li>
                    <li>Late night snacks ($10-12 per person)</li>
                    <li>Special dietary accommodations (5-10% increase)</li>
                    <li>Equipment rentals ($20-30 per person)</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Trends and Tips Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ChefHat className="w-5 h-5" />
            Current Trends and Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="trends">
              <AccordionTrigger>Popular Catering Trends</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Interactive Experiences</h4>
                    <p>12% of couples opt for interactive food experiences like build-your-own stations</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Local Sourcing</h4>
                    <p>24% incorporate locally sourced products including craft beverages and seasonal produce</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Cultural Fusion</h4>
                    <p>14% of couples incorporate their cultural backgrounds into their menus</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Late Night Options</h4>
                    <p>26% of couples serve late-night snacks</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="budget-tips">
              <AccordionTrigger>Money-Saving Tips</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Consider a lunch or brunch reception for lower per-person costs</li>
                    <li>Opt for beer and wine service instead of a full bar</li>
                    <li>Choose seasonal ingredients to reduce costs</li>
                    <li>Reduce the number of passed appetizers</li>
                    <li>Select a buffet or family-style service over plated service</li>
                    <li>Limit specialty dietary options to those who require them</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="planning-tips">
              <AccordionTrigger>Planning Timeline Tips</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Book your caterer 8-12 months in advance</li>
                    <li>Schedule tastings 6-8 months before the wedding</li>
                    <li>Finalize menu 3-4 months before the event</li>
                    <li>Confirm final guest count 2 weeks before</li>
                    <li>Create a day-of timeline for all food service</li>
                    <li>Plan for vendor meals in your final count</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Important Considerations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            Important Considerations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="dietary">
              <AccordionTrigger>Dietary Accommodations</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>61% of couples accommodate dietary restrictions:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Vegetarian and vegan options</li>
                    <li>Gluten-free alternatives</li>
                    <li>Food allergy considerations</li>
                    <li>Religious dietary requirements</li>
                    <li>Child-friendly menu options</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="questions">
              <AccordionTrigger>Questions to Ask Caterers</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>What's included in the base price?</li>
                    <li>How do you handle dietary restrictions?</li>
                    <li>What's your cancellation policy?</li>
                    <li>Do you provide staff and rentals?</li>
                    <li>Can you work within my venue's constraints?</li>
                    <li>What's your typical service timeline?</li>
                    <li>How do you handle last-minute changes?</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeddingCateringInfo;