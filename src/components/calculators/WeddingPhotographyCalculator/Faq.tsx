import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Camera, Clock, Wallet, Image, Users, Calendar, Settings, Shield, Book } from 'lucide-react';

const WeddingPhotographyFaq = () => {
  const faqSections = [
    {
      category: "Booking & Pricing",
      icon: <Wallet className="text-pink-500" />,
      questions: [
        {
          q: "How much deposit is required to secure my wedding date?",
          a: "We require a 30% non-refundable retainer to secure your wedding date, with the remaining balance due 30 days before the wedding. The deposit ensures your date is exclusively reserved for you, and we begin our planning process immediately after booking."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept various payment methods including credit cards, bank transfers, and payment plans. We offer flexible payment schedules, allowing you to split the remaining balance into monthly installments after the initial deposit."
        },
        {
          q: "Why do wedding photography prices vary so much?",
          a: "Wedding photography prices reflect the photographer's experience, equipment quality, time investment (both during and after the wedding), insurance coverage, and level of service. Our pricing is transparent and includes professional editing, high-resolution images, and archival storage of your memories."
        },
        {
          q: "Do you offer customizable packages?",
          a: "Yes! While we have standard packages as starting points, we can customize every aspect of your coverage. Using our pricing calculator, we can adjust hours, add-ons, and special requests to create a package that perfectly fits your needs and budget."
        }
      ]
    },
    {
      category: "Coverage & Time",
      icon: <Clock className="text-pink-500" />,
      questions: [
        {
          q: "How many hours of coverage do I need?",
          a: "The ideal coverage time depends on your wedding schedule and size. For a typical wedding, we recommend 8-10 hours to capture everything from preparation to reception highlights. Factors to consider include: venue locations, guest count, cultural traditions, and reception events. We can help you determine the perfect coverage duration during our consultation."
        },
        {
          q: "When do you arrive on the wedding day?",
          a: "We typically arrive 30 minutes before the contracted start time to set up equipment and assess lighting conditions. For getting-ready coverage, we'll work backwards from your ceremony time to ensure we capture all important preparation moments."
        },
        {
          q: "Do you offer overtime coverage if needed?",
          a: "Yes, we offer overtime coverage at an hourly rate if you need us to stay longer during your wedding. This can be decided on the spot, and we'll never leave during an important moment. Overtime is billed at our standard hourly rate plus a small premium."
        }
      ]
    },
    {
      category: "Photos & Delivery",
      icon: <Image className="text-pink-500" />,
      questions: [
        {
          q: "How many photos will we receive?",
          a: "The number of final edited photos depends on various factors including coverage hours, guest count, and events captured. On average, you can expect 50-75 professionally edited photos per hour of coverage. All images are carefully curated and edited to ensure the highest quality representation of your day."
        },
        {
          q: "When will we receive our photos?",
          a: "You'll receive a curated preview gallery of 50-75 images within 48 hours of your wedding. The complete gallery will be delivered within 6-8 weeks. Rush delivery options are available for an additional fee. All images are professionally edited and delivered in both high-resolution and web-optimized formats."
        },
        {
          q: "Do you provide RAW files?",
          a: "We don't provide RAW files as they're unfinished products. Instead, you'll receive professionally edited, high-resolution JPEG images that are ready for printing and sharing. These images reflect our signature style and professional standards."
        }
      ]
    },
    {
      category: "Equipment & Backup",
      icon: <Settings className="text-pink-500" />,
      questions: [
        {
          q: "What happens if there's an equipment failure?",
          a: "We come prepared with multiple professional camera bodies, lenses, and lighting equipment. All our cameras have dual card slots for instant backup, and we bring backup equipment for every critical component. In the extremely rare case of equipment failure, we can switch to backup gear instantly without missing important moments."
        },
        {
          q: "How do you handle image backup?",
          a: "We implement a comprehensive backup strategy: images are recorded to dual cards in-camera, backed up on-site during the wedding, and then stored in multiple locations including cloud storage. Your images are safe with us, and we maintain archives for a minimum of 5 years."
        }
      ]
    },
    {
      category: "Planning & Preparation",
      icon: <Calendar className="text-pink-500" />,
      questions: [
        {
          q: "Do we need to provide a shot list?",
          a: "While we capture all traditional moments automatically, we welcome a list of specific family groupings and any special photos you'd like. We'll work with you before the wedding to create a photography timeline that ensures all important shots are captured while maintaining the natural flow of your day."
        },
        {
          q: "How do you handle challenging lighting situations?",
          a: "We're experienced in handling all lighting conditions and come prepared with professional lighting equipment. Whether it's a dark church, sunny outdoor ceremony, or dimly lit reception venue, we have the skills and equipment to capture beautiful images. We also visit new venues in advance to plan for lighting challenges."
        }
      ]
    },
    {
      category: "Rights & Usage",
      icon: <Shield className="text-pink-500" />,
      questions: [
        {
          q: "Do we get printing rights to our photos?",
          a: "Yes! You receive a personal use license with your gallery, allowing you to print, share, and use your images for personal purposes. While we retain the copyright (standard in the industry), you have unlimited personal usage rights. We can also provide commercial usage rights if needed."
        },
        {
          q: "Can we share our photos on social media?",
          a: "Absolutely! We encourage you to share your photos on social media. We only ask that you don't apply additional filters or edits to maintain the integrity of our work. Proper credit is appreciated but not required for personal sharing."
        }
      ]
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <Card className="border-2 border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <HelpCircle className="text-pink-500" />
            Frequently Asked Questions
          </CardTitle>
          <CardDescription>
            Everything you need to know about our wedding photography services
          </CardDescription>
        </CardHeader>
        <CardContent>
          {faqSections.map((section, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div className="flex items-center gap-2 mb-4">
                {section.icon}
                <h3 className="text-xl font-semibold">{section.category}</h3>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {section.questions.map((item, qIndex) => (
                  <AccordionItem key={qIndex} value={`${index}-${qIndex}`}>
                    <AccordionTrigger className="text-left">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      {item.a}
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

export default WeddingPhotographyFaq;