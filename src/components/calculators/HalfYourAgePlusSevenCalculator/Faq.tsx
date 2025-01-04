import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CircleHelp  } from 'lucide-react';

const HalfAgePlusSevenFaq = () => {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2">
          <CircleHelp className="text-blue-500" />
          <CardTitle>Frequently Asked Questions</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="space-y-2">
          <AccordionItem value="origin">
            <AccordionTrigger>Where did the "Half Age Plus Seven" rule come from?</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <p>The rule first appeared in print in 1901 in Max O'Rell's book "Her Royal Highness Woman." It was originally presented as a formula for calculating the ideal age of a man's wife. Over time, it evolved into a general dating guideline and became part of popular culture.</p>
                <p>The rule gained widespread recognition in French society as "L'Âge de la Moitié Plus Sept" before spreading to other cultures. Today, it's referenced globally as a quick way to determine socially acceptable age differences in relationships.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="scientific">
            <AccordionTrigger>Is there any scientific basis to this rule?</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <p>While the rule isn't based on scientific research, it does align with some psychological and developmental principles:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>It accounts for the fact that people mature at different rates during different life stages</li>
                  <li>It reflects the importance of being at similar life stages for relationship compatibility</li>
                  <li>It considers the role of power dynamics and life experience in relationships</li>
                  <li>It roughly corresponds to social psychology findings about age-related development and relationship success</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="accuracy">
            <AccordionTrigger>How accurate is the calculator for modern dating?</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <p>The calculator provides a general guideline rather than strict rules. Its accuracy depends on several factors:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>It works best for adults in their mid-20s and older</li>
                  <li>It becomes less relevant as people age, particularly after 50</li>
                  <li>It may be too restrictive for younger adults (18-24)</li>
                  <li>Modern dating often involves wider age ranges than the rule suggests</li>
                </ul>
                <p className="text-sm italic mt-2">Consider it a starting point rather than a definitive answer for relationship compatibility.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="gender">
            <AccordionTrigger>Does the rule apply differently to different genders?</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <p>Originally, the rule was created with heterosexual relationships in mind, specifically for men. However, modern application is gender-neutral and can be applied to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>All gender identities</li>
                  <li>Any sexual orientation</li>
                  <li>Any type of romantic relationship</li>
                </ul>
                <p>Social acceptance of age gaps may still vary based on gender, but the mathematical rule itself is applied equally.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="exceptions">
            <AccordionTrigger>Are there exceptions to the rule?</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <p>Yes, there are several situations where the rule might not apply:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Both partners are over 30 with significant life experience</li>
                  <li>Cultural contexts where age gaps are more accepted</li>
                  <li>Relationships where both partners are seniors</li>
                  <li>Situations where both partners are highly mature for their age</li>
                </ul>
                <p className="text-sm italic mt-2">The key is ensuring both partners are consenting adults at similar maturity levels.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="legal">
            <AccordionTrigger>How does this rule relate to legal age of consent?</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <p>The "Half Age Plus Seven" rule is a social guideline, not a legal framework. Important points:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Always follow local laws regarding age of consent</li>
                  <li>The rule should never be used to justify relationships with minors</li>
                  <li>Legal age of consent takes precedence over this social rule</li>
                  <li>The rule is most applicable to adults dating other adults</li>
                </ul>
                <p className="font-medium mt-2">Remember: Legal compliance is always more important than social guidelines.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="modern">
            <AccordionTrigger>How relevant is this rule in modern dating?</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <p>The rule's relevance in modern dating varies:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Useful as a general guideline for dating app age ranges</li>
                  <li>Helpful for evaluating social acceptance of age gaps</li>
                  <li>May not reflect changing attitudes toward age differences</li>
                  <li>More flexible interpretation in contemporary relationships</li>
                </ul>
                <p>Modern dating emphasizes compatibility based on values, goals, and emotional connection more than strict age guidelines.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="psychology">
            <AccordionTrigger>What psychological factors should I consider beyond age?</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <p>Several psychological factors are important when considering relationship compatibility:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Emotional maturity and intelligence</li>
                  <li>Life goals and values alignment</li>
                  <li>Communication styles and conflict resolution</li>
                  <li>Personal growth and development stage</li>
                  <li>Family dynamics and social support</li>
                </ul>
                <p className="text-sm italic mt-2">These factors often matter more than numerical age differences for relationship success.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="culture">
            <AccordionTrigger>How do different cultures view this rule?</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <p>Cultural perspectives on age differences vary significantly:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Western cultures tend to follow this rule more strictly</li>
                  <li>Some Asian cultures focus more on social status than age</li>
                  <li>Traditional societies may accept larger age gaps</li>
                  <li>Urban, modern societies are becoming more flexible</li>
                </ul>
                <p>Consider your cultural context when applying this rule to relationship decisions.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default HalfAgePlusSevenFaq;