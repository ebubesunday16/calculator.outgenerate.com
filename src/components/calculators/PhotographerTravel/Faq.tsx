import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TravelCalculatorFAQ = () => {
  const faqs = [
    {
      question: "How is the mileage cost calculated?",
      answer: "Mileage cost is calculated by multiplying the total distance by the mileage rate. The default rate is set to $0.65 per mile, which is based on standard business travel rates. This covers fuel costs, vehicle wear and tear, and basic maintenance. You can adjust this rate based on your specific needs or current IRS standard mileage rates."
    },
    {
      question: "What does the per diem rate cover?",
      answer: "The per diem rate covers daily expenses such as meals, incidentals, and other small expenses incurred during travel. The default rate is set to $50 per day, but this can be adjusted based on your location and specific needs. For overnight trips, the per diem is multiplied by the number of nights stayed."
    },
    {
      question: "When should I include lodging costs?",
      answer: "Include lodging costs when the travel distance or shoot duration requires an overnight stay. Consider factors such as early morning shoot times, multiple-day events, or locations that are too far for same-day return travel. The calculator allows you to specify the number of nights and rate per night to accurately estimate accommodation expenses."
    },
    {
      question: "How should I handle destination parking fees?",
      answer: "Enter all expected parking fees, including both at your destination and any intermediate stops. This might include hotel parking, venue parking, or airport parking if flying. It's recommended to research parking rates in advance and add a small buffer for unexpected parking needs."
    },
    {
      question: `When should I consider air travel vs. driving?`,
      answer: `Consider air travel when:
      - The destination is over 300 miles away
      - Time is a crucial factor
      - The cost of driving (including overnight stays) exceeds flight costs
      - Multiple days of driving would be required
      Remember to include associated costs like airport parking, rental cars, and additional transit time.`
    },
    {
      question: `What should be included in additional fees?`,
      answer: `Additional fees might include:
      - Toll roads and bridges
      - Equipment shipping costs
      - Public transportation or taxi/rideshare services
      - Location access fees
      - Additional insurance costs for travel
      - Any other travel-related expenses not covered in other categories`
    },
    {
      question: "How should I handle multiple-day shoots?",
      answer: `For multiple-day shoots:
      - Include lodging for each night
      - Calculate per diem for each full day
      - Consider whether you need different rates for shooting days vs. travel days
      - Account for any equipment storage needs
      - Include any rest days between shooting days if applicable`
    },
    {
      question: "Should I charge clients for travel time?",
      answer: `This is a business decision that varies by photographer. Consider:
      - Including a flat rate for travel time beyond a certain distance
      - Charging a percentage of your regular rate for travel time
      - Building travel time costs into your overall pricing structure
      - Setting a minimum travel fee for distances beyond your local area`
    },
    {
      question: "How do I handle international travel expenses?",
      answer: `For international travel:
      - Include passport/visa fees if applicable
      - Consider currency exchange rates and fees
      - Account for international driving permits if needed
      - Include additional insurance costs
      - Factor in communication costs (international phone plans)
      - Consider time zone adjustments and recovery time`
    },
    {
      question: "What documentation should I keep for travel expenses?",
      answer: `Maintain records of:
      - All receipts for lodging, transportation, and meals
      - Mileage logs with start/end odometer readings
      - Parking and toll receipts
      - Airline boarding passes and rental car agreements
      - Per diem calculations
      - Any client correspondence regarding travel arrangements
      These records are important for both client billing and tax purposes.`
    }
  ];

  return (
    <Card className="w-full max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default TravelCalculatorFAQ;