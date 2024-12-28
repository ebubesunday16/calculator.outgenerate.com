
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Cake, HelpCircle } from 'lucide-react';

const CakeFaq = () => {
  const faqs = [
    {
      category: "Calculator Usage",
      questions: [
        {
          q: "How accurate is the cake cost calculator?",
          a: "Our calculator provides estimates based on national averages and common pricing factors. Actual prices may vary based on your specific location and baker. We recommend using this as a starting point for budgeting and consulting with local bakers for exact quotes."
        },
        {
          q: "Why does the price change so much when I add tiers?",
          a: "Each additional tier requires not only more ingredients but also significantly more labor for assembly, support structure, and decoration. Tiers also increase complexity in transportation and setup."
        },
        {
          q: "Should I select half or full servings?",
          a: "Half servings are often sufficient for wedding cakes since not all guests will eat cake and many will only take a small piece. However, if your cake is the only dessert or you know your guests love cake, consider full servings."
        }
      ]
    },
    {
      category: "Ordering & Planning",
      questions: [
        {
          q: "How far in advance should I order my wedding cake?",
          a: "Most professional bakers recommend ordering your wedding cake 6-8 months before your wedding date. For peak wedding season (summer months), consider booking even earlier. This allows time for design consultations, tastings, and ensures your preferred baker's availability."
        },
        {
          q: "What should I bring to my cake consultation?",
          a: "Bring inspiration photos, your color scheme, invitation samples, and any specific design elements you want to incorporate. Also, know your approximate guest count, budget, and any dietary restrictions."
        },
        {
          q: "Do I need to order extra servings?",
          a: "It's recommended to order 10-15% extra servings to account for unexpected guests, larger portions, or to save pieces for people who couldn't attend. Some couples also like to save the top tier for their first anniversary."
        }
      ]
    },
    {
      category: "Design & Flavors",
      questions: [
        {
          q: "What's the difference between buttercream and fondant?",
          a: "Buttercream is a creamy, soft frosting that offers a more traditional look and taste. Fondant is a smooth, firm sugar paste that creates a polished, modern appearance. Fondant typically costs more but provides a perfect canvas for intricate designs and holds up better in warm weather."
        },
        {
          q: "Can I mix different flavors in each tier?",
          a: "Yes! Many couples choose different flavors for each tier to offer variety to their guests. Just note that having multiple flavors might increase the overall cost compared to having the same flavor throughout."
        },
        {
          q: "How do I choose the right size cake?",
          a: "Consider your guest count first, then factor in whether you're serving full or half portions. Also think about if the cake is the only dessert or part of a larger dessert table. Our calculator can help determine the appropriate size based on these factors."
        }
      ]
    },
    {
      category: "Special Requirements",
      questions: [
        {
          q: "Can wedding cakes be made allergen-free?",
          a: "Yes, most professional bakers can accommodate common allergies and dietary restrictions like gluten-free, nut-free, or dairy-free. However, these modifications usually increase the cost and should be discussed early in the planning process."
        },
        {
          q: "How do you handle outdoor weddings?",
          a: "For outdoor weddings, consider weather-resistant options like fondant over buttercream. Discuss setup timing and temperature control with your baker. Some venues provide climate-controlled spaces for the cake until serving time."
        },
        {
          q: "What if I need to change my order details?",
          a: "Most bakers accommodate minor changes up to a certain point before the wedding. However, significant changes to design, size, or flavors may incur additional costs. Check your contract for the baker's policy on changes."
        }
      ]
    },
    {
      category: "Delivery & Setup",
      questions: [
        {
          q: "Is delivery included in the price?",
          a: "Delivery is typically an additional cost and varies based on distance and setup complexity. Our calculator includes an option to add delivery costs to your estimate. Professional delivery is strongly recommended for tiered cakes."
        },
        {
          q: "How is the cake transported safely?",
          a: "Professional bakers use specialized boxes and vehicles with climate control. Tiered cakes are often assembled on-site to ensure safe transportation. This is why delivery fees include not just transport but also setup time."
        },
        {
          q: "What happens if there's damage during delivery?",
          a: "Reputable bakers carry insurance and have contingency plans for emergencies. Discuss this during consultations and ensure your contract covers these scenarios. Most bakers are skilled at quick repairs and touch-ups on-site."
        }
      ]
    }
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-serif flex items-center justify-center gap-3">
          <HelpCircle className="h-8 w-8 text-pink-400" />
          Frequently Asked Questions
          <Cake className="h-8 w-8 text-pink-400" />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Accordion type="multiple" className="space-y-6">
          {faqs.map((category, idx) => (
            <Card key={idx} className="border border-pink-100">
              <CardHeader>
                <CardTitle className="text-xl text-pink-600">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, faqIdx) => (
                    <AccordionItem key={faqIdx} value={`${idx}-${faqIdx}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default CakeFaq;