import { 
  Calculator, 
  Calendar, 
  Star, 
  Award,
  BookOpen,
} from 'lucide-react';
import { 
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent 
} from '@/components/ui/card';

const NumerologyInfo = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* How It Works Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Calculator className="w-6 h-6 text-blue-500" />
            <CardTitle>How Wedding Date Numerology Works</CardTitle>
          </div>
          <CardDescription>
            Understanding the ancient practice of numerological date selection
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Wedding date numerology combines ancient Pythagorean principles with modern date analysis to find the most auspicious day for your wedding. The process involves:</p>
          
          <div className="grid gap-4 mt-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">1</div>
              <div>
                <h4 className="font-medium">Life Path Numbers</h4>
                <p className="text-gray-600">Calculated from each partner's birth date, revealing their core characteristics and compatibility.</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">2</div>
              <div>
                <h4 className="font-medium">Marriage Number</h4>
                <p className="text-gray-600">Combined energy of both partners' life path numbers, indicating the relationship's fundamental nature.</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">3</div>
              <div>
                <h4 className="font-medium">Universal Day Number</h4>
                <p className="text-gray-600">The energy of your chosen wedding date, calculated from the day, month, and year.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Dates Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-green-500" />
            <CardTitle>Best Wedding Dates</CardTitle>
          </div>
          <CardDescription>
            Optimal dates and months for wedding ceremonies
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Most Auspicious Numbers</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-green-50 rounded-lg">
                  <span className="font-medium">Number 4:</span>
                  <p>Represents stability, foundation, and long-lasting commitment. Ideal for traditional couples seeking a strong marriage foundation.</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <span className="font-medium">Number 6:</span>
                  <p>Symbolizes love, harmony, and domestic bliss. Perfect for couples focusing on building a harmonious family life.</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Best Months</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">April (Month 4):</span>
                  <p>Brings stability and foundation energy to your union.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">June (Month 6):</span>
                  <p>Traditional month of marriage, amplifying love and harmony.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Number Meanings Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Star className="w-6 h-6 text-purple-500" />
            <CardTitle>Understanding Number Meanings</CardTitle>
          </div>
          <CardDescription>
            The significance of different numerology numbers in weddings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-medium">Number 1</p>
                <p>New beginnings, leadership, and independence. Good for innovative couples starting new ventures together.</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-medium">Number 2</p>
                <p>Partnership, harmony, and cooperation. Emphasizes the partnership aspect of marriage.</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-medium">Number 3</p>
                <p>Creativity, expression, and joy. Great for artistic couples planning a creative celebration.</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-medium">Number 4</p>
                <p>Stability, foundation, and tradition. Ideal for establishing a strong marital foundation.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-medium">Number 5</p>
                <p>Change, freedom, and adventure. Suitable for unconventional couples who value independence.</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-medium">Number 6</p>
                <p>Love, harmony, and family. The most favorable number for marriage and domestic happiness.</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-medium">Number 7</p>
                <p>Spirituality and introspection. Better avoided for weddings due to its solitary nature.</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-medium">Number 8</p>
                <p>Success, power, and material abundance. Good for business-minded couples.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tips and Considerations */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-500" />
            <CardTitle>Tips for Choosing Your Date</CardTitle>
          </div>
          <CardDescription>
            Important factors to consider when selecting your wedding date
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-amber-50 rounded-lg">
              <h4 className="font-medium mb-2">Balancing Factors</h4>
              <ul className="space-y-2">
                <li>Consider both partners' life path numbers</li>
                <li>Look for dates that complement your marriage number</li>
                <li>Factor in the month's numerological significance</li>
                <li>Ensure the date works practically for your plans</li>
              </ul>
            </div>
            
            <div className="p-4 bg-amber-50 rounded-lg">
              <h4 className="font-medium mb-2">What to Avoid</h4>
              <ul className="space-y-2">
                <li>Dates that reduce to 7 (tends to be isolating)</li>
                <li>Dates that reduce to 9 (represents endings)</li>
                <li>Dates that conflict with your combined numbers</li>
                <li>Rushing to pick a date without considering all factors</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-500" />
            <CardTitle>Advanced Numerology Concepts</CardTitle>
          </div>
          <CardDescription>
            Deeper understanding of wedding date numerology
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h4 className="font-medium mb-2">Personal Year Numbers</h4>
              <p>Your personal year number influences the energy of your wedding year. Calculate this by adding your birth month and day to the current year.</p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h4 className="font-medium mb-2">Universal Year Energy</h4>
              <p>The universal year number affects everyone globally. It sets the tone for celebrations and new beginnings during that year.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NumerologyInfo;