import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Heart, Info, Calculator, Book, Lightbulb, Target, Sparkles, ScrollText } from 'lucide-react';

const CoupleNumerologyInfo = () => {
  return (
    <div className="max-w-4xl mx-auto  space-y-6">
      {/* Introduction Card */}
      <Card className="bg-gradient-to-r from-pink-50 to-purple-50">
        <CardHeader>
          <CardTitle className="text-2xl text-purple-800 flex items-center gap-2">
            <Info className="text-pink-500" />
            What is Couple Numerology?
          </CardTitle>
        </CardHeader>
        <CardContent className="text-purple-700 space-y-4">
          <p>
            Couple numerology is an ancient practice that uses the vibrational frequencies of numbers derived from names and birth dates to understand the dynamics and potential of romantic relationships. This spiritual science helps couples gain deeper insights into their compatibility, challenges, and shared destiny.
          </p>
          <p>
            By analyzing various numerological aspects of both partners, we can uncover the underlying energies that influence their relationship and provide guidance for building a stronger connection.
          </p>
        </CardContent>
      </Card>

      {/* How It Works Card */}
      <Card className="bg-gradient-to-r from-pink-50 to-purple-50">
        <CardHeader>
          <CardTitle className="text-2xl text-purple-800 flex items-center gap-2">
            <Calculator className="text-pink-500" />
            How Our Calculator Works
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-purple-700">Life Path Number</h3>
            <p className="text-purple-600">
              Calculated from each partner's birth date, this number reveals your core purpose and life journey. We reduce your birth date to a single digit through numerological addition. For example, birth date 15-07-1990 becomes: 1+5+0+7+1+9+9+0 = 32 = 3+2 = 5.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-purple-700">Expression Number</h3>
            <p className="text-purple-600">
              Derived from the full name at birth, each letter corresponds to a number. This reveals your talents, desires, and goals. We use the Pythagorean system where A=1, B=2, etc., then reduce to a single digit.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-purple-700">Soul Urge Number</h3>
            <p className="text-purple-600">
              Calculated using only the vowels in your name, this number reveals your inner desires and emotional needs. It helps understand the emotional compatibility between partners.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-purple-700">Destiny Number</h3>
            <p className="text-purple-600">
              A unique calculation combining both partners' numbers to reveal the relationship's potential and shared path. This number indicates the ultimate purpose of your union.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Compatibility Factors Card */}
      <Card className="bg-gradient-to-r from-pink-50 to-purple-50">
        <CardHeader>
          <CardTitle className="text-2xl text-purple-800 flex items-center gap-2">
            <Target className="text-pink-500" />
            Understanding Compatibility Factors
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-white/50 p-4 rounded-lg space-y-3">
            <h3 className="font-semibold text-purple-700">Life Path Compatibility</h3>
            <p className="text-purple-600">
              When Life Path numbers are complementary (e.g., 1 and 9, 2 and 8), they create a balanced relationship. Similar numbers indicate shared values and approaches to life. We calculate compatibility by analyzing the harmonic resonance between these numbers.
            </p>
          </div>

          <div className="bg-white/50 p-4 rounded-lg space-y-3">
            <h3 className="font-semibold text-purple-700">Expression Compatibility</h3>
            <p className="text-purple-600">
              Expression numbers reveal how partners communicate and express themselves. Compatible Expression numbers (within 3 digits of each other) suggest natural understanding and communication flow.
            </p>
          </div>

          <div className="bg-white/50 p-4 rounded-lg space-y-3">
            <h3 className="font-semibold text-purple-700">Soul Urge Harmony</h3>
            <p className="text-purple-600">
              Soul Urge numbers indicate emotional needs and desires. Compatible numbers suggest emotional understanding and fulfillment, while challenging combinations may require more conscious effort in emotional expression.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Interpretation Guide Card */}
      <Card className="bg-gradient-to-r from-pink-50 to-purple-50">
        <CardHeader>
          <CardTitle className="text-2xl text-purple-800 flex items-center gap-2">
            <Book className="text-pink-500" />
            Reading Your Results
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h3 className="font-semibold text-purple-700">Compatibility Percentage</h3>
            <p className="text-purple-600">
              90-100%: Exceptional compatibility with natural harmony<br />
              75-89%: Strong compatibility with minor challenges<br />
              60-74%: Good compatibility requiring some adjustment<br />
              Below 60%: Challenging compatibility needing conscious effort
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-purple-700">Relationship Strengths</h3>
            <p className="text-purple-600">
              Identified areas where your numbers naturally complement each other, indicating relationship aspects that will flow easily and support your growth together.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-purple-700">Growth Opportunities</h3>
            <p className="text-purple-600">
              Areas where your numbers create tension, representing opportunities for learning and development in your relationship.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Tips for Using Numerology Card */}
      <Card className="bg-gradient-to-r from-pink-50 to-purple-50">
        <CardHeader>
          <CardTitle className="text-2xl text-purple-800 flex items-center gap-2">
            <Lightbulb className="text-pink-500" />
            Making the Most of Your Reading
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-white/50 p-4 rounded-lg space-y-3">
            <h3 className="font-semibold text-purple-700">Use as a Guide, Not a Verdict</h3>
            <p className="text-purple-600">
              Numerology provides insights and guidance but should not be the sole factor in relationship decisions. Use it as a tool for understanding and growth rather than absolute prediction.
            </p>
          </div>

          <div className="bg-white/50 p-4 rounded-lg space-y-3">
            <h3 className="font-semibold text-purple-700">Regular Recalculation</h3>
            <p className="text-purple-600">
              Relationships evolve, and so do your numbers. Consider recalculating your compatibility during significant life changes or anniversaries to gain new insights.
            </p>
          </div>

          <div className="bg-white/50 p-4 rounded-lg space-y-3">
            <h3 className="font-semibold text-purple-700">Focus on Growth</h3>
            <p className="text-purple-600">
              Use challenging aspects as opportunities for personal and relationship development rather than viewing them as obstacles.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Common Misconceptions Card */}
      <Card className="bg-gradient-to-r from-pink-50 to-purple-50">
        <CardHeader>
          <CardTitle className="text-2xl text-purple-800 flex items-center gap-2">
            <ScrollText className="text-pink-500" />
            Common Misconceptions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h3 className="font-semibold text-purple-700">Perfect Numbers Don't Guarantee Success</h3>
            <p className="text-purple-600">
              While high compatibility numbers are favorable, they don't guarantee a perfect relationship. Success still requires effort, communication, and commitment from both partners.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-purple-700">Low Compatibility Doesn't Mean Failure</h3>
            <p className="text-purple-600">
              Challenging number combinations can lead to powerful growth and deeply fulfilling relationships when both partners are committed to understanding and working with their differences.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-purple-700">Numbers Aren't Fixed</h3>
            <p className="text-purple-600">
              Your numbers can shift with name changes and personal growth. Numerology is dynamic, just like relationships themselves.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CoupleNumerologyInfo;