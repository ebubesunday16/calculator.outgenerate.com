import { HelpCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ChaldeanNumerologyFaq = () => {

  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          q: "What is the difference between Chaldean and Pythagorean Numerology?",
          a: `Chaldean Numerology differs from Pythagorean Numerology in several key ways:
          
          1. Number Assignment: Chaldean uses numbers 1-8 (with 9 being sacred), while Pythagorean uses 1-9.
          
          2. Letter Values: Letters are assigned numbers based on their vibrational energy in Chaldean, rather than alphabetical order as in Pythagorean.
          
          3. Accuracy: Many numerologists consider Chaldean to be more accurate and spiritually-aligned due to its ancient origins and vibrational basis.
          
          4. Calculation Method: Chaldean calculations often yield different numbers than Pythagorean for the same name or date.`
        },
        {
          q: "Why is the number 9 considered sacred in Chaldean Numerology?",
          a: `The number 9 is considered sacred in Chaldean Numerology because it represents the highest single-digit number and symbolizes completion and spiritual enlightenment. It's believed to contain the energies of all other numbers (1+2+3+4+5+6+7+8+9=45, 4+5=9). Unlike other numbers, 9 is only used when it naturally occurs in calculations and is never assigned to letters. This treatment reflects its divine status and universal spiritual significance in ancient Chaldean wisdom.`
        },
        {
          q: "Can I use my nickname or legal name for calculations?",
          a: `You can use either name, but each serves a different purpose:

          - Legal Name: Reflects your public persona and life path as recognized by society
          - Birth Name: Contains your original life blueprint and core energies
          - Nickname: Reveals energies you've adopted or aspire to
          
          For the most comprehensive reading, it's recommended to calculate numbers for both your legal name and birth name. If you consistently use a nickname, you can calculate its numbers to understand how it influences your life.`
        }
      ]
    },
    {
      category: "Calculation Questions",
      questions: [
        {
          q: "How do compound numbers work in Chaldean Numerology?",
          a: `Compound numbers in Chaldean Numerology consist of two digits and are reduced to a single digit, except for master numbers. Here's how they work:

          1. Regular Reduction: Most compound numbers are reduced (e.g., 15 = 1+5 = 6)
          2. Master Numbers: 11, 22, and 33 are not reduced
          3. Karmic Numbers: 13, 14, 16, and 19 have special meanings before reduction
          
          Each compound number has its own significance before reduction, adding depth to the interpretation. For example, 15 represents harmony and family before being reduced to 6.`
        },
        {
          q: "What if my calculations consistently yield master numbers?",
          a: `Having multiple master numbers in your numerological profile indicates a highly spiritual and challenging life path. This means:

          1. Enhanced Spiritual Potential: You have access to higher spiritual wisdom
          2. Greater Responsibilities: You're meant to achieve significant things
          3. Increased Challenges: You may face more obstacles for greater growth
          4. Dual Energy: You can operate at both the master number level and its reduced form
          
          It's important to understand that master numbers require maturity to handle their energy effectively.`
        },
        {
          q: "How often should I recalculate my numbers if my name changes?",
          a: `You should recalculate your numbers whenever there's a legal name change (marriage, divorce, legal name change). However:

          1. Keep records of all calculations for different names
          2. Track how the energies shift with each name change
          3. Consider both previous and current names' influence
          4. Recalculate partnership numbers if applicable
          
          Name changes can significantly impact your numerological profile and life path energies.`
        }
      ]
    },
    {
      category: "Interpretation Questions",
      questions: [
        {
          q: "How do conflicting numbers in my profile work together?",
          a: `Conflicting numbers in your numerological profile create a dynamic tension that can be both challenging and beneficial:

          1. Balance: They often require you to balance opposing energies
          2. Growth: The conflict creates opportunities for personal development
          3. Flexibility: You learn to adapt and use different energies as needed
          4. Integration: Over time, you can learn to blend these energies
          
          For example, having a practical 4 Destiny Number with a freedom-loving 5 Soul Urge Number teaches balance between stability and adventure.`
        },
        {
          q: "What role do recurring numbers play in Chaldean Numerology?",
          a: `Recurring numbers in Chaldean Numerology are significant indicators:

          1. Emphasis: They strengthen the energy of that number in your life
          2. Lessons: They may indicate areas requiring special attention
          3. Gifts: They can represent enhanced abilities or talents
          4. Karma: They might relate to past life experiences
          
          Pay special attention to how these numbers manifest in different aspects of your numerological profile.`
        },
        {
          q: "How do birth date and name numbers interact?",
          a: `Birth date and name numbers create a complex interplay of energies:

          1. Birth Date Numbers (Destiny): Represent your life path and inherent traits
          2. Name Numbers: Show how you express and develop these traits
          3. Compatibility: Harmonious numbers enhance each other
          4. Challenges: Conflicting numbers create growth opportunities
          
          Understanding this interaction helps you navigate your life path more effectively.`
        }
      ]
    },
    {
      category: "Practical Application Questions",
      questions: [
        {
          q: "How can I use Chaldean Numerology in daily life?",
          a: `Chaldean Numerology can be practically applied in many ways:

          1. Decision Making:
          - Choose favorable dates for important events
          - Select compatible business or project names
          - Time major life changes
          
          2. Personal Growth:
          - Understand your strengths and challenges
          - Work with your natural cycles
          - Develop underdeveloped traits
          
          3. Relationships:
          - Understand compatibility with others
          - Improve communication
          - Navigate relationship dynamics
          
          4. Career Planning:
          - Choose aligned career paths
          - Time career moves
          - Develop necessary skills`
        },
        {
          q: "Can Chaldean Numerology help with timing decisions?",
          a: `Yes, Chaldean Numerology can be very helpful for timing decisions through:

          1. Personal Year Numbers:
          - Calculate your current year's energy
          - Understand yearly cycles and opportunities
          - Plan major life events
          
          2. Monthly and Daily Numbers:
          - Identify favorable days for specific activities
          - Understand monthly themes
          - Navigate challenging periods
          
          3. Universal Numbers:
          - Consider broader cosmic influences
          - Align with collective energies
          - Choose optimal timing for projects`
        },
        {
          q: "How reliable are relationship compatibility calculations?",
          a: `Relationship compatibility calculations in Chaldean Numerology provide insights but shouldn't be the only factor:

          1. Multiple Factors:
          - Consider all numbers in both profiles
          - Look at harmony and growth opportunities
          - Account for personal development levels
          
          2. Practical Application:
          - Use as a guide for understanding dynamics
          - Identify potential challenges early
          - Develop strategies for harmony
          
          3. Limitations:
          - Free will affects all relationships
          - Personal growth can transform compatibility
          - Other factors also influence relationships`
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card className="bg-gradient-to-br from-purple-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-purple-600" />
            Frequently Asked Questions About Chaldean Numerology
          </CardTitle>
        </CardHeader>
      </Card>

      {faqs.map((category, categoryIndex) => (
        <Card key={categoryIndex} className="bg-white">
          <CardHeader>
            <CardTitle className="text-xl text-purple-700">
              {category.category}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {category.questions.map((faq, index) => (
                <AccordionItem key={`${categoryIndex}-${index}`} value={`${categoryIndex}-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 whitespace-pre-line">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ChaldeanNumerologyFaq;