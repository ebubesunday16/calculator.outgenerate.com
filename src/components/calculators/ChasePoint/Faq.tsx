import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const ChasePointsFAQ = () => {
  return (
    <Card className="w-full max-w-3xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What are Chase Ultimate Rewards® points worth?
            </AccordionTrigger>
            <AccordionContent>
              Chase Ultimate Rewards® points have different values depending on how you redeem them:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>1 cent per point for cash back and gift cards</li>
                <li>1.25 cents per point when booking travel through Chase Portal (with Sapphire Preferred®)</li>
                <li>1.5 cents per point when booking travel through Chase Portal (with Sapphire Reserve®)</li>
                <li>Up to 2+ cents per point when transferring to travel partners</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              How can I maximize the value of my Chase points?
            </AccordionTrigger>
            <AccordionContent>
              <p>To get the most value from your points:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Transfer to airline partners for international business/first class flights</li>
                <li>Book World of Hyatt stays through point transfers</li>
                <li>Look for transfer partner sweet spots and promotions</li>
                <li>Compare prices between Chase portal and transfer partners</li>
                <li>Avoid cash back redemptions when possible</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              How long do Chase point transfers take?
            </AccordionTrigger>
            <AccordionContent>
              Transfer times vary by partner:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Instant: United, Southwest, British Airways, Air France/KLM</li>
                <li>1-2 days: World of Hyatt, Marriott Bonvoy</li>
                <li>Up to 7 days: Some international partners</li>
              </ul>
              <p className="mt-2">Note: Transfer times are typically shorter but can vary during peak periods.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Can I transfer Chase points to someone else?
            </AccordionTrigger>
            <AccordionContent>
              Yes, but with restrictions:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>You can transfer to one household member who is an authorized user</li>
                <li>The authorized user must have their own Chase Ultimate Rewards card</li>
                <li>Transfers are free and instant</li>
                <li>Once transferred, points cannot be transferred back</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Do Chase Ultimate Rewards® points expire?
            </AccordionTrigger>
            <AccordionContent>
              No, Chase Ultimate Rewards® points do not expire as long as your account remains open and in good standing. However, you will lose your points if you:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Close your credit card account</li>
                <li>Your account becomes severely delinquent</li>
                <li>Chase suspects fraudulent activity</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default ChasePointsFAQ;