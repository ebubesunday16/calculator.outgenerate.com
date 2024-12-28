import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const RSVPFaq = () => {
  const faqs = [
    {
      category: "General RSVP Questions",
      questions: [
        {
          q: "What does RSVP actually mean?",
          a: "RSVP stands for 'Répondez s'il vous plaît,' which is French for 'please respond.' When you receive a wedding invitation with an RSVP request, the couple is asking you to formally indicate whether you will or will not attend their celebration."
        },
        {
          q: "Why is it important to RSVP to a wedding?",
          a: "RSVPing to a wedding is crucial for multiple reasons: it helps the couple plan accurate numbers for catering, seating arrangements, and venue setup; allows them to manage their budget effectively; and shows respect for their planning efforts. Without accurate RSVPs, couples may incur unnecessary expenses or face logistics challenges."
        },
        {
          q: "What information should I include in my RSVP response?",
          a: "Your RSVP response should include: your name(s) exactly as written on the invitation, whether you accept or decline, the number of guests attending (if you were given a plus-one), meal preferences (if requested), and responses to any additional questions about welcome dinners or other events. Always return the RSVP by the deadline provided."
        }
      ]
    },
    {
      category: "Timeline and Deadlines",
      questions: [
        {
          q: "How long should guests be given to RSVP?",
          a: "Guests should typically have 3-4 weeks to RSVP from the time they receive the invitation. For destination weddings, consider giving guests 4-6 weeks to respond, as they'll need more time to arrange travel and accommodations."
        },
        {
          q: "What if I miss the RSVP deadline?",
          a: "If you miss the RSVP deadline, contact the couple immediately. While it's not ideal to respond late, it's better than not responding at all. Be aware that after the deadline, the couple may have already submitted final numbers to vendors, so late accommodations might not be possible."
        },
        {
          q: "When should digital RSVPs be turned off on the wedding website?",
          a: "Digital RSVPs should typically be turned off 2-3 days after the official RSVP deadline. This gives a small buffer for last-minute responses while still maintaining the importance of the deadline. After this point, guests should contact the couple directly."
        }
      ]
    },
    {
      category: "Special Circumstances",
      questions: [
        {
          q: "How should couples handle guests who don't RSVP?",
          a: "For guests who haven't responded by the deadline, follow these steps: 1) Wait about a week after the deadline, 2) Reach out personally via phone call, text, or email, 3) Express enthusiasm about their potential attendance while emphasizing the need for a response, 4) Set a final deadline for their response, typically 1-2 days. If you still don't hear back, assume they're not attending."
        },
        {
          q: "What if circumstances change after sending in an RSVP?",
          a: "If your circumstances change after submitting your RSVP, notify the couple as soon as possible. For a change from 'no' to 'yes,' understand that accommodation might not be possible. For a change from 'yes' to 'no,' give as much notice as possible and send a heartfelt apology."
        },
        {
          q: "How should destination wedding RSVPs be handled differently?",
          a: "Destination wedding RSVPs require more lead time. Send invitations 10-12 weeks before the wedding, with RSVPs due 6-8 weeks before the event. Consider creating a detailed wedding website with travel information, accommodation options, and activities to help guests make informed decisions."
        }
      ]
    },
    {
      category: "Digital vs. Traditional RSVPs",
      questions: [
        {
          q: "Should I offer both digital and traditional RSVP options?",
          a: "Yes, offering both digital and traditional RSVP options is recommended. This accommodates guests of all technological comfort levels and typically results in faster response rates. Ensure your wedding website clearly explains both RSVP methods and include traditional RSVP cards for guests who prefer them."
        },
        {
          q: "What are the benefits of digital RSVPs?",
          a: "Digital RSVPs offer several advantages: immediate response recording, automatic guest count tracking, easier meal preference collection, reduced paper waste, cost savings on return postage, and the ability to send automatic reminders to non-respondents. They're also more convenient for guests who prefer managing everything online."
        },
        {
          q: "How can I make sure online RSVPs are working properly?",
          a: "Test your online RSVP system thoroughly before sending invitations: 1) Try submitting responses with different guest counts and meal choices, 2) Verify that confirmation emails are being sent, 3) Check that responses are being recorded correctly in your guest management system, 4) Test the system on different devices and browsers."
        }
      ]
    },
    {
      category: "Managing RSVP Data",
      questions: [
        {
          q: "What's the best way to track RSVPs?",
          a: "Use a comprehensive tracking system that includes: a spreadsheet or wedding planning app, columns for guest names, contact information, RSVP status, meal choices, plus-ones, and any dietary restrictions. Regular backups of this information are essential. Consider using a digital wedding planning tool that automatically updates as responses come in."
        },
        {
          q: "How should plus-ones and children be handled in RSVPs?",
          a: "Be explicit on invitations about who is invited. Use the exact names of all invited guests on inner envelopes or online RSVPs. If plus-ones are allowed, clearly indicate this on the invitation and RSVP card. For children, either include their names or specify 'adult-only celebration' on the invitation."
        },
        {
          q: "What's the best way to collect meal choices through RSVPs?",
          a: "For collecting meal choices: 1) Clearly list all options on the RSVP card or digital form, 2) Include dietary restriction options, 3) Request meal choices per guest rather than per household, 4) Consider using icons or colors to make options easily distinguishable, 5) Keep a detailed tracking system for the catering team."
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-primary" />
            <CardTitle><h2>Frequently Asked Questions About Wedding RSVPs</h2></CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          {faqs.map((category, idx) => (
            <div key={idx} className="mb-6">
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, faqIdx) => (
                  <AccordionItem key={faqIdx} value={`item-${idx}-${faqIdx}`}>
                    <AccordionTrigger className="text-left">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
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

export default RSVPFaq;