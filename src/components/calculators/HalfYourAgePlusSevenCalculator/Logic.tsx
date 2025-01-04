'use client'

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Heart, Info, ArrowDown } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const HalfAgePlusSevenLogic = () => {
  const [age, setAge] = useState<string>('');
  const [result, setResult] = useState<{
    minAge: number;
    maxAge: number;
    idealRange: string;
    lifeStageAnalysis: string;
    generationGap: string;
    commonChallenges: string;
    commonInterests: string;
  } | null>(null);

  const calculateAgeRange = () => {
    const personAge = parseInt(age);
    if (isNaN(personAge)) return;

    // Calculate recommended age range
    const minAge = Math.ceil(personAge / 2 + 7);
    const maxAge = (personAge - 7) * 2;

    setResult({
      minAge,
      maxAge,
      idealRange: getIdealRangeAnalysis(personAge, minAge, maxAge),
      lifeStageAnalysis: getLifeStageAnalysis(personAge),
      generationGap: getGenerationGapAnalysis(personAge, minAge, maxAge),
      commonChallenges: getChallenges(personAge),
      commonInterests: getCommonInterests(personAge)
    });
  };

  const getIdealRangeAnalysis = (age: number, min: number, max: number): string => {
    const rangeMid = (min + max) / 2;
    return `Your ideal dating range spans ${max - min} years. The most balanced connections might be found around age ${Math.round(rangeMid)}, as this represents a sweet spot between life experience and generational alignment. This provides enough difference for diverse perspectives while maintaining common ground.`;
  };

  const getLifeStageAnalysis = (age: number): string => {
    if (age < 25) {
      return "You're in a period of significant personal growth and development. Consider that people in their early 20s often experience rapid life changes in terms of career, education, and personal identity.";
    } else if (age < 35) {
      return "At this stage, career establishment and long-term planning often become priorities. Partners within your range are likely to share similar life goals and timeline considerations.";
    } else if (age < 50) {
      return "Mid-life brings stability and clearer life perspectives. Your recommended range includes people who likely have established careers and life experience, facilitating deeper connections.";
    }
    return "At this life stage, shared values and companionship often take precedence over traditional age considerations. Your range includes people with rich life experiences and established personalities.";
  };

  const getGenerationGapAnalysis = (age: number, min: number, max: number): string => {
    const yearSpan = max - min;
    if (yearSpan > 20) {
      return "Your range spans multiple generations. While this can bring diverse perspectives, be mindful of potential cultural and technological gaps that might require additional understanding and communication.";
    }
    return "Your range typically stays within 1-2 generations, suggesting shared cultural touchstones and references. This often leads to natural understanding of each other's perspectives and experiences.";
  };

  const getChallenges = (age: number): string => {
    if (age < 30) {
      return "Different educational or career stages, varying levels of independence, and differing priorities in personal growth might be common challenges within your range.";
    } else if (age < 45) {
      return "Family planning timing, career establishment levels, and financial goals might vary significantly across your recommended age range.";
    }
    return "Health considerations, retirement planning alignment, and energy levels for activities might vary across your recommended age range.";
  };

  const getCommonInterests = (age: number): string => {
    if (age < 30) {
      return "People in your range often share interests in personal development, social activities, and exploring new life experiences.";
    } else if (age < 45) {
      return "Common interests might include career growth, family planning, travel, and establishing long-term lifestyle preferences.";
    }
    return "Shared interests often include cultural activities, travel, maintaining health and wellness, and enjoying established lifestyles.";
  };

  return (
    <Card className="w-full max-w-5xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl flex items-center justify-center gap-2">
          <Heart className="text-pink-500" /> Half Plus Seven Rule Calculator
        </CardTitle>
        <CardDescription>
          Find your recommended dating age range based on the "half-plus-seven" rule
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Your Age</label>
          <Input
            type="number"
            min="1"
            max="120"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
            className="w-full"
          />
        </div>

        <Button 
          onClick={calculateAgeRange}
          className="w-full"
          disabled={!age}
        >
          Calculate Recommended Range
        </Button>

        {result && (
          <div className="space-y-4">
            <Separator />
            
            <Alert>
              <div className="flex items-center gap-2">
                <ArrowDown className="text-blue-500" />
                <AlertTitle>
                  Your Recommended Dating Age Range
                </AlertTitle>
              </div>
              <AlertDescription className="mt-2 text-lg font-semibold">
                {result.minAge} to {result.maxAge} years old
              </AlertDescription>
            </Alert>

            <div className="space-y-4 bg-slate-50 p-4 rounded-lg">
              <div className="flex items-start gap-2">
                <Info className="mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Ideal Range Analysis</h4>
                  <p className="text-sm text-gray-600">{result.idealRange}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Info className="mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Life Stage Considerations</h4>
                  <p className="text-sm text-gray-600">{result.lifeStageAnalysis}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Info className="mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Generation Gap Analysis</h4>
                  <p className="text-sm text-gray-600">{result.generationGap}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Info className="mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Common Challenges</h4>
                  <p className="text-sm text-gray-600">{result.commonChallenges}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Info className="mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Shared Interests & Values</h4>
                  <p className="text-sm text-gray-600">{result.commonInterests}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="text-center text-sm text-gray-500">
        <p className="w-full">
          Note: This calculator provides general guidelines based on social norms. Every relationship is unique and should be evaluated based on individual circumstances and compatibility.
        </p>
      </CardFooter>
    </Card>
  );
};

export default HalfAgePlusSevenLogic;