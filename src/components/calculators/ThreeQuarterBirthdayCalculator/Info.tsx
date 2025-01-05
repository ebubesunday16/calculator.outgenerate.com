import React from 'react';
import { Info, Calendar, Calculator, Clock, Star, Heart, Gift } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const ThreeQuarterBirthdayCalculatorInfo = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* How It Works Section */}
      <Card className="bg-white dark:bg-gray-800 shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex items-center space-x-2">
            <Calculator className="w-6 h-6 text-blue-500" />
            <CardTitle className="text-2xl font-bold">How It Works</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            A three-quarter birthday marks the point that is 75% through your birth year. Here's the mathematical breakdown:
          </p>
          <div className="pl-4 space-y-2">
            <p className="text-gray-700 dark:text-gray-300">• One year = 365.25 days (accounting for leap years)</p>
            <p className="text-gray-700 dark:text-gray-300">• Three-quarters of a year = 365.25 × 0.75 = 274 days</p>
            <p className="text-gray-700 dark:text-gray-300">• Your ¾ birthday occurs exactly 274 days after your birthday</p>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            The calculator uses this precise calculation to determine the exact date of your three-quarter birthday, taking into account leap years and calendar variations.
          </p>
        </CardContent>
      </Card>

      {/* Cultural Significance */}
      <Card className="bg-white dark:bg-gray-800 shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex items-center space-x-2">
            <Heart className="w-6 h-6 text-red-500" />
            <CardTitle className="text-2xl font-bold">Cultural Significance</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            While half-birthdays are more commonly celebrated, three-quarter birthdays have gained popularity for several reasons:
          </p>
          <div className="pl-4 space-y-2">
            <p className="text-gray-700 dark:text-gray-300">• For children born late in the school year, it can mark a significant developmental milestone</p>
            <p className="text-gray-700 dark:text-gray-300">• Some cultures use quarter-birthdays as additional occasions for family gatherings</p>
            <p className="text-gray-700 dark:text-gray-300">• In modern social media culture, it's become a trendy way to celebrate "unofficial" birthdays</p>
          </div>
        </CardContent>
      </Card>

      {/* Astronomical Perspective */}
      <Card className="bg-white dark:bg-gray-800 shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex items-center space-x-2">
            <Star className="w-6 h-6 text-yellow-500" />
            <CardTitle className="text-2xl font-bold">Astronomical Perspective</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Your three-quarter birthday has interesting astronomical significance:
          </p>
          <div className="pl-4 space-y-2">
            <p className="text-gray-700 dark:text-gray-300">• It marks the point where Earth has completed 75% of its orbit since your birthday</p>
            <p className="text-gray-700 dark:text-gray-300">• The season of your ¾ birthday is typically opposite to your half-birthday</p>
            <p className="text-gray-700 dark:text-gray-300">• Your ¾ birthday often falls under a zodiac sign that forms a significant astrological aspect with your birth sign</p>
          </div>
        </CardContent>
      </Card>

      {/* Practical Uses */}
      <Card className="bg-white dark:bg-gray-800 shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex items-center space-x-2">
            <Clock className="w-6 h-6 text-green-500" />
            <CardTitle className="text-2xl font-bold">Practical Uses</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Three-quarter birthdays serve several practical purposes:
          </p>
          <div className="pl-4 space-y-2">
            <p className="text-gray-700 dark:text-gray-300">• Age calculation for school enrollment in some districts</p>
            <p className="text-gray-700 dark:text-gray-300">• Medical and developmental milestone tracking for infants and young children</p>
            <p className="text-gray-700 dark:text-gray-300">• Planning celebrations or events that are offset from traditional birthday dates</p>
            <p className="text-gray-700 dark:text-gray-300">• Insurance and legal age calculations in specific circumstances</p>
          </div>
        </CardContent>
      </Card>

      {/* Fun Facts */}
      <Card className="bg-white dark:bg-gray-800 shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex items-center space-x-2">
            <Gift className="w-6 h-6 text-purple-500" />
            <CardTitle className="text-2xl font-bold">Fun Facts</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="pl-4 space-y-2">
            <p className="text-gray-700 dark:text-gray-300">• If your birthday is on January 1st, your ¾ birthday falls on October 2nd</p>
            <p className="text-gray-700 dark:text-gray-300">• You've experienced approximately 9,125 days when you reach your 25th ¾ birthday</p>
            <p className="text-gray-700 dark:text-gray-300">• The season of your ¾ birthday changes slightly over the years due to leap years</p>
            <p className="text-gray-700 dark:text-gray-300">• Celebrities often use quarter-birthdays as unique promotional event dates</p>
            <p className="text-gray-700 dark:text-gray-300">• Some cultures believe that quarter-birthdays have special significance for personal growth and reflection</p>
          </div>
        </CardContent>
      </Card>

      {/* Tips for Celebration */}
      <Card className="bg-white dark:bg-gray-800 shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex items-center space-x-2">
            <Calendar className="w-6 h-6 text-indigo-500" />
            <CardTitle className="text-2xl font-bold">Tips for Celebration</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Make your three-quarter birthday special with these ideas:
          </p>
          <div className="pl-4 space-y-2">
            <p className="text-gray-700 dark:text-gray-300">• Create a "¾ bucket list" of things to accomplish before your next birthday</p>
            <p className="text-gray-700 dark:text-gray-300">• Take a quarterly progress photo to track your growth or changes</p>
            <p className="text-gray-700 dark:text-gray-300">• Write a reflection letter about the past 9 months</p>
            <p className="text-gray-700 dark:text-gray-300">• Host a themed party based on the number ¾ or your current season</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThreeQuarterBirthdayCalculatorInfo;