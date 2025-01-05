import { 
  Calculator, 
  Info, 
  History, 
  Brain, 
  Heart, 
  AlertTriangle,
  Scroll,
  Scale,
  BookOpen
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AcceptableAgeGapInfo = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-6 h-6" />
            How It Works
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>Our age gap calculator uses multiple established social guidelines and psychological research to provide a comprehensive analysis of age differences in relationships:</p>
            
            <div className="pl-4 space-y-2">
              <p><strong>1. Half Plus Seven Rule:</strong> The most widely recognized guideline stating that the minimum acceptable age for a romantic partner is half your age plus seven years.</p>
              <p><strong>2. Ten-Year Rule:</strong> A general guideline suggesting that relationships with age gaps greater than 10 years may face additional challenges.</p>
              <p><strong>3. Life Stage Analysis:</strong> Evaluation of whether partners are in compatible life stages based on typical developmental and social milestones.</p>
              <p><strong>4. Compatibility Score:</strong> A weighted calculation considering all factors to provide an overall assessment.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="w-6 h-6" />
            Historical Context
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">The concept of acceptable age gaps has evolved significantly throughout history:</p>
          
          <div className="space-y-3">
            <p>The "half-plus-seven" rule originated in the late 19th century, first appearing in print in 1901 in a book by Max O'Rell. Initially meant as a guide for men's minimum marriage age, it has evolved into a general relationship guideline.</p>
            
            <p>Historical attitudes toward age gaps have varied greatly across cultures and time periods. Modern perspectives are increasingly influenced by considerations of power dynamics, life experience compatibility, and mutual understanding.</p>
            
            <p>Contemporary research focuses more on relationship success factors like shared values, emotional maturity, and life goals rather than age alone.</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-6 h-6" />
            Psychological Factors
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p>Age gaps in relationships can impact various psychological aspects:</p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cognitive Development:</strong> Brain development continues until around age 25, potentially affecting decision-making and emotional processing.</li>
              <li><strong>Life Experience:</strong> Significant age gaps may lead to differences in worldview, cultural references, and problem-solving approaches.</li>
              <li><strong>Power Dynamics:</strong> Age differences can create implicit power imbalances that need conscious attention and management.</li>
              <li><strong>Emotional Maturity:</strong> Different life stages often correlate with varying levels of emotional development and relationship needs.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="w-6 h-6" />
            Life Stage Compatibility
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>Understanding life stages is crucial for relationship compatibility:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Early Adult (18-22)</h4>
                <p>Identity formation, career preparation, high personal growth</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Young Adult (23-29)</h4>
                <p>Career establishment, identity consolidation, relationship exploration</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Established Adult (30-39)</h4>
                <p>Career advancement, family planning, stability seeking</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Midlife (40-49)</h4>
                <p>Life evaluation, career peak, established lifestyle</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-6 h-6" />
            Common Challenges
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p>Age-gap relationships may face several common challenges:</p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Social Perception:</strong> Dealing with societal judgment and stereotypes</li>
              <li><strong>Family Planning:</strong> Different timelines for major life decisions</li>
              <li><strong>Cultural References:</strong> Gaps in shared experiences and cultural touchstones</li>
              <li><strong>Future Planning:</strong> Different retirement timelines and health considerations</li>
              <li><strong>Social Circles:</strong> Potential difficulties in integrating different peer groups</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6" />
            Success Factors
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p>Research indicates several key factors that contribute to successful age-gap relationships:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                <h4 className="font-semibold mb-2">Communication</h4>
                <p>Open dialogue about expectations, concerns, and future plans</p>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                <h4 className="font-semibold mb-2">Mutual Respect</h4>
                <p>Valuing each partner's perspective and life experience</p>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                <h4 className="font-semibold mb-2">Shared Values</h4>
                <p>Alignment on core beliefs and life goals</p>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg">
                <h4 className="font-semibold mb-2">Emotional Maturity</h4>
                <p>Ability to handle challenges and conflicts constructively</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scroll className="w-6 h-6" />
            Legal Considerations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p>Important legal aspects to consider in age-gap relationships:</p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Age of Consent:</strong> Varies by jurisdiction and must be strictly observed</li>
              <li><strong>Marriage Laws:</strong> Different regions have varying requirements and restrictions</li>
              <li><strong>Financial Implications:</strong> Consider legal protections like prenuptial agreements</li>
              <li><strong>Healthcare Decisions:</strong> Understanding legal rights and responsibilities</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AcceptableAgeGapInfo;