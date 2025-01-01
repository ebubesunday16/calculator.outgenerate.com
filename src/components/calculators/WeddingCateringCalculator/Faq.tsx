import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, Heart, Flower2,  } from 'lucide-react';

const WeddingCateringFaq = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Decorative header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center items-center gap-2">
          <Flower2 className="w-6 h-6 text-pink-400" />
          <h1 className="text-3xl font-serif text-gray-800">Frequently Asked Questions</h1>
          <Flower2 className="w-6 h-6 text-pink-400" />
        </div>
        <p className="text-gray-600 italic font-serif">Everything you need to know about wedding catering</p>
      </div>

      {/* Main FAQ sections */}
      <div className="grid gap-8">
        {/* Costs & Budgeting */}
        <Card className="border-pink-100 shadow-lg">
          <CardHeader className="border-b border-pink-50">
            <CardTitle className="flex items-center gap-2 text-gray-800">
              <Ring className="w-5 h-5 text-pink-400" />
              Costs & Budgeting
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="avg-cost">
                <AccordionTrigger>What's the average cost of wedding catering?</AccordionTrigger>
                <AccordionContent>
                  Based on recent data, the average wedding catering cost is $85 per person. This varies by location, with hometown weddings averaging $81 per person and destination weddings around $102 per person. These prices typically include food service, staff, and basic beverages.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="budget-percentage">
                <AccordionTrigger>What percentage of my wedding budget should go to catering?</AccordionTrigger>
                <AccordionContent>
                  Typically, couples allocate 25-30% of their total wedding budget to catering. This often represents one of the largest single expenses in a wedding budget, reflecting both the importance of food and beverage service and the complexity of catering operations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cost-factors">
                <AccordionTrigger>What factors affect catering costs the most?</AccordionTrigger>
                <AccordionContent>
                  The main factors affecting catering costs are:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Guest count</li>
                    <li>Service style (plated, buffet, stations)</li>
                    <li>Menu selections</li>
                    <li>Bar service level</li>
                    <li>Location and venue requirements</li>
                    <li>Season and time of day</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Planning & Timeline */}
        <Card className="border-pink-100 shadow-lg">
          <CardHeader className="border-b border-pink-50">
            <CardTitle className="flex items-center gap-2 text-gray-800">
              <Heart className="w-5 h-5 text-pink-400" />
              Planning & Timeline
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="when-book">
                <AccordionTrigger>When should I book my wedding caterer?</AccordionTrigger>
                <AccordionContent>
                  You should book your caterer 8-12 months before your wedding date. Popular caterers and peak wedding seasons often book up quickly. Start researching and scheduling tastings about a year before your wedding, especially if you're planning a wedding during peak season.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="tastings">
                <AccordionTrigger>How do wedding menu tastings work?</AccordionTrigger>
                <AccordionContent>
                  Wedding tastings typically occur 6-8 months before your wedding. Most caterers offer:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Sample portions of potential menu items</li>
                    <li>Options for different courses</li>
                    <li>Opportunity to discuss customization</li>
                    <li>Time to review service styles</li>
                    <li>Discussion of dietary restrictions</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="headcount">
                <AccordionTrigger>When do I need to provide final guest count?</AccordionTrigger>
                <AccordionContent>
                  Most caterers require the final guest count 2 weeks before the wedding. This allows them to:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Order the correct amount of food</li>
                    <li>Plan staff requirements</li>
                    <li>Arrange necessary rentals</li>
                    <li>Prepare accurate final invoicing</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Food & Service */}
        <Card className="border-pink-100 shadow-lg">
          <CardHeader className="border-b border-pink-50">
            <CardTitle className="flex items-center gap-2 text-gray-800">
              <HelpCircle className="w-5 h-5 text-pink-400" />
              Food & Service Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="service-styles">
                <AccordionTrigger>What are the different catering service styles?</AccordionTrigger>
                <AccordionContent>
                  Common wedding catering styles include:
                  <div className="space-y-2 mt-2">
                    <p><strong>Plated Service:</strong> Most formal option, individually served courses</p>
                    <p><strong>Buffet:</strong> Self-service with multiple food stations</p>
                    <p><strong>Family Style:</strong> Large platters served to shared tables</p>
                    <p><strong>Food Stations:</strong> Interactive serving areas with specific themes</p>
                    <p><strong>Passed Appetizers:</strong> Servers circulate with hors d'oeuvres</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="dietary">
                <AccordionTrigger>How should I handle dietary restrictions?</AccordionTrigger>
                <AccordionContent>
                  Best practices for handling dietary restrictions:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Include dietary options on RSVP cards</li>
                    <li>Work with your caterer to create alternative options</li>
                    <li>Label all foods at buffets and stations</li>
                    <li>Have staff trained on ingredients and alternatives</li>
                    <li>Consider common restrictions in menu planning</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="bar-service">
                <AccordionTrigger>What are the different bar service options?</AccordionTrigger>
                <AccordionContent>
                  Common bar service options include:
                  <div className="space-y-2 mt-2">
                    <p><strong>Full Open Bar:</strong> All drinks covered by host</p>
                    <p><strong>Limited Open Bar:</strong> Selected drinks covered by host</p>
                    <p><strong>Beer & Wine Only:</strong> More economical option</p>
                    <p><strong>Cash Bar:</strong> Guests pay for their own drinks</p>
                    <p><strong>Hybrid Bar:</strong> Combination of hosted and cash options</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Misc Questions */}
        <Card className="border-pink-100 shadow-lg">
          <CardHeader className="border-b border-pink-50">
            <CardTitle className="flex items-center gap-2 text-gray-800">
              <Flower2 className="w-5 h-5 text-pink-400" />
              Additional Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="rentals">
                <AccordionTrigger>What rentals are typically needed for wedding catering?</AccordionTrigger>
                <AccordionContent>
                  Common catering rentals include:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Tables and chairs</li>
                    <li>Linens and napkins</li>
                    <li>Place settings and flatware</li>
                    <li>Glassware</li>
                    <li>Serving equipment</li>
                    <li>Bar equipment</li>
                    <li>Kitchen equipment (if needed)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="vendor-meals">
                <AccordionTrigger>Do I need to provide meals for my vendors?</AccordionTrigger>
                <AccordionContent>
                  Yes, you should plan to feed vendors who will be present during your reception, including:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Photographer and videographer</li>
                    <li>Band or DJ</li>
                    <li>Wedding planner</li>
                    <li>Additional vendors staying for 4+ hours</li>
                  </ul>
                  Vendor meals are typically less expensive than guest meals and should be factored into your total headcount.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="leftovers">
                <AccordionTrigger>What happens to leftover food?</AccordionTrigger>
                <AccordionContent>
                  Leftover food policies vary by caterer and local health regulations. Options may include:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Packaging for the couple to take home</li>
                    <li>Distribution to wedding party/family</li>
                    <li>Donation to local food banks (if allowed)</li>
                    <li>Composting unused portions</li>
                  </ul>
                  Discuss the policy with your caterer in advance if you have specific preferences.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>

      {/* Decorative footer */}
      <div className="flex justify-center items-center gap-4 py-8">
        <Heart className="w-4 h-4 text-pink-400" />
        <div className="h-px w-20 bg-pink-200" />
        <Flower2 className="w-4 h-4 text-pink-400" />
        <div className="h-px w-20 bg-pink-200" />
        <Heart className="w-4 h-4 text-pink-400" />
      </div>
    </div>
  );
};

export default WeddingCateringFaq;