import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, HelpCircle } from 'lucide-react';

const WeddingVenueFaq = () => {
  const faqSections = [
    {
      category: "Venue Costs & Budgeting",
      questions: [
        {
          q: "What's typically included in a wedding venue's base price?",
          a: "Base pricing usually includes the rental of the space for a set number of hours. This may include:\n\n• Basic furniture (tables and chairs)\n• Standard setup and cleanup\n• Parking\n• Basic utilities\n• Access to getting-ready rooms\n\nHowever, venues vary widely in what they include. Some may offer all-inclusive packages with catering and decor, while others provide just the raw space."
        },
        {
          q: "Why do wedding venues cost so much more than regular event spaces?",
          a: "Wedding venues often cost more due to several factors:\n\n• Extended rental times (often 8-12 hours vs. 4 hours for regular events)\n• Special amenities (bridal suites, photo locations)\n• Higher insurance requirements\n• Dedicated wedding coordination staff\n• Premium dates and times\n• Enhanced maintenance and setup requirements"
        },
        {
          q: "How can I save money on my wedding venue?",
          a: "Several strategies can help reduce venue costs:\n\n• Book during off-peak season (typically November-March)\n• Consider a weekday wedding\n• Look for all-inclusive packages that might save money overall\n• Choose a naturally beautiful venue that needs less decoration\n• Book morning or early afternoon time slots\n• Consider non-traditional venues like restaurants, museums, or community spaces"
        }
      ]
    },
    {
      category: "Choosing Your Venue",
      questions: [
        {
          q: "When should I book my wedding venue?",
          a: "Most couples book their venue 12-18 months before their wedding date. Popular venues and peak season dates might require booking even further in advance. Key timing considerations:\n\n• Peak season venues: 18-24 months ahead\n• Off-season dates: 12-15 months ahead\n• Popular venues: As soon as possible\n• Destination weddings: At least 18 months ahead"
        },
        {
          q: "What questions should I ask when touring venues?",
          a: "Essential questions include:\n\n• What's included in the rental fee?\n• Are there required or preferred vendors?\n• What's the rain plan for outdoor spaces?\n• How many hours are included?\n• What's the payment schedule?\n• Are there noise restrictions?\n• What's the capacity with a dance floor?\n• Is there a space for getting ready?\n• What's the overtime fee?"
        },
        {
          q: "How do I know if a venue is the right size for my wedding?",
          a: "Consider these factors when evaluating venue size:\n\n• Allow 25-30 square feet per guest for comfortable seating and dancing\n• Account for other elements like buffet tables, band/DJ setup, photo booths\n• Consider flow between ceremony and reception spaces\n• Factor in space for vendor setups (catering, bar service)\n• Remember that too large a space can feel empty"
        }
      ]
    },
    {
      category: "Contracts & Logistics",
      questions: [
        {
          q: "What should be included in my venue contract?",
          a: "Key elements of a venue contract should include:\n\n• Exact date and time of rental\n• Total cost and payment schedule\n• What's included (furniture, setup, etc.)\n• Cancellation and refund policies\n• Insurance requirements\n• Vendor restrictions or requirements\n• Setup and cleanup times\n• Maximum capacity\n• Overtime fees"
        },
        {
          q: "Do I need wedding insurance for my venue?",
          a: "Most venues require liability insurance. Two main types to consider:\n\n• Liability Insurance: Covers property damage and injuries\n• Cancellation Insurance: Covers losses from cancellation due to unforeseen circumstances\n\nTypical costs range from $200-$600 depending on coverage."
        },
        {
          q: "What's the typical payment schedule for wedding venues?",
          a: "Standard payment structure usually includes:\n\n• Deposit: 25-50% to secure the date\n• Second payment: 25% 6 months before\n• Final payment: Remaining balance 2-4 weeks before\n\nSome venues may offer monthly payment plans or different structures."
        }
      ]
    },
    {
      category: "Using Our Calculator",
      questions: [
        {
          q: "How accurate is the venue cost calculator?",
          a: "Our calculator provides estimates based on:\n\n• Real data from thousands of weddings\n• Regional price averages\n• Seasonal adjustments\n• Day-of-week variations\n\nActual prices may vary based on specific venue amenities, packages, and local market conditions. Use it as a starting point for budgeting."
        },
        {
          q: "Why do prices vary so much by state?",
          a: "State price variations reflect:\n\n• Local cost of living\n• Market demand\n• Competition levels\n• Available venue types\n• Average wedding sizes\n• Seasonal factors\n• Local vendor costs"
        },
        {
          q: "How should I use the calculator results?",
          a: "Best practices for using the calculator:\n\n• Use it as a starting point for budget planning\n• Compare multiple scenarios (different seasons, days)\n• Factor in additional costs not included in base pricing\n• Contact venues directly for exact quotes\n• Consider it a general guide rather than an exact price"
        }
      ]
    }
  ];

  return (
    <Card className="w-full max-w-3xl mx-auto mt-8 ">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-pink-700">
          <HelpCircle className="h-6 w-6 text-pink-500" />
          Frequently Asked Questions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="space-y-4">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-2">
              <h3 className="text-lg font-semibold text-pink-700 flex items-center gap-2">
                <Heart className="h-4 w-4 text-pink-500" />
                {section.category}
              </h3>
              {section.questions.map((faq, faqIndex) => (
                <AccordionItem 
                  key={faqIndex} 
                  value={`${sectionIndex}-${faqIndex}`}
                  className="border border-pink-200 rounded-lg mb-2 px-4"
                >
                  <AccordionTrigger className="text-pink-800 hover:text-pink-600 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {faq.a.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="mb-4 last:mb-0">
                        {paragraph.startsWith('•') ? (
                          <ul className="list-disc pl-4">
                            {paragraph.split('\n').map((item, j) => (
                              <li key={j} className="mb-1">
                                {item.replace('• ', '')}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          paragraph
                        )}
                      </p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </div>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default WeddingVenueFaq;