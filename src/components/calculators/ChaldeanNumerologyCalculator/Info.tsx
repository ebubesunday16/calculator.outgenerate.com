import { Book, Calculator, History, List, Map, Star, Brain, Heart, Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const ChaldeanNumerologyInfo = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card className="bg-gradient-to-br from-purple-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Book className="h-6 w-6 text-purple-600" />
            Introduction to Chaldean Numerology
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            Chaldean Numerology, often referred to as the "Mystic Numerology," is one of the most ancient and accurate forms of numerology. 
            Originating from the Chaldean civilization in ancient Babylonia, this system is believed to be more spiritually aligned and 
            accurate than other numerological systems.
          </p>
          <p className="text-gray-700">
            Unlike other systems, Chaldean Numerology uses the numbers 1 through 8, with 9 being considered sacred and used only when it 
            naturally occurs in calculations. This system is based on the principle that every letter carries both a numeric value and a 
            cosmic vibration that influences human life.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-6 w-6 text-blue-600" />
            Historical Background
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <h3 className="font-semibold text-lg">Origins</h3>
          <p className="text-gray-700">
            The Chaldeans were ancient people who ruled Babylonia from 625-539 BC. They were renowned for their advanced knowledge of 
            astronomy, mathematics, and spiritual sciences. Their numerological system was developed through centuries of astronomical 
            observations and mathematical calculations.
          </p>
          
          <h3 className="font-semibold text-lg mt-4">Evolution</h3>
          <p className="text-gray-700">
            The system was preserved through various civilizations, passing through Egyptian, Hebrew, and other ancient cultures before 
            reaching its current form. Unlike the Pythagorean system, which was developed later, Chaldean Numerology maintained its 
            original spiritual and mystical foundations.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-indigo-50 to-violet-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-6 w-6 text-indigo-600" />
            How Chaldean Numerology Works
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <h3 className="font-semibold text-lg">Number-Letter Correspondence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="font-medium">Number 1:</p>
              <p className="text-gray-700">A, I, J, Q, Y</p>
              
              <p className="font-medium mt-2">Number 2:</p>
              <p className="text-gray-700">B, K, R</p>
              
              <p className="font-medium mt-2">Number 3:</p>
              <p className="text-gray-700">C, G, L, S</p>
              
              <p className="font-medium mt-2">Number 4:</p>
              <p className="text-gray-700">D, M, T</p>
            </div>
            <div className="space-y-2">
              <p className="font-medium">Number 5:</p>
              <p className="text-gray-700">E, H, N, X</p>
              
              <p className="font-medium mt-2">Number 6:</p>
              <p className="text-gray-700">U, V, W</p>
              
              <p className="font-medium mt-2">Number 7:</p>
              <p className="text-gray-700">O, Z</p>
              
              <p className="font-medium mt-2">Number 8:</p>
              <p className="text-gray-700">F, P</p>
            </div>
          </div>

          <h3 className="font-semibold text-lg mt-4">Calculation Process</h3>
          <p className="text-gray-700">
            Numbers are assigned to letters based on their vibrational energy. The total is then reduced to a single digit or master 
            number (11, 22, 33). Unlike other systems, Chaldean Numerology stops reduction at these master numbers, considering them 
            highly significant.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-violet-50 to-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Map className="h-6 w-6 text-violet-600" />
            Core Numbers Explained
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Star className="h-5 w-5 text-amber-600" />
                Destiny Number
              </h3>
              <p className="text-gray-700">
                Calculated from your birth date, this number reveals your life's purpose and the opportunities and challenges you'll 
                encounter. It represents your inherent capabilities and the path you're meant to follow.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Heart className="h-5 w-5 text-rose-600" />
                Soul Urge Number
              </h3>
              <p className="text-gray-700">
                Derived from the vowels in your name, this number reveals your inner desires, motivations, and what truly drives you. 
                It represents your emotional needs and what you're drawn to at a soul level.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Brain className="h-5 w-5 text-blue-600" />
                Personality Number
              </h3>
              <p className="text-gray-700">
                Calculated from the consonants in your name, this number shows how others perceive you and your outer personality. 
                It represents the face you show to the world and your natural behavioral tendencies.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-purple-600" />
                Expression Number
              </h3>
              <p className="text-gray-700">
                Derived from all letters in your name, this number reveals your natural talents and abilities. It represents your 
                potential and the gifts you can use to fulfill your destiny.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50 to-fuchsia-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <List className="h-6 w-6 text-purple-600" />
            Master Numbers and Special Numbers
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <h3 className="font-semibold text-lg">Master Numbers (11, 22, 33)</h3>
          <p className="text-gray-700">
            Master numbers are powerful numbers that carry special significance in Chaldean Numerology. They represent enhanced spiritual 
            potential and greater opportunities for growth and achievement, but also come with greater challenges.
          </p>

          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-medium">Master Number 11</h4>
              <p className="text-gray-700">
                The Illuminator - Represents intuition, spiritual insight, and enlightenment. People with this number often serve as 
                spiritual messengers and inspirational leaders.
              </p>
            </div>

            <div>
              <h4 className="font-medium">Master Number 22</h4>
              <p className="text-gray-700">
                The Master Builder - Combines vision with practical abilities. People with this number have the potential to achieve 
                great things and create lasting institutions or structures.
              </p>
            </div>

            <div>
              <h4 className="font-medium">Master Number 33</h4>
              <p className="text-gray-700">
                The Master Teacher - Represents compassion, healing, and spiritual upliftment. People with this number often become 
                great spiritual teachers or healers.
              </p>
            </div>
          </div>

          <h3 className="font-semibold text-lg mt-6">Karmic Numbers (13, 14, 16, 19)</h3>
          <p className="text-gray-700">
            Karmic numbers indicate challenges or lessons from past lives that need to be addressed in the current lifetime. They 
            represent opportunities for growth through overcoming specific obstacles.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChaldeanNumerologyInfo;