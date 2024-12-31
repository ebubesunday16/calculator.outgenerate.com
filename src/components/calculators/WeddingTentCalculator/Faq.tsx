import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BookOpen,  } from 'lucide-react';

const WeddingTentFaq = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto mt-8 bg-white/95 backdrop-blur-sm border-rose-100">
      <CardHeader className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-t-lg border-b border-rose-100">
        <CardTitle className="flex items-center gap-2 text-rose-800">
          <BookOpen className="w-6 h-6" />
          Frequently Asked Questions About Wedding Tents
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="tent-timing">
            <AccordionTrigger className="text-rose-800 hover:text-rose-900">
              When should I book my wedding tent?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p>It's recommended to book your wedding tent 6-8 months in advance, especially if you're planning a wedding during peak season (May-October). For winter weddings, you might have more flexibility, but booking early ensures:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Best availability for your preferred tent style</li>
                <li>Time for site visits and logistics planning</li>
                <li>Opportunity to coordinate with other vendors</li>
                <li>Better pricing options before peak season rates apply</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="tent-types">
            <AccordionTrigger className="text-rose-800 hover:text-rose-900">
              What are the different types of wedding tents and their benefits?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Pole Tents</h4>
                  <p>Classic appearance with high peaks, best for grass installations, more affordable option</p>
                </div>
                <div>
                  <h4 className="font-semibold">Frame Tents</h4>
                  <p>Versatile installation on any surface, clear span interior without center poles, higher cost but more flexibility</p>
                </div>
                <div>
                  <h4 className="font-semibold">Clear Top Tents</h4>
                  <p>Transparent roof for stargazing, great for evening events, modern appearance but requires more climate control</p>
                </div>
                <div>
                  <h4 className="font-semibold">High Peak Tents</h4>
                  <p>Elegant appearance with dramatic peaks, good for both ceremonies and receptions, better air circulation</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="weather-considerations">
            <AccordionTrigger className="text-rose-800 hover:text-rose-900">
              How do I plan for weather contingencies?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <div className="space-y-2">
                <p>Weather planning is crucial for tent weddings. Consider:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Always rent sidewalls regardless of forecast</li>
                  <li>Consider flooring for wet ground conditions</li>
                  <li>Plan for heating or cooling based on season</li>
                  <li>Have a backup plan for extreme weather</li>
                  <li>Consider rental insurance for weather-related cancellations</li>
                </ul>
                <p className="mt-2">Remember: Rain on your wedding day is considered lucky in many cultures!</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="size-requirements">
            <AccordionTrigger className="text-rose-800 hover:text-rose-900">
              How do I determine the right tent size?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <div className="space-y-2">
                <p>General space requirements per guest:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Seated dinner: 15-20 sq ft per person</li>
                  <li>Ceremony seating: 8-10 sq ft per person</li>
                  <li>Dancing area: 2-4 sq ft per person</li>
                  <li>Buffet service: Add 100-200 sq ft</li>
                  <li>Bar service: Add 100 sq ft per bar</li>
                </ul>
                <p className="mt-2">Remember to account for other elements like band/DJ space, gift tables, and entrance areas.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="additional-rentals">
            <AccordionTrigger className="text-rose-800 hover:text-rose-900">
              What additional items might I need besides the tent?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <ul className="list-disc pl-6 space-y-1">
                <li>Lighting (string lights, uplighting, spotlights)</li>
                <li>Climate control (heaters, fans, or AC units)</li>
                <li>Flooring or dance floor</li>
                <li>Generator for power supply</li>
                <li>Restroom facilities</li>
                <li>Catering tent or prep area</li>
                <li>Tables, chairs, and linens</li>
                <li>Sound equipment</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="cost-factors">
            <AccordionTrigger className="text-rose-800 hover:text-rose-900">
              What factors affect the total cost of a tent wedding?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <div className="space-y-2">
                <p>Several factors influence the final cost:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Season and demand (peak vs. off-peak)</li>
                  <li>Tent size and style</li>
                  <li>Setup location and surface type</li>
                  <li>Duration of rental</li>
                  <li>Additional features (walls, windows, flooring)</li>
                  <li>Climate control requirements</li>
                  <li>Lighting and electrical needs</li>
                  <li>Labor costs for setup and breakdown</li>
                </ul>
                <p className="mt-2">Use our calculator above to get a detailed estimate based on your specific needs.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="permits">
            <AccordionTrigger className="text-rose-800 hover:text-rose-900">
              Do I need permits for a tent wedding?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <div className="space-y-2">
                <p>Permit requirements vary by location but generally you'll need to consider:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Event permits from local authorities</li>
                  <li>Fire safety permits for tents over certain sizes</li>
                  <li>Noise permits for music and entertainment</li>
                  <li>Health permits if serving food</li>
                  <li>Alcohol permits if serving beverages</li>
                  <li>Parking permits for guests</li>
                </ul>
                <p className="mt-2">Check with your local municipality and wedding planner for specific requirements.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="setup-timeline">
            <AccordionTrigger className="text-rose-800 hover:text-rose-900">
              What's the typical setup timeline for a tent wedding?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <div className="space-y-2">
                <p>A typical timeline includes:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>2-3 days before: Tent installation begins</li>
                  <li>1-2 days before: Flooring and major equipment installation</li>
                  <li>1 day before: Lighting, décor, and furniture setup</li>
                  <li>Day of: Final touches and vendor setup</li>
                  <li>Day after: Breakdown and cleanup</li>
                </ul>
                <p className="mt-2">Weather conditions and tent size may affect this timeline.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default WeddingTentFaq;