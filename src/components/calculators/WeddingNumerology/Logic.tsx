'use client'

import React, { useState } from 'react';
import { Heart, Info, ArrowRight, ArrowLeft } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Type definitions
type Step = 1 | 2 | 3 | 4 | 5;

interface FormData {
  partner1Name: string;
  partner1Date: string;
  partner2Name: string;
  partner2Date: string;
  weddingDate: string;
}

interface NumerologyResults {
  partner1LifePath: number;
  partner2LifePath: number;
  marriageNumber: number;
  universalDay: number | null;
  dateCompatibility: number | null;
  monthRating: 'Excellent' | 'Good' | 'Neutral';
  isIdealDate: boolean;
}

interface SuggestedDate {
  date: Date;
  compatibility: number;
}

type NumberMeanings = {
  [K in 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9]: string;
};

const initialFormData: FormData = {
  partner1Name: '',
  partner1Date: '',
  partner2Name: '',
  partner2Date: '',
  weddingDate: ''
};

const numberMeanings: NumberMeanings = {
  1: "New beginnings and leadership. A great day for innovative couples!",
  2: "Partnership and harmony. Perfect for emphasizing your connection.",
  3: "Creativity and expression. Your wedding may be artistic and fun.",
  4: "Strong foundation and stability. Excellent for long-lasting marriage.",
  5: "Adventure and change. Good for unconventional couples.",
  6: "Love, harmony, and family. The most ideal number for weddings!",
  7: "Spiritual connection but may be isolating. Consider another date.",
  8: "Success and power. Good for career-focused couples.",
  9: "Completion and endings. Not ideal for new beginnings."
};

const WeddingNumerologyLogic: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [results, setResults] = useState<NumerologyResults | null>(null);
  const [suggestedDates, setSuggestedDates] = useState<SuggestedDate[]>([]);

  // Helper function to reduce numbers to a single digit
  const reduceToSingleDigit = (num: number): number => {
    if (num <= 9) return num;
    return reduceToSingleDigit(String(num).split('').reduce((a, b) => Number(a) + Number(b), 0));
  };

  // Calculate life path number from birth date
  const calculateLifePath = (dateStr: string): number => {
    const date = new Date(dateStr);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    
    const monthNum = reduceToSingleDigit(month);
    const dayNum = reduceToSingleDigit(day);
    const yearNum = reduceToSingleDigit(year);
    
    return reduceToSingleDigit(monthNum + dayNum + yearNum);
  };

  // Calculate universal day number
  const calculateUniversalDay = (dateStr: string): number => {
    const date = new Date(dateStr);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    
    return reduceToSingleDigit(month + day + reduceToSingleDigit(year));
  };

  // Check if date is weekend (Friday, Saturday, Sunday)
  const isWeekend = (date: Date): boolean => {
    const day = date.getDay();
    return day === 5 || day === 6 || day === 0;
  };

  // Find suggested dates
  const findSuggestedDates = (marriageNumber: number): SuggestedDate[] => {
    const suggestedDates: SuggestedDate[] = [];
    const startDate = new Date();
    const endDate = new Date();
    endDate.setFullYear(endDate.getFullYear() + 1);

    const currentDate = new Date(startDate);
    while (currentDate <= endDate && suggestedDates.length < 5) {
      if (isWeekend(currentDate)) {
        const universalDay = calculateUniversalDay(currentDate.toISOString());
        const compatibility = reduceToSingleDigit(marriageNumber + universalDay);
        if (compatibility === 4 || compatibility === 6) {
          suggestedDates.push({
            date: new Date(currentDate),
            compatibility
          });
        }
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return suggestedDates;
  };

  const getNumberMeaning = (num: number): string => {
    return numberMeanings[num as keyof NumberMeanings] || "";
  };

  const calculateResults = (): void => {
    const partner1LifePath = calculateLifePath(formData.partner1Date);
    const partner2LifePath = calculateLifePath(formData.partner2Date);
    const marriageNumber = reduceToSingleDigit(partner1LifePath + partner2LifePath);
    const universalDay = formData.weddingDate ? calculateUniversalDay(formData.weddingDate) : null;
    const dateCompatibility = universalDay ? reduceToSingleDigit(marriageNumber + universalDay) : null;

    const suggested = findSuggestedDates(marriageNumber);
    setSuggestedDates(suggested);

    const weddingMonth = formData.weddingDate ? new Date(formData.weddingDate).getMonth() + 1 : null;
    const monthRating: NumerologyResults['monthRating'] = 
      weddingMonth === 4 || weddingMonth === 6 ? "Excellent" : 
      weddingMonth === 1 || weddingMonth === 2 ? "Good" : "Neutral";

    setResults({
      partner1LifePath,
      partner2LifePath,
      marriageNumber,
      universalDay,
      dateCompatibility,
      monthRating,
      isIdealDate: dateCompatibility === 4 || dateCompatibility === 6
    });
  };

  const handleNext = (): void => {
    if (currentStep === 4) {
      calculateResults();
    }
    setCurrentStep(prev => Math.min(prev + 1, 5) as Step);
  };

  const handleBack = (): void => {
    setCurrentStep(prev => Math.max(prev - 1, 1) as Step);
  };

  const handleFormChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const renderStep = (): JSX.Element | null => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">First Partner's Name</label>
              <Input
                value={formData.partner1Name}
                onChange={handleFormChange('partner1Name')}
                placeholder="Enter name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Birth Date</label>
              <Input
                type="date"
                value={formData.partner1Date}
                onChange={handleFormChange('partner1Date')}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Second Partner's Name</label>
              <Input
                value={formData.partner2Name}
                onChange={handleFormChange('partner2Name')}
                placeholder="Enter name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Birth Date</label>
              <Input
                type="date"
                value={formData.partner2Date}
                onChange={handleFormChange('partner2Date')}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-2">
            <label className="text-sm font-medium">Proposed Wedding Date (Optional)</label>
            <Input
              type="date"
              value={formData.weddingDate}
              onChange={handleFormChange('weddingDate')}
            />
          </div>
        );
      case 4:
        return (
          <div className="text-center p-4">
            <h3 className="text-lg font-medium mb-4">Ready to Calculate!</h3>
            <p>Click submit to see your numerology results</p>
          </div>
        );
      case 5:
        return results && (
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Life Path Numbers</h3>
                <p>{formData.partner1Name}: {results.partner1LifePath}</p>
                <p>{formData.partner2Name}: {results.partner2LifePath}</p>
                <p className="mt-2">Marriage Number: {results.marriageNumber}</p>
              </div>
              {formData.weddingDate && (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-2">Wedding Date Analysis</h3>
                  <p>Universal Day: {results.universalDay}</p>
                  <p>Date Compatibility: {results.dateCompatibility}</p>
                  <p>Month Rating: {results.monthRating}</p>
                </div>
              )}
            </div>

            {formData.weddingDate && results.dateCompatibility && (
              <Alert className={results.isIdealDate ? "bg-green-50" : "bg-yellow-50"}>
                <AlertDescription>
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Date Meaning: {getNumberMeaning(results.dateCompatibility)}</p>
                      {results.isIdealDate ? (
                        <p className="mt-2 text-green-700">This is an ideal wedding date according to numerology!</p>
                      ) : (
                        <p className="mt-2 text-yellow-700">Consider one of our suggested dates below for optimal wedding energy.</p>
                      )}
                    </div>
                  </div>
                </AlertDescription>
              </Alert>
            )}

            <div className="space-y-4">
              <h3 className="font-medium">Suggested Wedding Dates</h3>
              <div className="grid gap-3 md:grid-cols-2">
                {suggestedDates.map((date, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium">
                      {date.date.toLocaleDateString('en-US', { 
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <p className="text-sm text-gray-600">
                      Compatibility: {date.compatibility} - {getNumberMeaning(date.compatibility)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-pink-500" />
            <CardTitle>Wedding Date Numerology Calculator</CardTitle>
          </div>
          <CardDescription>
            Find your perfect wedding date using ancient numerology principles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4, 5].map((step) => (
                <div
                  key={step}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step === currentStep
                      ? 'bg-pink-500 text-white'
                      : step < currentStep
                      ? 'bg-gray-200'
                      : 'bg-gray-100'
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
            <div className="h-2 bg-gray-100 rounded-full">
              <div
                className="h-2 bg-pink-500 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
              />
            </div>
          </div>
          {renderStep()}
        </CardContent>
        <CardFooter className="flex justify-between">
          {currentStep > 1 && (
            <Button variant="outline" onClick={handleBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          )}
          {currentStep < 5 && (
            <Button 
              className="ml-auto"
              onClick={handleNext}
              disabled={
                (currentStep === 1 && (!formData.partner1Name || !formData.partner1Date)) ||
                (currentStep === 2 && (!formData.partner2Name || !formData.partner2Date))
              }
            >
              {currentStep === 4 ? 'Submit' : 'Next'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default WeddingNumerologyLogic;