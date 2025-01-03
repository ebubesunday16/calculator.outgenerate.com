'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles, ArrowRight, ArrowLeft, Calendar, Hash, Percent } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';

const CoupleNumerologyLogic = () => {
  const [step, setStep] = useState(1);
  const [person1, setPerson1] = useState({
    name: '',
    birthDate: ''
  });
  const [person2, setPerson2] = useState({
    name: '',
    birthDate: ''
  });
  const [result, setResult] = useState(null);

  const calculateLifePath = (date) => {
    if (!date) return 0;
    const nums = date.split('-').join('').split('').map(Number);
    let sum = nums.reduce((a, b) => a + b, 0);
    while (sum > 9) {
      sum = sum.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    }
    return sum;
  };

  const calculateExpression = (name) => {
    if (!name) return 0;
    const numerologyValues = {
      a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
      j: 1, k: 2, l: 3, m: 4, n: 5, o: 6, p: 7, q: 8, r: 9,
      s: 1, t: 2, u: 3, v: 4, w: 5, x: 6, y: 7, z: 8
    };

    let sum = name.toLowerCase().split('')
      .filter(char => /[a-z]/.test(char))
      .map(char => numerologyValues[char])
      .reduce((a, b) => a + b, 0);

    while (sum > 9) {
      sum = sum.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    }
    return sum;
  };

  const calculateSoulUrge = (name) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const numerologyValues = {
      a: 1, e: 5, i: 9, o: 6, u: 3
    };

    let sum = name.toLowerCase().split('')
      .filter(char => vowels.includes(char))
      .map(char => numerologyValues[char])
      .reduce((a, b) => a + b, 0);

    while (sum > 9) {
      sum = sum.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    }
    return sum;
  };

  const calculateCompatibilityPercentage = (p1, p2) => {
    // Calculate based on multiple factors
    const lifePathCompat = 100 - (Math.abs(p1.lifePath - p2.lifePath) * 11);
    const expressionCompat = 100 - (Math.abs(p1.expression - p2.expression) * 11);
    const soulUrgeCompat = 100 - (Math.abs(p1.soulUrge - p2.soulUrge) * 11);
    
    // Weight the factors
    const totalCompat = (lifePathCompat * 0.4) + (expressionCompat * 0.3) + (soulUrgeCompat * 0.3);
    return Math.min(Math.max(Math.round(totalCompat), 0), 100);
  };

  const calculateDestiny = (p1Life, p2Life) => {
    let sum = p1Life + p2Life;
    while (sum > 9) {
      sum = sum.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    }
    return sum;
  };

  const getChallenges = (p1, p2) => {
    const challenges = [];
    if (Math.abs(p1.lifePath - p2.lifePath) > 4) {
      challenges.push("Different life approaches may require extra understanding");
    }
    if (Math.abs(p1.expression - p2.expression) > 4) {
      challenges.push("Communication styles may need harmonizing");
    }
    if (Math.abs(p1.soulUrge - p2.soulUrge) > 4) {
      challenges.push("Emotional needs may differ significantly");
    }
    return challenges;
  };

  const getStrengths = (p1, p2) => {
    const strengths = [];
    if (Math.abs(p1.lifePath - p2.lifePath) < 3) {
      strengths.push("Natural alignment in life goals");
    }
    if (Math.abs(p1.expression - p2.expression) < 3) {
      strengths.push("Strong communication compatibility");
    }
    if (Math.abs(p1.soulUrge - p2.soulUrge) < 3) {
      strengths.push("Deep emotional connection");
    }
    return strengths;
  };

  const calculateCompatibility = () => {
    const p1Life = calculateLifePath(person1.birthDate);
    const p2Life = calculateLifePath(person2.birthDate);
    const p1Expression = calculateExpression(person1.name);
    const p2Expression = calculateExpression(person2.name);
    const p1SoulUrge = calculateSoulUrge(person1.name);
    const p2SoulUrge = calculateSoulUrge(person2.name);
    
    const p1Results = {
      lifePath: p1Life,
      expression: p1Expression,
      soulUrge: p1SoulUrge
    };
    
    const p2Results = {
      lifePath: p2Life,
      expression: p2Expression,
      soulUrge: p2SoulUrge
    };

    const destinyNumber = calculateDestiny(p1Life, p2Life);
    const compatibilityScore = calculateCompatibilityPercentage(p1Results, p2Results);
    const challenges = getChallenges(p1Results, p2Results);
    const strengths = getStrengths(p1Results, p2Results);

    setResult({
      person1: p1Results,
      person2: p2Results,
      destiny: destinyNumber,
      compatibility: compatibilityScore,
      challenges,
      strengths
    });
  };

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-700 flex items-center gap-2">
              <Sparkles className="text-purple-500" />
              Enter First Person's Name
            </h3>
            <Input
              placeholder="Full Name"
              value={person1.name}
              onChange={(e) => setPerson1({ ...person1, name: e.target.value })}
              className="border-purple-200"
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-700 flex items-center gap-2">
              <Calendar className="text-purple-500" />
              Enter First Person's Birth Date
            </h3>
            <Input
              type="date"
              value={person1.birthDate}
              onChange={(e) => setPerson1({ ...person1, birthDate: e.target.value })}
              className="border-purple-200"
            />
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-700 flex items-center gap-2">
              <Sparkles className="text-purple-500" />
              Enter Second Person's Name
            </h3>
            <Input
              placeholder="Full Name"
              value={person2.name}
              onChange={(e) => setPerson2({ ...person2, name: e.target.value })}
              className="border-purple-200"
            />
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-700 flex items-center gap-2">
              <Calendar className="text-purple-500" />
              Enter Second Person's Birth Date
            </h3>
            <Input
              type="date"
              value={person2.birthDate}
              onChange={(e) => setPerson2({ ...person2, birthDate: e.target.value })}
              className="border-purple-200"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-gradient-to-r from-pink-50 to-purple-50">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-purple-800 flex items-center justify-center gap-2">
            <Heart className="text-pink-500" />
            Couple Numerology Calculator
            <Heart className="text-pink-500" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          {!result && (
            <>
              <Progress value={(step / 4) * 100} className="mb-6" />
              {renderStep()}
              <div className="flex justify-between mt-6">
                {step > 1 && (
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back
                  </Button>
                )}
                {step < 4 ? (
                  <Button
                    onClick={nextStep}
                    className="ml-auto flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500"
                  >
                    Next <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={calculateCompatibility}
                    className="ml-auto bg-gradient-to-r from-purple-500 to-pink-500"
                  >
                    Calculate Compatibility
                  </Button>
                )}
              </div>
            </>
          )}

          {result && (
            <div className="space-y-6">
              <Alert className="bg-gradient-to-r from-purple-100 to-pink-100 border-purple-200">
                <Heart className="text-pink-500 h-5 w-5" />
                <AlertTitle className="text-2xl text-purple-800 flex items-center gap-2">
                  {person1.name} & {person2.name}
                  <Percent className="h-5 w-5 text-pink-500" />
                  <span className="text-pink-500">{result.compatibility}% Compatible</span>
                </AlertTitle>
                <AlertDescription className="mt-4 space-y-4">
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-700 mb-2">Relationship Strengths:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {result.strengths.map((strength, index) => (
                        <li key={index} className="text-purple-600">{strength}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-700 mb-2">Areas for Growth:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {result.challenges.map((challenge, index) => (
                        <li key={index} className="text-purple-600">{challenge}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-700 mb-2">Numerological Insights:</h4>
                    <p className="text-purple-600">Your combined Destiny Number is {result.destiny}, 
                    indicating a relationship with strong potential for {result.destiny === 1 ? "leadership and innovation" : 
                    result.destiny === 2 ? "harmony and cooperation" :
                    result.destiny === 3 ? "creativity and expression" :
                    result.destiny === 4 ? "stability and building together" :
                    result.destiny === 5 ? "adventure and freedom" :
                    result.destiny === 6 ? "nurturing and responsibility" :
                    result.destiny === 7 ? "spiritual growth and wisdom" :
                    result.destiny === 8 ? "material success and power" :
                    "humanitarian service and completion"}.</p>
                  </div>
                </AlertDescription>
              </Alert>

              <Button 
                onClick={() => {
                  setResult(null);
                  setStep(1);
                  setPerson1({ name: '', birthDate: '' });
                  setPerson2({ name: '', birthDate: '' });
                }}
                variant="outline"
                className="w-full"
              >
                Calculate Another Couple
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CoupleNumerologyLogic;