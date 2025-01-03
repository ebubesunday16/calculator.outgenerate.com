import { 
  Scroll, 
  Calendar, 
  Clock, 
  Compass, 
  Heart, 
  Scale, 
  Moon, 
  Sun, 
  Sparkles,
  Info
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FengShuiInfo = () => {
  return (
    <div className="max-w-5xl mx-auto  space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-rose-600 mb-4">
          Understanding Feng Shui Wedding Dates
        </h2>
        <p className="text-gray-600 text-lg">
          Discover how ancient Chinese wisdom can help you choose the perfect wedding date
        </p>
      </div>

      {/* How It Works Section */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Compass className="text-rose-500" />
            How It Works
          </CardTitle>
          <CardDescription>
            Understanding the principles behind Feng Shui date selection
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            Feng Shui wedding date selection combines multiple elements of Chinese metaphysics:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-rose-50 rounded-lg">
              <h3 className="font-semibold mb-2">Chinese Zodiac Compatibility</h3>
              <p>Analyzes the harmony between both partners' zodiac signs to ensure a strong foundation.</p>
            </div>
            <div className="p-4 bg-rose-50 rounded-lg">
              <h3 className="font-semibold mb-2">Lunar Calendar</h3>
              <p>Considers the phases of the moon and its influence on relationships and new beginnings.</p>
            </div>
            <div className="p-4 bg-rose-50 rounded-lg">
              <h3 className="font-semibold mb-2">Elements Balance</h3>
              <p>Examines the five elements (Water, Wood, Fire, Earth, Metal) and their interactions.</p>
            </div>
            <div className="p-4 bg-rose-50 rounded-lg">
              <h3 className="font-semibold mb-2">Auspicious Numbers</h3>
              <p>Incorporates lucky numbers and their combinations in date selection.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Dates Section */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Calendar className="text-rose-500" />
            Best Dates and Timing
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="months">
              <AccordionTrigger>Auspicious Months</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <p><strong>Most Favorable Months:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>March (2nd lunar month) - Beginning of spring, symbolizing new growth</li>
                  <li>May (4th lunar month) - Associated with abundance and prosperity</li>
                  <li>July (6th lunar month) - Peak of summer, representing passion</li>
                  <li>August (7th lunar month) - Traditional Chinese Valentine's month</li>
                  <li>September (8th lunar month) - Associated with infinity and lasting love</li>
                  <li>October (9th lunar month) - Represents completion and fulfillment</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="days">
              <AccordionTrigger>Lucky Days</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <p><strong>Most Auspicious Days:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>1st and 2nd - New beginnings</li>
                  <li>8th and 9th - Prosperity and longevity</li>
                  <li>10th and 11th - Perfect union</li>
                  <li>15th - Full moon, symbolizing completeness</li>
                  <li>20th and 21st - Stability</li>
                  <li>28th and 29th - Growing prosperity</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="timing">
              <AccordionTrigger>Auspicious Times</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <p>The most favorable times for wedding ceremonies:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>7:00 AM - 9:00 AM (Morning Yang energy)</li>
                  <li>11:00 AM - 1:00 PM (Peak sunlight)</li>
                  <li>3:00 PM - 5:00 PM (Balanced energy)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Zodiac Compatibility */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Heart className="text-rose-500" />
            Zodiac Compatibility Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Most Compatible Pairs</h3>
              <ul className="space-y-2">
                <li>🐀 Rat + 🐲 Dragon</li>
                <li>🐂 Ox + 🐍 Snake</li>
                <li>🐅 Tiger + 🐎 Horse</li>
                <li>🐇 Rabbit + 🐑 Goat</li>
                <li>🐲 Dragon + 🐒 Monkey</li>
                <li>🐍 Snake + 🐓 Rooster</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Harmonious Elements</h3>
              <ul className="space-y-2">
                <li>Wood + Water (Nourishing)</li>
                <li>Fire + Wood (Growth)</li>
                <li>Earth + Fire (Creation)</li>
                <li>Metal + Earth (Support)</li>
                <li>Water + Metal (Strength)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Considerations */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Info className="text-rose-500" />
            Important Considerations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Moon className="text-rose-500" />
                Lunar Phases
              </h3>
              <p>Waxing moon periods (from new moon to full moon) are considered most auspicious for weddings, symbolizing growth and increase.</p>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Scale className="text-rose-500" />
                Balancing Elements
              </h3>
              <p>Consider incorporating elements that complement both partners' zodiac signs in your wedding decor and ceremony timing.</p>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Clock className="text-rose-500" />
                Seasonal Timing
              </h3>
              <p>Spring and Fall are traditionally considered the most favorable seasons for weddings, representing new beginnings and abundance respectively.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dates to Avoid */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-red-600">
            <Sun className="text-red-500" />
            Dates to Avoid
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="font-semibold">Ghost Month:</span>
              <span>The seventh month of the lunar calendar (usually August) is traditionally avoided</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold">Lunar Year End:</span>
              <span>The last month of the lunar calendar is considered less auspicious</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold">Clash Days:</span>
              <span>Days when the zodiac signs of the couple clash with the day's energy</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Quick Tips */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="text-rose-500" />
            Quick Tips for Success
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-rose-50 rounded-lg">
              <h3 className="font-semibold mb-2">Consider Both Calendars</h3>
              <p>Look at both lunar and solar calendars when selecting your date</p>
            </div>
            <div className="p-4 bg-rose-50 rounded-lg">
              <h3 className="font-semibold mb-2">Consult an Expert</h3>
              <p>Consider working with a Feng Shui master for personalized guidance</p>
            </div>
            <div className="p-4 bg-rose-50 rounded-lg">
              <h3 className="font-semibold mb-2">Balance is Key</h3>
              <p>Aim for dates that balance both partners' elements and energies</p>
            </div>
            <div className="p-4 bg-rose-50 rounded-lg">
              <h3 className="font-semibold mb-2">Trust Your Intuition</h3>
              <p>Choose a date that feels right for both you and your partner</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FengShuiInfo;