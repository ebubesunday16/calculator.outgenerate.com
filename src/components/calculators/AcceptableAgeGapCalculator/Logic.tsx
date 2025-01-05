'use client'
import React, { useState, useEffect } from 'react';
import { Calculator, Heart, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

const AcceptableAgeGapLogic = () => {
  const [person1Age, setPerson1Age] = useState<number>(25);
  const [person2Age, setPerson2Age] = useState<number>(25);
  const [analysis, setAnalysis] = useState<{
    ageGap: number;
    halfPlusSevenRule: boolean;
    tenYearRule: boolean;
    lifeStageCompatibility: string;
    details: string[];
    recommendation: string;
    score: number;
  } | null>(null);

  const calculateAgeGap = () => {
    const ageGap = Math.abs(person1Age - person2Age);
    const youngerAge = Math.min(person1Age, person2Age);
    const olderAge = Math.max(person1Age, person2Age);
    
    // Half plus seven rule check
    const minimumAge = Math.floor(olderAge / 2) + 7;
    const halfPlusSevenRule = youngerAge >= minimumAge;
    
    // Ten year rule
    const tenYearRule = ageGap <= 10;
    
    // Life stage analysis
    const getLifeStage = (age: number): string => {
      if (age < 18) return 'Minor';
      if (age < 23) return 'College/Early Career';
      if (age < 30) return 'Career Establishment';
      if (age < 40) return 'Mid-Career/Family Formation';
      if (age < 50) return 'Established Adult';
      if (age < 65) return 'Late Career';
      return 'Retirement Age';
    };

    const person1Stage = getLifeStage(person1Age);
    const person2Stage = getLifeStage(person2Age);
    
    // Calculate compatibility score (0-100)
    let score = 100;
    score -= ageGap * 2; // Deduct points for age gap
    if (!halfPlusSevenRule) score -= 30;
    if (!tenYearRule) score -= 20;
    if (person1Stage !== person2Stage) score -= 15;
    score = Math.max(0, Math.min(100, score));
    
    // Generate detailed analysis
    const details = [
      `Age gap: ${ageGap} years`,
      `Younger person: ${youngerAge} (${getLifeStage(youngerAge)})`,
      `Older person: ${olderAge} (${getLifeStage(olderAge)})`,
      `Half plus seven rule: ${halfPlusSevenRule ? 'Passes' : 'Does not pass'} (minimum age should be ${minimumAge})`,
      `Ten year rule: ${tenYearRule ? 'Passes' : 'Exceeds recommended maximum'}`,
      `Life stages: ${person1Stage === person2Stage ? 'Same life stage' : 'Different life stages'}`
    ];

    // Generate recommendation
    let recommendation = '';
    if (score >= 80) {
      recommendation = 'The age gap appears to be within socially acceptable ranges. Common life experiences and maturity levels suggest good compatibility.';
    } else if (score >= 60) {
      recommendation = 'The age gap is notable but not uncommon. Consider potential differences in life experiences and goals.';
    } else if (score >= 40) {
      recommendation = 'The age gap is significant. Carefully consider differences in life stages, experiences, and long-term goals.';
    } else {
      recommendation = 'The age gap is substantial and may present significant challenges. Consider potential power dynamics and differences in life experiences.';
    }

    setAnalysis({
      ageGap,
      halfPlusSevenRule,
      tenYearRule,
      lifeStageCompatibility: person1Stage === person2Stage ? 'Compatible' : 'Different Stages',
      details,
      recommendation,
      score
    });
  };

  useEffect(() => {
    calculateAgeGap();
  }, [person1Age, person2Age]);

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-6 h-6" />
          Age Gap Calculator
        </CardTitle>
        <CardDescription>
          Analyze the age difference and compatibility between two people
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Person 1 Age: {person1Age}</label>
            <Slider
              value={[person1Age]}
              onValueChange={(value) => setPerson1Age(value[0])}
              max={100}
              min={18}
              step={1}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Person 2 Age: {person2Age}</label>
            <Slider
              value={[person2Age]}
              onValueChange={(value) => setPerson2Age(value[0])}
              max={100}
              min={18}
              step={1}
              className="w-full"
            />
          </div>
        </div>

        {analysis && (
          <div className="space-y-4 mt-6">
            <Alert variant={analysis.score >= 60 ? "default" : "destructive"}>
              <Heart className="w-4 h-4" />
              <AlertTitle>Compatibility Score: {analysis.score}%</AlertTitle>
              <AlertDescription>{analysis.recommendation}</AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {analysis.details.map((detail, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  {detail.includes('Passes') ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : detail.includes('not pass') || detail.includes('Exceeds') ? (
                    <XCircle className="w-4 h-4 text-red-500" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-blue-500" />
                  )}
                  {detail}
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AcceptableAgeGapLogic;