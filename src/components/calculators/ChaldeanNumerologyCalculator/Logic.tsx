'use client'
import React, { useState } from 'react';
import { Calculator, Info, Heart, Star, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ChaldeanCalculatorLogic = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [results, setResults] = useState(null);

  // Chaldean number mapping
  const chaldeanMap = {
    'a': 1, 'i': 1, 'j': 1, 'q': 1, 'y': 1,
    'b': 2, 'k': 2, 'r': 2,
    'c': 3, 'g': 3, 'l': 3, 's': 3,
    'd': 4, 'm': 4, 't': 4,
    'e': 5, 'h': 5, 'n': 5, 'x': 5,
    'u': 6, 'v': 6, 'w': 6,
    'o': 7, 'z': 7,
    'f': 8, 'p': 8
  };

  const detailedMeanings = {
    1: {
      general: "Leadership, independence, ambition, pioneering spirit",
      personality: "Natural born leaders who are independent, creative, and original. They have strong drive and determination to achieve their goals.",
      strengths: "Innovation, creativity, determination, self-reliance, originality",
      challenges: "May struggle with being too dominant or stubborn, needs to learn cooperation",
      career: "Suited for leadership positions, entrepreneurship, or independent work. Excel in roles requiring initiative and creativity.",
      relationships: "Values independence in relationships, needs a partner who understands their drive for autonomy",
      spirituality: "Independent spiritual seekers who often forge their own unique path"
    },
    2: {
      general: "Cooperation, diplomacy, sensitivity, balance",
      personality: "Natural mediators and peacemakers with strong intuitive and emotional capabilities",
      strengths: "Diplomacy, cooperation, sensitivity, attention to detail, patience",
      challenges: "May be oversensitive, indecisive, or too dependent on others",
      career: "Excel in supportive roles, counseling, teaching, or any position requiring cooperation and teamwork",
      relationships: "Makes loving, supportive partners who prioritize harmony and emotional connection",
      spirituality: "Naturally drawn to spiritual practices involving partnership and harmony"
    },
    3: {
      general: "Creativity, self-expression, joy, artistic abilities",
      personality: "Naturally expressive, creative, and sociable individuals who bring joy to others",
      strengths: "Creativity, communication, optimism, artistic talent, social skills",
      challenges: "May scatter energy or have difficulty focusing on practical matters",
      career: "Thrive in creative fields, entertainment, communication, or any role allowing self-expression",
      relationships: "Brings fun and creativity to relationships, needs freedom for self-expression",
      spirituality: "Expresses spirituality through creativity and joy"
    },
    4: {
      general: "Stability, organization, discipline, practical nature",
      personality: "Reliable, hardworking individuals who value order and structure",
      strengths: "Organization, reliability, practicality, attention to detail, strong work ethic",
      challenges: "May be too rigid or resistant to change",
      career: "Excel in management, finance, engineering, or any role requiring systematic approach",
      relationships: "Makes loyal and dependable partners who value stability",
      spirituality: "Approaches spirituality in a practical, structured way"
    },
    5: {
      general: "Freedom, adventure, versatility, adaptability",
      personality: "Dynamic, adventurous souls who embrace change and new experiences",
      strengths: "Adaptability, versatility, quick thinking, communication skills",
      challenges: "May resist commitment or have difficulty settling down",
      career: "Suited for sales, marketing, travel industry, or any role with variety",
      relationships: "Needs freedom and variety in relationships, makes exciting partners",
      spirituality: "Explores various spiritual paths and philosophies"
    },
    6: {
      general: "Harmony, responsibility, nurturing, healing",
      personality: "Natural caregivers with a strong sense of responsibility and desire for harmony",
      strengths: "Nurturing, responsibility, artistic ability, problem-solving",
      challenges: "May take on too much responsibility or be perfectionist",
      career: "Excel in healthcare, counseling, teaching, or artistic pursuits",
      relationships: "Makes caring and responsible partners, natural parents",
      spirituality: "Often drawn to healing and nurturing spiritual practices"
    },
    7: {
      general: "Analysis, wisdom, spirituality, inner-knowing",
      personality: "Deep thinkers and spiritual seekers with strong analytical minds",
      strengths: "Analysis, research, spiritual understanding, technical skills",
      challenges: "May be too introverted or skeptical",
      career: "Suited for research, analysis, teaching, or spiritual work",
      relationships: "Needs intellectual and spiritual connection in relationships",
      spirituality: "Natural mystics and spiritual investigators"
    },
    8: {
      general: "Power, abundance, material success, authority",
      personality: "Natural executives with strong business sense and leadership abilities",
      strengths: "Business acumen, leadership, organization, manifestation",
      challenges: "May focus too much on material success",
      career: "Excel in business, finance, management, or entrepreneurship",
      relationships: "Values stability and success in relationships",
      spirituality: "Balances material and spiritual pursuits"
    },
    9: {
      general: "Humanitarian, compassionate, global consciousness",
      personality: "Compassionate humanitarians with universal awareness",
      strengths: "Compassion, wisdom, artistic talent, universal understanding",
      challenges: "May sacrifice too much for others",
      career: "Suited for humanitarian work, teaching, counseling, or artistic pursuits",
      relationships: "Makes caring partners with universal perspective",
      spirituality: "Natural humanitarian with broad spiritual understanding"
    },
    11: {
      general: "Master number - Illumination, inspiration, spiritual insight",
      personality: "Highly intuitive visionaries with strong spiritual awareness",
      strengths: "Intuition, inspiration, spiritual insight, leadership",
      challenges: "May struggle with practical matters or high sensitivity",
      career: "Excel in spiritual leadership, counseling, or innovative fields",
      relationships: "Needs deep spiritual connection in relationships",
      spirituality: "Natural spiritual teachers and healers"
    },
    22: {
      general: "Master number - Master builder, practical idealism",
      personality: "Visionary builders who can manifest large-scale projects",
      strengths: "Practical manifestation, leadership, organization, vision",
      challenges: "May feel overwhelmed by potential or responsibilities",
      career: "Suited for large-scale projects, architecture, or organizational leadership",
      relationships: "Makes stable partners with grand vision",
      spirituality: "Manifests spiritual ideals in practical ways"
    },
    33: {
      general: "Master number - Spiritual teacher, healing through love",
      personality: "Nurturing teachers with high spiritual awareness",
      strengths: "Teaching, healing, nurturing, spiritual wisdom",
      challenges: "May take on others' burdens",
      career: "Excel in teaching, healing, counseling, or spiritual leadership",
      relationships: "Makes deeply nurturing and wise partners",
      spirituality: "Natural spiritual teachers and healers"
    }
  };

  // Previous calculation functions remain the same
  const calculateDestinyNumber = (date) => {
    const numbers = date.split('-').join('').split('').map(Number);
    let sum = numbers.reduce((a, b) => a + b, 0);
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      sum = sum.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    }
    return sum;
  };

  const calculateSoulUrge = (name) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelValues = name.toLowerCase().split('')
      .filter(char => vowels.includes(char))
      .map(char => chaldeanMap[char] || 0);
    let sum = vowelValues.reduce((a, b) => a + b, 0);
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      sum = sum.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    }
    return sum;
  };

  const calculatePersonality = (name) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonantValues = name.toLowerCase().split('')
      .filter(char => !vowels.includes(char) && chaldeanMap[char])
      .map(char => chaldeanMap[char]);
    let sum = consonantValues.reduce((a, b) => a + b, 0);
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      sum = sum.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    }
    return sum;
  };

  const calculateExpression = (name) => {
    const values = name.toLowerCase().split('')
      .map(char => chaldeanMap[char] || 0);
    let sum = values.reduce((a, b) => a + b, 0);
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      sum = sum.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    }
    return sum;
  };

  const calculateAll = () => {
    if (!name || !birthdate) return;

    const destiny = calculateDestinyNumber(birthdate);
    const soulUrge = calculateSoulUrge(name);
    const personality = calculatePersonality(name);
    const expression = calculateExpression(name);

    setResults({
      destiny,
      soulUrge,
      personality,
      expression,
      destinyMeaning: detailedMeanings[destiny],
      soulUrgeMeaning: detailedMeanings[soulUrge],
      personalityMeaning: detailedMeanings[personality],
      expressionMeaning: detailedMeanings[expression]
    });
    setStep(3);
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-purple-200 focus:border-purple-400"
                />
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              <Button 
                onClick={() => setStep(2)}
                disabled={!name}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </>
        );
      case 2:
        return (
          <>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Birthdate</label>
                <Input
                  type="date"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                  className="border-purple-200 focus:border-purple-400"
                />
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <Button 
                variant="outline"
                onClick={() => setStep(1)}
                className="border-purple-200"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button 
                onClick={calculateAll}
                disabled={!birthdate}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Calculate Numbers
              </Button>
            </CardFooter>
          </>
        );
      default:
        return null;
    }
  };

  const renderNumberCard = (title, number, meaning, icon) => (
    <Card className="bg-gradient-to-br from-purple-50 to-blue-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          {title}: {number}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h4 className="font-semibold">General Meaning</h4>
          <p className="text-gray-600">{meaning.general}</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">Personality</h4>
          <p className="text-gray-600">{meaning.personality}</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">Strengths</h4>
          <p className="text-gray-600">{meaning.strengths}</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">Challenges</h4>
          <p className="text-gray-600">{meaning.challenges}</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">Career Path</h4>
          <p className="text-gray-600">{meaning.career}</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">Relationships</h4>
          <p className="text-gray-600">{meaning.relationships}</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">Spiritual Aspect</h4>
          <p className="text-gray-600">{meaning.spirituality}</p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {step < 3 && (
        <Card className="bg-gradient-to-br from-purple-50 to-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Calculator className="h-6 w-6 text-purple-600" />
              Chaldean Numerology Calculator
            </CardTitle>
            <CardDescription>
              Step {step} of 2: {step === 1 ? 'Enter your name' : 'Enter your birthdate'}
            </CardDescription>
          </CardHeader>
          {renderStep()}
        </Card>
      )}

      {results && (
        <div className="space-y-6">
         {renderNumberCard("Destiny Number", results.destiny, results.destinyMeaning, 
            <Star className="h-5 w-5 text-blue-600" />
          )}
          
          {renderNumberCard("Soul Urge Number", results.soulUrge, results.soulUrgeMeaning,
            <Heart className="h-5 w-5 text-purple-600" />
          )}
          
          {renderNumberCard("Personality Number", results.personality, results.personalityMeaning,
            <Info className="h-5 w-5 text-pink-600" />
          )}
          
          {renderNumberCard("Expression Number", results.expression, results.expressionMeaning,
            <Sparkles className="h-5 w-5 text-rose-600" />
          )}
          
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-blue-600" />
                Start New Calculation
              </CardTitle>
            </CardHeader>
            <CardFooter>
              <Button 
                onClick={() => {
                  setStep(1);
                  setResults(null);
                  setName('');
                  setBirthdate('');
                }}
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                Calculate Another Reading
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ChaldeanCalculatorLogic;