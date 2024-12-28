import { 
  HelpCircle, 
  ChevronDown,
  Calculator,
  Calendar,
  Heart
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const NumerologyFAQ = () => {
  const faqCategories = [
    {
      title: "Basic Numerology Questions",
      icon: <Calculator className="w-5 h-5" />,
      questions: [
        {
          q: "What is wedding date numerology?",
          a: "Wedding date numerology is the practice of using numerical calculations based on birth dates and potential wedding dates to determine the most auspicious day for a marriage ceremony. It's rooted in Pythagorean numerology and believes that numbers carry specific energies and vibrations that can influence life events."
        },
        {
          q: "How accurate is numerology for wedding dates?",
          a: "While numerology is considered an ancient spiritual practice, it should be viewed as one of many tools in choosing your wedding date. Many couples find it helpful in conjunction with practical considerations like venue availability, weather, and guest convenience. The accuracy depends on personal beliefs and experiences with numerological principles."
        },
        {
          q: "Do I need to be spiritual to use numerology?",
          a: "No, you don't need to be spiritual to use numerology. Many couples use it as an interesting way to narrow down potential dates or add special meaning to their chosen date. You can appreciate the mathematical patterns and symbolic meanings without necessarily subscribing to the spiritual aspects."
        }
      ]
    },
    {
      title: "Calculations and Numbers",
      icon: <Calculator className="w-5 h-5" />,
      questions: [
        {
          q: "How do I calculate my life path number?",
          a: "To calculate your life path number, reduce your birth date to single digits. For example, if born on September 15, 1990: September (9) + 15 (1+5=6) + 1990 (1+9+9+0=19, 1+9=10, 1+0=1) = 16, then 1+6 = 7. Your life path number would be 7."
        },
        {
          q: "What's the significance of my marriage number?",
          a: "Your marriage number (the sum of both partners' life path numbers reduced to a single digit) represents the core energy of your relationship. It indicates the primary themes and challenges you'll face together, as well as the strengths you bring to the partnership."
        },
        {
          q: "Why are numbers 4 and 6 considered ideal for weddings?",
          a: "Number 4 represents stability, foundation, and solid structure - essential qualities for a lasting marriage. Number 6 is considered the number of love, harmony, and domestic bliss. Together, these numbers create an energy that supports long-lasting, harmonious partnerships."
        }
      ]
    },
    {
      title: "Date Selection Process",
      icon: <Calendar className="w-5 h-5" />,
      questions: [
        {
          q: "Should I only consider weekend dates for my wedding?",
          a: "While weekends (Friday-Sunday) are most conventional for practical reasons, numerology doesn't restrict dates to weekends. However, our calculator suggests weekend dates by default since these are typically more convenient for most couples and guests."
        },
        {
          q: "What if my ideal numerological date isn't practical?",
          a: "If your ideal date isn't practical, look for alternative dates with similar numerical values or ones that reduce to favorable numbers (4 or 6). Remember that numerology is just one factor - practical considerations like venue availability, weather, and guest attendance are equally important."
        },
        {
          q: "Are there any dates I should absolutely avoid?",
          a: "In numerology, dates that reduce to 7 (which represents isolation) or 9 (which represents endings) are generally less favorable for weddings. However, if these numbers have special significance to you personally, they might still be appropriate."
        }
      ]
    },
    {
      title: "Using Our Calculator",
      icon: <Heart className="w-5 h-5" />,
      questions: [
        {
          q: "How does your wedding date calculator work?",
          a: "Our calculator combines several numerological calculations: your life path numbers, marriage number, and universal day numbers of potential dates. It then suggests dates that align well with these calculations, focusing on weekends and dates that reduce to favorable numbers like 4 and 6."
        },
        {
          q: "What information do I need to use the calculator?",
          a: "You'll need both partners' full birth dates. If you have a specific wedding date in mind, you can input that too for analysis. Names are optional but help personalize the results."
        },
        {
          q: "Can I use the calculator multiple times with different dates?",
          a: "Yes! We encourage trying different dates to compare their numerological significance. This can help you narrow down your options and find the most auspicious date that also works practically."
        }
      ]
    },
    {
      title: "Common Concerns",
      icon: <HelpCircle className="w-5 h-5" />,
      questions: [
        {
          q: "What if my partner and I have conflicting numbers?",
          a: "Conflicting numbers aren't necessarily negative - they can represent balance and complementary energies. Focus on finding dates that harmonize with your marriage number rather than individual life path numbers."
        },
        {
          q: "Can numerology predict the success of my marriage?",
          a: "No, numerology cannot predict marriage success. It's a tool for understanding potential energies and influences, but successful marriages depend on communication, commitment, and mutual respect - not numbers alone."
        },
        {
          q: "What if I'm skeptical about numerology?",
          a: "It's perfectly fine to be skeptical! You can use our calculator as one of many tools in your wedding planning process. Take what resonates with you and leave what doesn't. The most important thing is choosing a date that feels right for you and your partner."
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-purple-500" />
            <CardTitle>Frequently Asked Questions</CardTitle>
          </div>
          <CardDescription>
            Common questions about wedding date numerology and our calculator
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {faqCategories.map((category, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center gap-2 mb-4">
                {category.icon}
                <h3 className="text-lg font-medium">{category.title}</h3>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                    <AccordionTrigger className="text-left">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default NumerologyFAQ;