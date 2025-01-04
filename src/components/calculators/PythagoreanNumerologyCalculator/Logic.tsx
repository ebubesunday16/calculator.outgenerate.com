'use client'
import React, { useState } from 'react';
import { Calculator, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Type definitions
type NumerologyResult = {
  lifePathNumber: number;
  destinyNumber: number;
  soulUrgeNumber: number;
  personalityNumber: number;
  maturityNumber: number;
  interpretations: {
    lifePath: string;
    destiny: string;
    soulUrge: string;
    personality: string;
    maturity: string;
  };
};

const PythagoreanNumerologyLogic = () => {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [result, setResult] = useState<NumerologyResult | null>(null);

  // Numerology calculation functions
  const reduceToSingleDigit = (num: number): number => {
    if (num <= 9) return num;
    return reduceToSingleDigit(
      String(num).split('').reduce((sum, digit) => sum + parseInt(digit), 0)
    );
  };

  const getNumberValue = (char: string): number => {
    const letterValues: { [key: string]: number } = {
      'a': 1, 'j': 1, 's': 1,
      'b': 2, 'k': 2, 't': 2,
      'c': 3, 'l': 3, 'u': 3,
      'd': 4, 'm': 4, 'v': 4,
      'e': 5, 'n': 5, 'w': 5,
      'f': 6, 'o': 6, 'x': 6,
      'g': 7, 'p': 7, 'y': 7,
      'h': 8, 'q': 8, 'z': 8,
      'i': 9, 'r': 9
    };
    return letterValues[char.toLowerCase()] || 0;
  };

  const calculateLifePathNumber = (date: string): number => {
    const numbers = date.split('-').join('').split('').map(Number);
    return reduceToSingleDigit(numbers.reduce((sum, num) => sum + num, 0));
  };

  const calculateDestinyNumber = (fullName: string): number => {
    return reduceToSingleDigit(
      fullName.split('').reduce((sum, char) => sum + getNumberValue(char), 0)
    );
  };

  const calculateSoulUrgeNumber = (fullName: string): number => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return reduceToSingleDigit(
      fullName.split('').reduce((sum, char) => 
        vowels.includes(char.toLowerCase()) ? sum + getNumberValue(char) : sum, 0
      )
    );
  };

  const calculatePersonalityNumber = (fullName: string): number => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return reduceToSingleDigit(
      fullName.split('').reduce((sum, char) => 
        !vowels.includes(char.toLowerCase()) ? sum + getNumberValue(char) : sum, 0
      )
    );
  };

  const getInterpretation = (number: number, type: string): string => {
    const interpretations: { [key: string]: { [key: number]: string } } = {
      lifePath: {
        1: "Natural born leader, independent and ambitious",
        2: "Diplomatic, cooperative and sensitive",
        3: "Creative, expressive and optimistic",
        4: "Practical, hardworking and trustworthy",
        5: "Adventurous, freedom-loving and versatile",
        6: "Nurturing, responsible and caring",
        7: "Analytical, spiritual and wise",
        8: "Successful, material-focused and powerful",
        9: "Humanitarian, compassionate and selfless"
      },
      destiny: {
        1: "Leadership and innovation are your destiny",
        2: "Your destiny lies in cooperation and balance",
        3: "You are destined for creative expression",
        4: "Building stable foundations is your destiny",
        5: "Change and adventure define your path",
        6: "Service and responsibility are your calling",
        7: "Spiritual wisdom is your destiny",
        8: "Material abundance is your destiny",
        9: "Humanitarian service is your ultimate path"
      },
      soulUrge: {
        1: "Deep desire for independence and achievement",
        2: "Inner need for harmony and cooperation",
        3: "Soul yearns for self-expression and joy",
        4: "Inner desire for stability and order",
        5: "Deep need for freedom and change",
        6: "Soul seeks love and nurturing others",
        7: "Inner yearning for spiritual wisdom",
        8: "Deep desire for material success",
        9: "Soul yearns to serve humanity"
      },
      personality: {
        1: "Appears confident and independent",
        2: "Presents as diplomatic and cooperative",
        3: "Comes across as creative and social",
        4: "Appears practical and reliable",
        5: "Presents as adventurous and adaptable",
        6: "Comes across as responsible and caring",
        7: "Appears mysterious and intellectual",
        8: "Presents as successful and capable",
        9: "Comes across as compassionate and wise"
      },
      maturity: {
        1: "Growing into leadership",
        2: "Developing diplomatic skills",
        3: "Maturing through creative expression",
        4: "Growing through practical wisdom",
        5: "Developing adaptability",
        6: "Maturing through responsibility",
        7: "Growing in spiritual wisdom",
        8: "Developing material mastery",
        9: "Maturing through service"
      }
    };

    return interpretations[type][number] || "Interpretation not available";
  };

  const calculateNumbers = () => {
    if (!name || !birthdate) return;

    const lifePathNumber = calculateLifePathNumber(birthdate);
    const destinyNumber = calculateDestinyNumber(name);
    const soulUrgeNumber = calculateSoulUrgeNumber(name);
    const personalityNumber = calculatePersonalityNumber(name);
    const maturityNumber = reduceToSingleDigit(lifePathNumber + destinyNumber);

    setResult({
      lifePathNumber,
      destinyNumber,
      soulUrgeNumber,
      personalityNumber,
      maturityNumber,
      interpretations: {
        lifePath: getInterpretation(lifePathNumber, 'lifePath'),
        destiny: getInterpretation(destinyNumber, 'destiny'),
        soulUrge: getInterpretation(soulUrgeNumber, 'soulUrge'),
        personality: getInterpretation(personalityNumber, 'personality'),
        maturity: getInterpretation(maturityNumber, 'maturity')
      }
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-6 h-6" />
            Pythagorean Numerology Calculator
          </CardTitle>
          <CardDescription>
            Discover your numerological profile based on Pythagorean numerology
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full"
            />
            <Input
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              className="w-full"
            />
            <Button 
              onClick={calculateNumbers}
              className="w-full"
              disabled={!name || !birthdate}
            >
              Calculate Numbers
            </Button>
          </div>

          {result && (
            <div className="space-y-4 mt-6">
              <Alert>
                <Info className="w-4 h-4" />
                <AlertDescription>
                  Your Core Numbers & Their Meanings
                </AlertDescription>
              </Alert>

              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Life Path Number: {result.lifePathNumber}</CardTitle>
                  </CardHeader>
                  <CardContent>{result.interpretations.lifePath}</CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Destiny Number: {result.destinyNumber}</CardTitle>
                  </CardHeader>
                  <CardContent>{result.interpretations.destiny}</CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Soul Urge Number: {result.soulUrgeNumber}</CardTitle>
                  </CardHeader>
                  <CardContent>{result.interpretations.soulUrge}</CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Personality Number: {result.personalityNumber}</CardTitle>
                  </CardHeader>
                  <CardContent>{result.interpretations.personality}</CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Maturity Number: {result.maturityNumber}</CardTitle>
                  </CardHeader>
                  <CardContent>{result.interpretations.maturity}</CardContent>
                </Card>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PythagoreanNumerologyLogic;