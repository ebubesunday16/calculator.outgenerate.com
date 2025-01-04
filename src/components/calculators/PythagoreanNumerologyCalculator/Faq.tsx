import { HelpCircle, MessageCircle, Star, AlertCircle, Book, Heart, Compass } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PythagoreanNumerologyFaq = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6" />
            Frequently Asked Questions
          </CardTitle>
          <CardDescription>
            Common questions about Pythagorean Numerology and their detailed answers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            
            {/* Basic Questions */}
            <AccordionItem value="basic">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Basic Questions
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold">What is Pythagorean Numerology?</h4>
                    <p>Pythagorean Numerology is a system that assigns numerical values to letters and uses these values, along with birth dates, to reveal information about personality traits, life path, and potential. It's based on the teachings of Pythagoras, who believed numbers were the foundation of all things.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">How accurate is Pythagorean Numerology?</h4>
                    <p>While numerology isn't scientifically proven, many find it to be an insightful tool for self-reflection and personal growth. Its accuracy often depends on how openly and thoughtfully one applies its principles to their life circumstances.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Can I use a nickname for calculations?</h4>
                    <p>It's recommended to use your full name as given at birth for the most accurate readings. However, if you've legally changed your name or have been using a different name for a significant period, that name can also be analyzed as it carries its own vibration.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Calculation Questions */}
            <AccordionItem value="calculations">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Questions About Calculations
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold">What if my calculations result in master numbers (11, 22, 33)?</h4>
                    <p>Master numbers are considered special in numerology and aren't reduced to a single digit. They represent higher spiritual potential and greater opportunities, but also greater challenges. Our calculator recognizes these master numbers and provides specific interpretations for them.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">How do you handle special characters in names?</h4>
                    <p>Special characters, hyphens, and spaces are typically ignored in numerological calculations. Only the letters themselves are assigned numerical values. For example, "Mary-Jane" would be calculated the same as "Mary Jane" or "MaryJane".</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">What about different alphabets or naming systems?</h4>
                    <p>Pythagorean Numerology was developed for the Western alphabet. While adaptations exist for other writing systems, our calculator uses the traditional Western alphabet system. For names in other scripts, it's recommended to use the standard English transliteration.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Interpretation Questions */}
            <AccordionItem value="interpretation">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center gap-2">
                  <Book className="w-5 h-5" />
                  Understanding Your Numbers
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold">What if I have multiple recurring numbers?</h4>
                    <p>Recurring numbers often indicate strengthened influences of that number's qualities in your life. For example, if you have multiple 7s in your chart, themes of spirituality, analysis, and introspection may be particularly prominent in your life.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">How do different numbers interact with each other?</h4>
                    <p>Numbers in your chart interact to create a unique numerical blueprint. Some combinations may reinforce each other, while others might create challenges or opportunities for growth. The overall interpretation should consider all numbers as part of a complete picture.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">What's the significance of missing numbers?</h4>
                    <p>Missing numbers in your chart can indicate areas for personal development or karmic lessons. However, their absence doesn't necessarily represent a deficit - rather, it might highlight areas where you have opportunities for growth and learning.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Practical Application */}
            <AccordionItem value="practical">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5" />
                  Practical Applications
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold">How often should I calculate my numbers?</h4>
                    <p>Your core numbers (Life Path, Destiny, etc.) remain constant unless you legally change your name. However, you might want to calculate periodic cycles (Personal Year, Month, Day numbers) regularly for timing-related guidance.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Can numerology help with decision-making?</h4>
                    <p>While numerology can provide insights and perspectives, it should be used as one of many tools for decision-making, alongside practical considerations, personal intuition, and logical analysis.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">How can I use numerology for personal growth?</h4>
                    <p>Understanding your numbers can help identify potential strengths and challenges, allowing you to work more consciously with these energies. Use the insights as a framework for self-reflection and personal development.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Compatibility Questions */}
            <AccordionItem value="compatibility">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Relationship Compatibility
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold">How can I use numerology for relationship compatibility?</h4>
                    <p>Compare Life Path numbers and other core numbers to understand potential dynamics. However, remember that any number combinations can work with awareness and effort - numerology reveals tendencies, not absolute determinations.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">What numbers are most compatible?</h4>
                    <p>Generally, numbers that add to 9 (like 3-6, 4-5) often have good compatibility. Numbers of the same value can also work well together. However, every combination has its unique strengths and challenges.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Common Concerns */}
            <AccordionItem value="concerns">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Common Concerns
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold">What if I don't relate to my numbers?</h4>
                    <p>Numbers represent potential energies and tendencies, not absolute destinies. If you don't relate to certain interpretations, consider how these energies might manifest differently in your life, or how they might represent growth opportunities.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Can I change my numbers if I don't like them?</h4>
                    <p>While core numbers from your birth date cannot be changed, name-based numbers can be modified through legal name changes. However, it's generally recommended to work with your existing numbers rather than trying to change them.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Is numerology compatible with my religious/spiritual beliefs?</h4>
                    <p>Numerology can be viewed as a symbolic system for understanding patterns and energies in life. Many people find ways to integrate numerological insights with their existing belief systems, treating it as a complementary tool for self-understanding.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default PythagoreanNumerologyFaq;