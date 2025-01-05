import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Calculator
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AcceptableAgeGapFaq = () => {
  const faqs = [
    {
      category: "About the Calculator",
      questions: [
        {
          q: "How accurate is the age gap calculator?",
          a: "The calculator uses established social guidelines and psychological research to provide recommendations. It considers multiple factors including the 'half-plus-seven' rule, life stages, and overall compatibility. However, it's important to note that every relationship is unique, and the calculator should be used as a general guide rather than a definitive answer."
        },
        {
          q: "What factors does the calculator consider?",
          a: "The calculator analyzes several key factors: absolute age difference, the 'half-plus-seven' rule compliance, life stage compatibility, and relative age ratio. It combines these factors to generate a comprehensive compatibility score and detailed recommendations."
        },
        {
          q: "Why does the calculator use the 'half-plus-seven' rule?",
          a: "The 'half-plus-seven' rule is a widely recognized social guideline that provides a baseline for age-appropriate relationships. While not scientific, it often aligns with social norms and helps identify potentially problematic age gaps. The calculator uses this as one of several factors in its analysis."
        }
      ]
    },
    {
      category: "Age Gap Basics",
      questions: [
        {
          q: "What is considered a significant age gap?",
          a: "Generally, an age gap of 10 years or more is considered significant. However, the impact of an age gap can vary depending on the life stages of those involved. For example, a 10-year gap between a 20-year-old and a 30-year-old may present more challenges than the same gap between a 40-year-old and a 50-year-old."
        },
        {
          q: "Do age gaps matter less as people get older?",
          a: "Yes, typically age gaps become less significant as people get older. This is because both partners have more life experience, established personalities, and are likely to be in more similar life stages. The development and maturity differences that might be significant in younger years become less pronounced with age."
        },
        {
          q: "What's the average age gap in relationships?",
          a: "Research indicates that the average age gap in relationships is about 2-3 years, with the male partner typically being older. However, successful relationships exist across a wide range of age gaps, and averages don't determine individual compatibility."
        }
      ]
    },
    {
      category: "Relationship Dynamics",
      questions: [
        {
          q: "How do generational differences affect relationships?",
          a: "Generational differences can impact shared cultural references, values, and life expectations. Partners may have different perspectives on technology, social issues, and lifestyle choices. However, open communication and mutual respect can help bridge these gaps and even turn these differences into opportunities for growth and learning."
        },
        {
          q: "What are the benefits of age-gap relationships?",
          a: "Age-gap relationships can offer unique advantages such as different perspectives and life experiences, potential financial stability, emotional maturity from the older partner, and energy and fresh perspectives from the younger partner. They can promote personal growth and learning for both individuals."
        },
        {
          q: "What are common challenges in age-gap relationships?",
          a: "Common challenges include different energy levels and lifestyle preferences, misaligned life goals or timelines, social stigma, family acceptance, and varying cultural references. Long-term considerations might include health care needs, retirement planning, and potential caregiving responsibilities."
        }
      ]
    },
    {
      category: "Social and Cultural Aspects",
      questions: [
        {
          q: "How do different cultures view age gaps?",
          a: "Cultural attitudes toward age gaps vary significantly worldwide. Some cultures are more accepting of larger age gaps, while others prefer closer ages. Western societies tend to be more accepting of age gaps as partners get older, while some traditional societies may have different standards based on gender and social roles."
        },
        {
          q: "How can couples handle social judgment?",
          a: "Couples can handle social judgment by: 1) Being confident in their relationship, 2) Setting clear boundaries with others, 3) Building a supportive social network, 4) Focusing on their connection rather than others' opinions, and 5) Addressing concerns openly with each other."
        },
        {
          q: "Does gender affect age gap perception?",
          a: "Yes, there are often different social attitudes toward age gaps depending on gender. Relationships where the man is older have traditionally been more socially accepted than those where the woman is older, though these attitudes are evolving in many societies."
        }
      ]
    },
    {
      category: "Making It Work",
      questions: [
        {
          q: "What are key success factors for age-gap relationships?",
          a: "Key success factors include: strong communication, mutual respect, shared values and goals, emotional maturity, financial compatibility, and the ability to address age-related challenges openly. Supporting each other's growth and maintaining individual identities is also crucial."
        },
        {
          q: "How can couples address life stage differences?",
          a: "Couples can address life stage differences by: 1) Openly discussing future goals and expectations, 2) Finding common ground in shared interests, 3) Respecting each other's pace of life, 4) Creating flexible plans that accommodate both partners' needs, and 5) Regular check-ins about relationship satisfaction."
        },
        {
          q: "What role does family acceptance play?",
          a: "Family acceptance can significantly impact relationship success. While not essential, it can reduce stress and provide valuable support. Couples should approach family concerns with patience, understanding, and a united front, while maintaining healthy boundaries if needed."
        }
      ]
    }
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HelpCircle className="w-6 h-6" />
          Frequently Asked Questions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-2">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                {category.category}
              </h3>
              {category.questions.map((faq, faqIndex) => (
                <AccordionItem 
                  key={`${categoryIndex}-${faqIndex}`}
                  value={`${categoryIndex}-${faqIndex}`}
                  className="border rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
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

export default AcceptableAgeGapFaq;