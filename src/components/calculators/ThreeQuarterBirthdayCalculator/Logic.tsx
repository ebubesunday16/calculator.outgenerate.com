'use client'
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// Type definitions for better type safety
type BirthdayInfo = {
  birthDate: Date;
  threeQuarterDate: Date;
  daysUntil: number;
  currentAge: number;
  zodiacSign: string;
  seasonInfo: string;
};

const ThreeQuarterBirthdayCalculatorLogic = () => {
  const [birthDate, setBirthDate] = useState('');
  const [birthdayInfo, setBirthdayInfo] = useState<BirthdayInfo | null>(null);

  // Calculate zodiac sign based on birth date
  const getZodiacSign = (date: Date): string => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
    return "Pisces";
  };

  // Get season based on date
  const getSeason = (date: Date): string => {
    const month = date.getMonth() + 1;
    if (month >= 3 && month <= 5) return "Spring";
    if (month >= 6 && month <= 8) return "Summer";
    if (month >= 9 && month <= 11) return "Fall";
    return "Winter";
  };

  // Calculate days between two dates
  const daysBetween = (date1: Date, date2: Date): number => {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((date1.getTime() - date2.getTime()) / oneDay));
  };

  // Format date to local string
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateThreeQuarterBirthday = () => {
    const birth = new Date(birthDate);
    const today = new Date();
    
    // Calculate 3/4 birthday (274 days = 75% of 365.25 days)
    const threeQuarter = new Date(birth);
    threeQuarter.setDate(birth.getDate() + 274);
    
    // Calculate current age
    const age = today.getFullYear() - birth.getFullYear() -
      (today.getMonth() < birth.getMonth() || 
       (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate()) ? 1 : 0);

    // Calculate next 3/4 birthday
    const nextThreeQuarter = new Date(threeQuarter);
    while (nextThreeQuarter < today) {
      nextThreeQuarter.setFullYear(nextThreeQuarter.getFullYear() + 1);
    }

    setBirthdayInfo({
      birthDate: birth,
      threeQuarterDate: nextThreeQuarter,
      daysUntil: daysBetween(today, nextThreeQuarter),
      currentAge: age,
      zodiacSign: getZodiacSign(birth),
      seasonInfo: getSeason(nextThreeQuarter)
    });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg">
      <CardHeader className="space-y-1">
        <div className="flex items-center space-x-2">
          <Calendar className="w-6 h-6 text-purple-500" />
          <CardTitle className="text-2xl font-bold">¾ Birthday Calculator</CardTitle>
        </div>
        <CardDescription>
          Find out when your next three-quarter birthday falls and get interesting insights!
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex space-x-2">
          <Input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="flex-grow"
          />
          <Button 
            onClick={calculateThreeQuarterBirthday}
            className="bg-purple-500 hover:bg-purple-600 text-white"
          >
            Calculate
          </Button>
        </div>

        {birthdayInfo && (
          <div className="space-y-4 mt-6">
            <Alert className="bg-purple-50 dark:bg-purple-900/20 border-purple-200">
              <AlertTitle className="text-lg font-semibold text-purple-700 dark:text-purple-300">
                Your ¾ Birthday Details
              </AlertTitle>
              <AlertDescription className="mt-2 space-y-2">
                <p className="text-purple-600 dark:text-purple-200">
                  <strong>Birth Date:</strong> {formatDate(birthdayInfo.birthDate)}
                </p>
                <p className="text-purple-600 dark:text-purple-200">
                  <strong>Next ¾ Birthday:</strong> {formatDate(birthdayInfo.threeQuarterDate)}
                </p>
                <p className="text-purple-600 dark:text-purple-200">
                  <strong>Days Until ¾ Birthday:</strong> {birthdayInfo.daysUntil} days
                </p>
                <p className="text-purple-600 dark:text-purple-200">
                  <strong>Current Age:</strong> {birthdayInfo.currentAge} years
                </p>
                <p className="text-purple-600 dark:text-purple-200">
                  <strong>Zodiac Sign:</strong> {birthdayInfo.zodiacSign}
                </p>
                <p className="text-purple-600 dark:text-purple-200">
                  <strong>¾ Birthday Season:</strong> {birthdayInfo.seasonInfo}
                </p>
              </AlertDescription>
            </Alert>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ThreeQuarterBirthdayCalculatorLogic;