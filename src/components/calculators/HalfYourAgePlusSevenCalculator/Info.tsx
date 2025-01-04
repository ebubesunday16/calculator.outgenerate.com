import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { History, Calculator, BookOpen, AlertTriangle, Globe2, Brain, Heart, Speech } from 'lucide-react';

const HalfAgePlusSevenInfo = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* How It Works Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Calculator className="text-blue-500" />
            <CardTitle>How the Rule Works</CardTitle>
          </div>
          <CardDescription>Understanding the mathematical formula and its application</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>The "Half Age Plus Seven" rule provides a guideline for determining the socially acceptable minimum age for a romantic partner. The formula works in two ways:</p>
            
            <div className="bg-slate-50 p-4 rounded-lg space-y-2">
              <h4 className="font-medium">Minimum Age Formula:</h4>
              <p>Minimum = (Your Age ÷ 2) + 7</p>
              
              <h4 className="font-medium">Maximum Age Formula:</h4>
              <p>Maximum = (Your Age - 7) × 2</p>
            </div>
            
            <p>For example, if you're 30 years old:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Minimum age: (30 ÷ 2) + 7 = 22 years old</li>
              <li>Maximum age: (30 - 7) × 2 = 46 years old</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Historical Context */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <History className="text-amber-500" />
            <CardTitle>Historical Context</CardTitle>
          </div>
          <CardDescription>The origin and evolution of the dating rule</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>The "Half Age Plus Seven" rule has an interesting history dating back to the late 19th century:</p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>First appeared in print in 1901 in Max O'Rell's "Her Royal Highness Woman"</li>
              <li>Originally was a calculation for a man's ideal wife's age</li>
              <li>Gained popularity in French culture as "L'Âge de la Moitié Plus Sept"</li>
              <li>Evolved from a prescriptive rule about marriage to a general dating guideline</li>
              <li>Became widely referenced in popular culture during the 20th century</li>
            </ul>
            
            <p className="text-sm italic">The rule has transformed from its original context to become a contemporary social guideline that applies regardless of gender or orientation.</p>
          </div>
        </CardContent>
      </Card>

      {/* Psychological Basis */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Brain className="text-purple-500" />
            <CardTitle>Psychological Basis</CardTitle>
          </div>
          <CardDescription>Understanding the psychological factors behind age differences in relationships</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>The rule aligns with several psychological principles of relationship compatibility:</p>
            
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Developmental Stages:</strong> Reflects the importance of partners being at similar life stages for optimal understanding and shared experiences.
              </li>
              <li>
                <strong>Cognitive Maturity:</strong> Accounts for the fact that psychological development and maturity progress at different rates during different life phases.
              </li>
              <li>
                <strong>Social Development:</strong> Considers the importance of shared cultural references and generational experiences in relationship formation.
              </li>
              <li>
                <strong>Life Experience Gap:</strong> Helps maintain a balanced power dynamic by limiting vast differences in life experience between partners.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Cultural Variations */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Globe2 className="text-green-500" />
            <CardTitle>Cultural Variations</CardTitle>
          </div>
          <CardDescription>How different cultures view age differences in relationships</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>The acceptance and application of age-gap relationships vary significantly across cultures:</p>
            
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Western Societies:</strong> Generally more adherent to the rule, with social stigma often attached to larger age gaps.
              </li>
              <li>
                <strong>Asian Cultures:</strong> May place more emphasis on social status and financial stability than age differences.
              </li>
              <li>
                <strong>Traditional Societies:</strong> Often more accepting of larger age gaps, particularly in arranged marriages.
              </li>
              <li>
                <strong>Modern Urban Culture:</strong> Increasingly flexible views on age differences, with focus shifting to compatibility and shared values.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Modern Applications */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <BookOpen className="text-rose-500" />
            <CardTitle>Modern Applications</CardTitle>
          </div>
          <CardDescription>How the rule applies in contemporary dating</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>In modern dating contexts, the rule serves several practical purposes:</p>
            
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Dating Apps:</strong> Used as a quick reference for setting age range preferences in dating profiles.
              </li>
              <li>
                <strong>Social Acceptance:</strong> Provides a benchmark for what society generally considers appropriate age differences.
              </li>
              <li>
                <strong>Relationship Counseling:</strong> Used as a starting point for discussing age-related compatibility issues.
              </li>
              <li>
                <strong>Personal Boundaries:</strong> Helps individuals set reasonable age range expectations for potential partners.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Limitations and Criticisms */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="text-yellow-500" />
            <CardTitle>Limitations and Criticisms</CardTitle>
          </div>
          <CardDescription>Understanding the rule's shortcomings and considerations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>While widely referenced, the rule has several notable limitations:</p>
            
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Oversimplification:</strong> Reduces complex relationship dynamics to a simple mathematical formula.
              </li>
              <li>
                <strong>Cultural Bias:</strong> Primarily reflects Western social norms and may not apply universally.
              </li>
              <li>
                <strong>Modern Context:</strong> May not account for changing social norms and relationship patterns.
              </li>
              <li>
                <strong>Individual Differences:</strong> Doesn't account for personal maturity, life experience, or specific circumstances.
              </li>
              <li>
                <strong>Age Bias:</strong> Can be particularly restrictive for younger adults and may not reflect reality for older individuals.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Relationship Success Factors */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Heart className="text-red-500" />
            <CardTitle>Beyond the Numbers</CardTitle>
          </div>
          <CardDescription>Important factors beyond age differences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>Successful relationships depend on many factors beyond age differences:</p>
            
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Emotional Intelligence:</strong> The ability to understand and respond to each other's emotional needs.
              </li>
              <li>
                <strong>Shared Values:</strong> Alignment on important life decisions and moral principles.
              </li>
              <li>
                <strong>Communication:</strong> Ability to discuss and resolve differences effectively.
              </li>
              <li>
                <strong>Life Goals:</strong> Compatible aspirations for the future.
              </li>
              <li>
                <strong>Mutual Respect:</strong> Recognition and appreciation of each other's perspectives and experiences.
              </li>
            </ul>
            
            <p className="text-sm italic">Remember that while the "Half Age Plus Seven" rule can provide guidance, it should not be the sole determiner of relationship compatibility.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HalfAgePlusSevenInfo;