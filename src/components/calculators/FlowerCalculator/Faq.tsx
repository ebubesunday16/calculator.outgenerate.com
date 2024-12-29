import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

// Type for FAQ items
interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
  category: string;
}

const WeddingFlowerFAQ = () => {
  // FAQ Data organized by categories
  const faqItems: FAQItem[] = [
    // Calculator Usage
    {
      category: "Calculator Usage",
      question: "How accurate is the wedding flower cost calculator?",
      answer: "Our calculator provides estimates based on real market data from 2024 and industry standards. The accuracy depends on various factors including your location and specific requirements. We recommend using it as a starting point for budgeting and consulting with local florists for exact quotes. The calculator factors in seasonal variations, style preferences, and venue size to provide comprehensive estimates."
    },
    {
      category: "Calculator Usage",
      question: "Why does my estimated cost change with different seasons?",
      answer: "Flower costs vary significantly by season due to availability and demand. Spring weddings (peak season) typically see a 20% increase in costs due to high demand and popular blooms like peonies. Winter weddings might see lower costs but have limited flower choices. The calculator adjusts prices based on these seasonal factors to provide more accurate estimates."
    },
    {
      category: "Calculator Usage",
      question: "What does the greenery ratio mean in the calculator?",
      answer: "The greenery ratio represents the proportion of greenery to flowers in your arrangements. A higher greenery ratio (e.g., 40%) means more foliage and fewer flowers, which typically reduces costs while maintaining visual impact. This setting helps you understand how adjusting the flower-to-greenery balance can affect your budget."
    },

    // Budget Questions
    {
      category: "Budgeting",
      question: "What percentage of my wedding budget should go to flowers?",
      answer: "Industry standards suggest allocating 10-15% of your total wedding budget to flowers. For example, if your total budget is $30,000, consider spending $3,000-$4,500 on flowers. However, this can vary based on your priorities and specific vision. Our calculator will alert you if your flower budget exceeds the recommended percentage."
    },
    {
      category: "Budgeting",
      question: "Which flower elements typically cost the most?",
      answer: (
        <div className="space-y-2">
          <p>The most expensive floral elements typically include:</p>
          <ul className="list-disc pl-6">
            <li>Ceremony arch/chuppah decorations ($600-$1,200+)</li>
            <li>Large-scale installations or flower walls ($1,000-$3,000+)</li>
            <li>Premium bridal bouquets ($250-$500+)</li>
            <li>Elaborate centerpieces ($150-$250 per table)</li>
            <li>Full venue decoration packages ($2,000-$5,000+)</li>
          </ul>
        </div>
      )
    },
    {
      category: "Budgeting",
      question: "What additional costs should I consider beyond the calculator's estimate?",
      answer: (
        <div className="space-y-2">
          <p>Consider these additional potential costs:</p>
          <ul className="list-disc pl-6">
            <li>Setup and breakdown fees</li>
            <li>Rental items (vases, arches, stands)</li>
            <li>Specialty flower preservation</li>
            <li>Last-minute replacements</li>
            <li>Additional delivery locations</li>
            <li>Service charges and taxes</li>
            <li>Insurance requirements for venues</li>
          </ul>
        </div>
      )
    },

    // Floral Choices
    {
      category: "Floral Choices",
      question: "What are the most cost-effective wedding flowers?",
      answer: (
        <div className="space-y-2">
          <p>Several beautiful flowers offer great value:</p>
          <ul className="list-disc pl-6">
            <li>Carnations - versatile and long-lasting</li>
            <li>Chrysanthemums - full blooms with impact</li>
            <li>Alstroemeria - multiple blooms per stem</li>
            <li>Baby's breath - great filler flower</li>
            <li>Sunflowers - large impact for cost</li>
            <li>Local seasonal wildflowers</li>
            <li>Mixed greenery - creates volume</li>
          </ul>
        </div>
      )
    },
    {
      category: "Floral Choices",
      question: "How do different flower styles affect the overall cost?",
      answer: "The calculator considers three style levels: Minimal (emphasizing greenery and simple blooms), Moderate (balanced mix), and Luxurious (premium flowers and complex designs). Luxurious styles can cost 50-100% more than minimal styles due to flower choice, design complexity, and labor requirements. Each style level affects both the flower types available and the intricacy of arrangements."
    },

    // Planning & Logistics
    {
      category: "Planning & Logistics",
      question: "When should I book my wedding florist?",
      answer: "Book your florist 9-12 months before your wedding date, especially for peak season weddings (spring/summer). Popular florists often book up quickly, and early booking gives you time to plan seasonal flower choices, conduct trials, and make adjustments. The calculator can help you understand costs before meeting with florists."
    },
    {
      category: "Planning & Logistics",
      question: "How does venue size impact flower costs?",
      answer: "Venue size affects costs in several ways: larger venues require more decorative elements to fill the space, may need multiple focal points, and often involve higher installation and labor costs. The calculator accounts for venue size by adjusting quantities of arrangements and installation complexity, helping you budget accordingly."
    },
    {
      category: "Planning & Logistics",
      question: "What's the difference between 'minimal' and 'luxurious' styles in the calculator?",
      answer: (
        <div className="space-y-2">
          <p><strong>Minimal Style:</strong></p>
          <ul className="list-disc pl-6 mb-2">
            <li>More greenery, fewer flowers</li>
            <li>Simple, classic arrangements</li>
            <li>Standard seasonal blooms</li>
            <li>Basic installation needs</li>
          </ul>
          <p><strong>Luxurious Style:</strong></p>
          <ul className="list-disc pl-6">
            <li>Premium and rare flowers</li>
            <li>Complex, layered designs</li>
            <li>Multiple flower varieties</li>
            <li>Elaborate installations</li>
            <li>Higher flower-to-greenery ratio</li>
          </ul>
        </div>
      )
    },

    // Seasonal Considerations
    {
      category: "Seasonal Considerations",
      question: "Which flowers are available in each season?",
      answer: (
        <div className="space-y-2">
          <p><strong>Spring:</strong> Peonies, tulips, lilacs, cherry blossoms</p>
          <p><strong>Summer:</strong> Roses, sunflowers, dahlias, zinnias</p>
          <p><strong>Fall:</strong> Chrysanthemums, marigolds, dahlias, celosia</p>
          <p><strong>Winter:</strong> Amaryllis, anemones, camellias, winter berries</p>
          <p className="mt-2">The calculator adjusts pricing based on seasonal availability and demand.</p>
        </div>
      )
    },
    {
      category: "Seasonal Considerations",
      question: "How can I save money on wedding flowers?",
      answer: (
        <div className="space-y-2">
          <p>Several effective strategies can help reduce costs:</p>
          <ul className="list-disc pl-6">
            <li>Choose in-season flowers</li>
            <li>Increase greenery ratio (use calculator to see impact)</li>
            <li>Repurpose ceremony flowers at reception</li>
            <li>Focus on key focal points rather than decorating everything</li>
            <li>Consider hardy, long-lasting flowers</li>
            <li>Book during off-peak seasons</li>
            <li>Use potted plants for some decorative elements</li>
          </ul>
        </div>
      )
    }
  ];

  // Group FAQ items by category
  const categories = Array.from(new Set(faqItems.map(item => item.category)));

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-500" />
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent>
          {categories.map((category, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <Accordion type="single" collapsible className="w-full">
                {faqItems
                  .filter(item => item.category === category)
                  .map((item, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
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

export default WeddingFlowerFAQ;