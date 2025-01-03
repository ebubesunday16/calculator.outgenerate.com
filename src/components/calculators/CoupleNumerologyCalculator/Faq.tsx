import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const CoupleNumerologyFaq = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="bg-gradient-to-r from-pink-50 to-purple-50">
        <CardHeader>
          <CardTitle className="text-2xl text-purple-800 flex items-center gap-2">
            <HelpCircle className="text-pink-500" />
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="space-y-4">
            {/* General Questions */}
            <AccordionItem value="what-is-numerology">
              <AccordionTrigger className="text-lg font-medium text-purple-800">
                What exactly is numerology and how does it work for couples?
              </AccordionTrigger>
              <AccordionContent className="text-purple-600 space-y-2">
                <p>
                  Numerology is an ancient practice that studies the spiritual and mystical significance of numbers in our lives. For couples, it analyzes the numerical vibrations derived from:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Both partners' birth dates</li>
                  <li>Full names as given at birth</li>
                  <li>Current names if different from birth names</li>
                  <li>Important dates in the relationship</li>
                </ul>
                <p>
                  These numbers create a mathematical blueprint of your relationship's potential, challenges, and harmony levels.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="accuracy">
              <AccordionTrigger className="text-lg font-medium text-purple-800">
                How accurate is couple numerology?
              </AccordionTrigger>
              <AccordionContent className="text-purple-600">
                <p>
                  Couple numerology should be viewed as a guidance tool rather than absolute prediction. Its accuracy depends on several factors:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Accuracy of birth date and name information provided</li>
                  <li>Proper calculation of all numerological aspects</li>
                  <li>Interpretation by experienced numerologists</li>
                  <li>Understanding that free will and personal growth can influence outcomes</li>
                </ul>
                <p className="mt-2">
                  Many couples find the insights remarkably accurate in describing relationship dynamics, but it's best used alongside other forms of relationship guidance and communication.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Calculator Specific Questions */}
            <AccordionItem value="calculator-use">
              <AccordionTrigger className="text-lg font-medium text-purple-800">
                How should I use the calculator results?
              </AccordionTrigger>
              <AccordionContent className="text-purple-600 space-y-2">
                <p>The calculator results should be used to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Gain insights into relationship dynamics</li>
                  <li>Identify potential areas for growth and development</li>
                  <li>Understand natural strengths in your relationship</li>
                  <li>Guide conversations about relationship goals</li>
                </ul>
                <p>
                  Don't use the results to make major relationship decisions without considering other factors and having open discussions with your partner.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="name-changes">
              <AccordionTrigger className="text-lg font-medium text-purple-800">
                What if one of us has changed our name?
              </AccordionTrigger>
              <AccordionContent className="text-purple-600">
                <p>
                  Both birth names and current legal names carry numerological significance. For the most comprehensive reading:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Use birth name for core personality traits and life path calculations</li>
                  <li>Use current legal name for present and future influence calculations</li>
                  <li>Consider both names' energies in the overall compatibility assessment</li>
                </ul>
                <p className="mt-2">
                  Name changes can influence your numerological profile, potentially affecting compatibility readings over time.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Technical Questions */}
            <AccordionItem value="calculation-method">
              <AccordionTrigger className="text-lg font-medium text-purple-800">
                What calculation method does the calculator use?
              </AccordionTrigger>
              <AccordionContent className="text-purple-600">
                Our calculator uses the Pythagorean system, which is the most widely accepted method in Western numerology. It includes:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Life Path Number: Reducing birth date to a single digit</li>
                  <li>Expression Number: Converting letters to numbers (A=1, B=2, etc.)</li>
                  <li>Soul Urge Number: Analyzing vowels in names</li>
                  <li>Destiny Number: Combining both partners' numbers</li>
                  <li>Compatibility Percentage: Weighted analysis of all factors</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Relationship Questions */}
            <AccordionItem value="incompatible-numbers">
              <AccordionTrigger className="text-lg font-medium text-purple-800">
                What if our numbers show we're incompatible?
              </AccordionTrigger>
              <AccordionContent className="text-purple-600 space-y-2">
                <p>
                  "Incompatible" numbers don't doom a relationship. Consider that:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Challenging number combinations can lead to growth and deeper understanding</li>
                  <li>Conscious effort and communication can overcome numerical challenges</li>
                  <li>Other aspects of compatibility exist beyond numerology</li>
                  <li>Some successful couples have "incompatible" numbers but strong relationships</li>
                </ul>
                <p>
                  Use this information to understand potential challenges and work on them together rather than viewing it as a relationship verdict.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="timing">
              <AccordionTrigger className="text-lg font-medium text-purple-800">
                When is the best time to calculate couple numerology?
              </AccordionTrigger>
              <AccordionContent className="text-purple-600 space-y-2">
                <p>
                  Beneficial times to calculate couple numerology include:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Early in the relationship to understand dynamics</li>
                  <li>Before major relationship milestones (engagement, marriage)</li>
                  <li>During relationship transitions or challenges</li>
                  <li>Annually on significant dates</li>
                  <li>When considering long-term compatibility</li>
                </ul>
                <p>
                  Regular calculations can help track relationship evolution and provide ongoing insights.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Practical Application */}
            <AccordionItem value="improve-compatibility">
              <AccordionTrigger className="text-lg font-medium text-purple-800">
                How can we improve our numerological compatibility?
              </AccordionTrigger>
              <AccordionContent className="text-purple-600 space-y-2">
                <p>
                  While you can't change your core numbers, you can:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Understand and respect your numerical differences</li>
                  <li>Work on balancing conflicting energies</li>
                  <li>Use your numbers' strengths to complement each other</li>
                  <li>Choose favorable dates for important events</li>
                  <li>Consider numerologically harmonious living spaces or shared activities</li>
                </ul>
                <p>
                  Focus on using numerological insights for growth rather than trying to change your fundamental numbers.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="future-predictions">
              <AccordionTrigger className="text-lg font-medium text-purple-800">
                Can numerology predict our relationship's future?
              </AccordionTrigger>
              <AccordionContent className="text-purple-600 space-y-2">
                <p>
                  Numerology provides insights but doesn't definitively predict futures because:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Free will and personal choices influence outcomes</li>
                  <li>Relationships are dynamic and evolving</li>
                  <li>External factors affect relationships beyond numbers</li>
                  <li>Personal growth can change how numbers manifest</li>
                </ul>
                <p>
                  Use numerology as a tool for understanding potential paths and opportunities rather than fixed predictions.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default CoupleNumerologyFaq;