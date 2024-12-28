import { ChevronDown, ChevronUp, Sparkles, Calendar, BookOpen, Gem, Compass } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FengShuiFaq = () => {
  const categories = [
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Date Selection",
      questions: [
        {
          q: "Why is choosing an auspicious wedding date important in Feng Shui?",
          a: "In Feng Shui philosophy, selecting an auspicious date aligns your wedding with positive cosmic energy (qi). This alignment is believed to bring harmony, prosperity, and good fortune to your marriage. The date of your wedding is considered to set the foundational energy for your entire marriage."
        },
        {
          q: "What makes a date lucky in Feng Shui?",
          a: "A date is considered lucky when it harmoniously combines several elements: your Chinese zodiac signs, the current year's energy, favorable lunar phases, and auspicious numbers. The best dates often fall on days with balanced yin and yang energy and positive connections to both partners' birth charts."
        },
        {
          q: "Should I avoid any specific dates?",
          a: "Yes, in Chinese tradition, it's advisable to avoid the Ghost Month (usually falling in August), dates with clashing elements to your zodiac signs, and dates during Mercury retrograde. Major Chinese holidays and the Lunar New Year period are also typically avoided."
        }
      ]
    },
    {
      icon: <Gem className="w-5 h-5" />,
      title: "Zodiac Compatibility",
      questions: [
        {
          q: "How do Chinese zodiac signs affect wedding date selection?",
          a: "Your Chinese zodiac signs influence which dates will be most harmonious for your union. Some signs naturally complement each other (like Dragon and Rat), while others may need special consideration to ensure balance. The wedding date should ideally support both partners' zodiac energies."
        },
        {
          q: "What if our zodiac signs are not compatible?",
          a: "If your zodiac signs aren't naturally compatible, don't worry! You can select dates that help balance your energies and incorporate specific Feng Shui elements into your wedding décor and ceremony to create harmony. The right date can help mitigate any challenging aspects between your signs."
        }
      ]
    },
    {
      icon: <Compass className="w-5 h-5" />,
      title: "Feng Shui Elements",
      questions: [
        {
          q: "What are the Five Elements and how do they affect wedding dates?",
          a: "The Five Elements in Feng Shui are Wood, Fire, Earth, Metal, and Water. Each date carries the energy of certain elements, and ideally, your wedding date should contain elements that support both partners' zodiac signs. For example, if you're a Wood sign, dates with Water energy can be particularly beneficial as Water nourishes Wood."
        },
        {
          q: "How can I enhance the Feng Shui of my chosen wedding date?",
          a: "Once you've selected an auspicious date, you can enhance its energy by: choosing an appropriate time of day (avoiding conflict hours), selecting decorations that represent beneficial elements, orienting the ceremony space according to favorable directions, and wearing colors that complement the day's energy."
        }
      ]
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Using Our Calculator",
      questions: [
        {
          q: "How does the Feng Shui Wedding Date Calculator work?",
          a: "Our calculator combines traditional Feng Shui principles with modern convenience. It analyzes multiple factors including: your Chinese zodiac signs and their compatibility, auspicious numbers in the Gregorian calendar, favorable months based on the Chinese calendar, and weekend availability for practical modern wedding planning."
        },
        {
          q: "What information do I need to use the calculator?",
          a: "You'll need: both partners' birth years (to determine zodiac signs), your preferred wedding year and month, and any specific dates you need to avoid. The calculator will then generate the most auspicious dates that align with both traditional Feng Shui principles and modern wedding planning needs."
        },
        {
          q: "How should I interpret the calculator's results?",
          a: "The calculator provides a ranked list of auspicious dates, with #1 being the most favorable. Each date is selected based on zodiac compatibility, element balance, and practical considerations like falling on a weekend. The compatibility analysis also helps you understand the energy dynamics between your zodiac signs."
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="text-rose-500" />
            Frequently Asked Questions
          </CardTitle>
          <CardDescription className="text-lg">
            Everything you need to know about Feng Shui wedding date selection
          </CardDescription>
        </CardHeader>
        <CardContent>
          {categories.map((category, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <h3 className="flex items-center gap-2 text-xl font-semibold mb-4 text-rose-600">
                {category.icon}
                {category.title}
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((item, qIndex) => (
                  <AccordionItem key={qIndex} value={`item-${index}-${qIndex}`}>
                    <AccordionTrigger className="text-lg font-medium">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Additional Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Calendar className="text-rose-500 w-5 h-5" />
              <span>Chinese Lunar Calendar</span>
            </li>
            <li className="flex items-center gap-2">
              <Gem className="text-rose-500 w-5 h-5" />
              <span>Chinese Zodiac Compatibility Guide</span>
            </li>
            <li className="flex items-center gap-2">
              <Compass className="text-rose-500 w-5 h-5" />
              <span>Feng Shui Elements Calculator</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default FengShuiFaq;