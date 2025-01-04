import { Book, Calculator, History, Brain, Map, Puzzle, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PythagoreanNumerologyInfo = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Book className="w-6 h-6" />
            Understanding Pythagorean Numerology
          </CardTitle>
          <CardDescription>
            A comprehensive guide to the ancient science of numbers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            
            {/* Historical Background */}
            <AccordionItem value="history">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center gap-2">
                  <History className="w-5 h-5" />
                  Historical Background
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 text-base">
                <p>
                  Pythagorean Numerology originates from the teachings of Pythagoras, a 6th century BCE Greek philosopher and mathematician. Beyond his mathematical theorems, Pythagoras believed that numbers were the universal language of reality and contained deep spiritual significance.
                </p>
                <p>
                  The Pythagorean school taught that numbers were not merely quantitative but possessed qualitative properties. Each number was believed to vibrate with unique energy and hold specific spiritual and cosmic significance. This system forms the foundation of modern Western numerology.
                </p>
                <p>
                  Pythagoras established a mystery school in Croton, where he taught that numbers were the fundamental building blocks of existence. His teachings combined mathematics, music, and metaphysics, creating a holistic understanding of numbers' influence on human life.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* How It Works */}
            <AccordionItem value="mechanics">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  How It Works
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 text-base">
                <p>
                  Pythagorean Numerology assigns numerical values to letters based on their position in the alphabet:
                </p>
                <div className="grid grid-cols-3 gap-4 my-4">
                  <div>1 = A, J, S</div>
                  <div>2 = B, K, T</div>
                  <div>3 = C, L, U</div>
                  <div>4 = D, M, V</div>
                  <div>5 = E, N, W</div>
                  <div>6 = F, O, X</div>
                  <div>7 = G, P, Y</div>
                  <div>8 = H, Q, Z</div>
                  <div>9 = I, R</div>
                </div>
                <p>
                  The system uses number reduction, where multi-digit numbers are reduced to a single digit by adding their individual digits together. For example, 28 becomes 2 + 8 = 10, which further reduces to 1 + 0 = 1. The only exceptions are master numbers 11, 22, and 33, which are not reduced.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Core Numbers */}
            <AccordionItem value="core-numbers">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Core Numbers Explained
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 text-base">
                <div className="space-y-3">
                  <h4 className="font-semibold">Life Path Number</h4>
                  <p>Derived from your birth date, this number reveals your life's purpose and the path you're destined to follow. It's calculated by reducing your full birth date to a single digit.</p>
                  
                  <h4 className="font-semibold mt-4">Destiny Number</h4>
                  <p>Also called the Expression Number, this is calculated from all letters in your full name. It reveals your natural abilities, talents, and the goals you're likely to achieve.</p>
                  
                  <h4 className="font-semibold mt-4">Soul Urge Number</h4>
                  <p>Calculated using only the vowels in your name, this number reveals your inner desires, motivations, and what truly drives you at your core.</p>
                  
                  <h4 className="font-semibold mt-4">Personality Number</h4>
                  <p>Derived from the consonants in your name, this number shows how others perceive you and your external personality.</p>
                  
                  <h4 className="font-semibold mt-4">Maturity Number</h4>
                  <p>A combination of your Life Path and Destiny numbers, this represents the person you evolve into during the latter part of life.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Number Meanings */}
            <AccordionItem value="meanings">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Number Meanings
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 text-base">
                <div className="grid gap-4">
                  <div>
                    <h4 className="font-semibold">1 - The Leader</h4>
                    <p>Independence, initiation, individuality, and new beginnings</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">2 - The Mediator</h4>
                    <p>Cooperation, diplomacy, sensitivity, and balance</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">3 - The Creator</h4>
                    <p>Expression, creativity, communication, and joy</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">4 - The Builder</h4>
                    <p>Stability, organization, discipline, and hard work</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">5 - The Freedom Seeker</h4>
                    <p>Change, adventure, freedom, and versatility</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">6 - The Nurturer</h4>
                    <p>Responsibility, care, harmony, and service</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">7 - The Seeker</h4>
                    <p>Analysis, understanding, spirituality, and wisdom</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">8 - The Achiever</h4>
                    <p>Power, abundance, success, and material mastery</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">9 - The Humanitarian</h4>
                    <p>Completion, compassion, universal love, and service to humanity</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Practical Applications */}
            <AccordionItem value="applications">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center gap-2">
                  <Map className="w-5 h-5" />
                  Practical Applications
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 text-base">
                <p>
                  Pythagorean Numerology can be applied to various aspects of life:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal Development: Understanding your strengths, challenges, and life purpose</li>
                  <li>Relationships: Analyzing compatibility and understanding dynamics between people</li>
                  <li>Career Choices: Identifying suitable career paths based on your numbers</li>
                  <li>Decision Making: Choosing auspicious timing for important life events</li>
                  <li>Business: Selecting favorable business names or launch dates</li>
                  <li>Self-Discovery: Gaining deeper insights into your personality and potential</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Common Misconceptions */}
            <AccordionItem value="misconceptions">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center gap-2">
                  <Puzzle className="w-5 h-5" />
                  Common Misconceptions
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 text-base">
                <ul className="space-y-3">
                  <li>
                    <strong>Deterministic Nature:</strong> Numbers don't control your destiny; they reveal potential tendencies and energies you can work with.
                  </li>
                  <li>
                    <strong>Lucky Numbers:</strong> Numerology is more about understanding life patterns than finding lucky numbers for gambling.
                  </li>
                  <li>
                    <strong>Complexity:</strong> While the calculations might seem complex, the basic principles are quite straightforward and logical.
                  </li>
                  <li>
                    <strong>Cultural Limitations:</strong> Although Pythagorean Numerology originated in Greece, its principles can be applied universally.
                  </li>
                  <li>
                    <strong>Scientific Basis:</strong> While not scientifically proven, numerology can be viewed as a symbolic system for self-reflection and personal growth.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default PythagoreanNumerologyInfo;