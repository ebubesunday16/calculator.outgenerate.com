import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertCircle, Wine,  Calculator, DollarSign, Clock, Users, Martini } from "lucide-react";

const WeddingAlcoholFaq = () => {
  const faqCategories = [
    {
      icon: <Calculator className="w-5 h-5" />,
      title: "Using the Calculator",
      questions: [
        {
          q: "How accurate is the wedding alcohol calculator?",
          a: "Our calculator uses industry-standard formulas and real-world data from wedding professionals. It accounts for variables like event duration, guest preferences, and seasonal factors. While it provides a solid estimate, we recommend adding a 10% buffer to account for unexpected variables."
        },
        {
          q: "Why do guest drinking preferences matter?",
          a: "Guest preferences significantly impact the types and quantities of alcohol needed. For example, if your guests strongly prefer beer over wine, stocking an equal amount of both could lead to waste. Our calculator adjusts recommendations based on these preferences to help you stock efficiently."
        },
        {
          q: "How does the season affect calculations?",
          a: "Seasonal preferences typically show that guests drink more beer in summer and more wine in winter. The calculator adjusts ratios accordingly: increasing beer quantities by up to 20% in summer months and wine quantities by up to 20% in winter months."
        }
      ]
    },
    {
      icon: <Wine className="w-5 h-5" />,
      title: "Types of Alcohol",
      questions: [
        {
          q: "What types of wine should I serve?",
          a: "For red wines, popular choices include Cabernet Sauvignon, Pinot Noir, and Merlot. For white wines, consider Sauvignon Blanc, Pinot Grigio, and Chardonnay. We recommend offering at least one red and one white option. For summer weddings, including a rosé is also popular."
        },
        {
          q: "Do I need to serve both domestic and craft beer?",
          a: "While not required, offering both domestic and craft options caters to different preferences. Domestic beers are typically more cost-effective and familiar, while craft beers can add variety. Consider your guest list and budget when deciding the mix."
        },
        {
          q: "What spirits should I include in an open bar?",
          a: "A standard open bar typically includes vodka, gin, rum, whiskey, and tequila. Our calculator helps you determine quantities based on popularity. Premium spirits can be added for an upgraded experience, but they'll increase your budget."
        }
      ]
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Budgeting & Costs",
      questions: [
        {
          q: "How can I reduce alcohol costs without compromising quality?",
          a: "Several strategies can help manage costs: 1) Limit the open bar to cocktail hour and switch to beer/wine only during dinner, 2) Serve prosecco instead of champagne, 3) Choose quality mid-range spirits over premium brands, 4) Take advantage of bulk discounts and buy-back policies from vendors."
        },
        {
          q: "Should I buy extra alcohol just in case?",
          a: "Yes, we recommend purchasing 10% extra to account for spillage, heavy pours, and unexpected consumption. Many vendors offer buy-back policies for unopened bottles, making this a safe strategy. Check vendor policies before purchasing."
        },
        {
          q: "What's typically more cost-effective: hiring a bar service or buying alcohol yourself?",
          a: "Self-purchasing alcohol is typically more cost-effective but requires more planning and coordination. Bar services charge more but handle everything including setup, service, and cleanup. They also usually carry liability insurance, which some venues require."
        }
      ]
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Timing & Service",
      questions: [
        {
          q: "When should I start ordering alcohol for my wedding?",
          a: "Begin planning 2-3 months before the wedding. Place orders 3-4 weeks before the event to ensure availability. For large orders, some vendors require advance notice. Don't forget to arrange delivery or pickup timing with your venue."
        },
        {
          q: "How many bartenders do I need?",
          a: "The general rule is one bartender per 50 guests for full bar service, or one per 75 guests for beer and wine only. For events over 200 guests, consider adding a bar station to prevent long lines."
        },
        {
          q: "What time should I stop serving alcohol?",
          a: "Most venues recommend stopping service 30-60 minutes before the end of the reception. This helps ensure safe departures and gives guests time to arrange transportation if needed."
        }
      ]
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Guest Considerations",
      questions: [
        {
          q: "How do I account for non-drinking guests?",
          a: "Our calculator assumes about 10% of guests won't drink alcohol. Ensure you have attractive non-alcoholic options available, including mocktails, sparkling juices, and premium sodas. This makes non-drinking guests feel equally considered."
        },
        {
          q: "What if I have guests with specific alcohol preferences?",
          a: "Use our calculator's preference sliders to adjust quantities based on your guest list. If you know certain guests prefer specific drinks, you can factor this into your spirits ratio calculations."
        },
        {
          q: "How do I handle underage guests?",
          a: "Work with your bartenders to implement a clear ID checking policy. Consider having special wristbands for guests over 21. Ensure there are plenty of non-alcoholic options available."
        }
      ]
    },
    {
      icon: <Martini className="w-5 h-5" />,
      title: "Signature Cocktails",
      questions: [
        {
          q: "How many signature cocktails should I offer?",
          a: "We recommend offering 2-3 signature cocktails. This provides variety without overwhelming guests or complicating bar service. Consider including both a lighter and a stronger option to appeal to different tastes."
        },
        {
          q: "How do signature cocktails affect overall alcohol quantities?",
          a: "Signature cocktails typically increase spirit usage for their base liquor by 20-30%. Our calculator adjusts spirit quantities based on your number of signature cocktails to ensure you don't run short."
        },
        {
          q: "What makes a good signature cocktail?",
          a: "The best signature cocktails are: 1) Easy to make in large quantities, 2) Use readily available ingredients, 3) Can be partially prepared in advance, 4) Appeal to a broad range of tastes, 5) Reflect your preferences or theme."
        }
      ]
    }
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertCircle className="w-6 h-6" />
          Wedding Bar Planning FAQ
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {faqCategories.map((category, index) => (
          <Card key={index} className="border-none shadow-none">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                {category.icon}
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`${index}-${faqIndex}`}>
                    <AccordionTrigger className="text-left">
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
      </CardContent>
    </Card>
  );
};

export default WeddingAlcoholFaq;