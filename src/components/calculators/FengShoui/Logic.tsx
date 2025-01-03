'use client'
import React, { useState } from 'react';
import { Calendar, Info, Calculator, Heart, ArrowRight, ArrowLeft, PartyPopper, LucideIcon } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Input } from "@/components/ui/input";

// Type definitions
type ZodiacAnimal = 'Rat' | 'Ox' | 'Tiger' | 'Rabbit' | 'Dragon' | 'Snake' | 'Horse' | 'Goat' | 'Monkey' | 'Rooster' | 'Dog' | 'Pig';

type Month = {
  value: string;
  label: string;
};

type FormData = {
  spouse1Name: string;
  spouse1Year: string;
  spouse2Name: string;
  spouse2Year: string;
  weddingYear: string;
  weddingMonth: string;
};

type Results = {
  spouse1Name: string;
  spouse2Name: string;
  sign1: ZodiacAnimal;
  sign2: ZodiacAnimal;
  isCompatible: boolean;
  luckyDates: string[];
} | null;

type LuckyMonths = {
  [key in '2024' | '2025' | '2026' | '2027' | '2028']: string[];
};

type CompatibilityMap = {
  [key in ZodiacAnimal]: ZodiacAnimal[];
};

// Constants
const MONTHS: Month[] = [
  { value: '1', label: 'January' },
  { value: '2', label: 'February' },
  { value: '3', label: 'March' },
  { value: '4', label: 'April' },
  { value: '5', label: 'May' },
  { value: '6', label: 'June' },
  { value: '7', label: 'July' },
  { value: '8', label: 'August' },
  { value: '9', label: 'September' },
  { value: '10', label: 'October' },
  { value: '11', label: 'November' },
  { value: '12', label: 'December' }
];

const ZODIAC_ANIMALS: ZodiacAnimal[] = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];

const LUCKY_MONTHS: LuckyMonths = {
  '2024': ['1', '2', '3', '6', '7', '8', '12'],
  '2025': ['1', '3', '5', '7', '8', '9', '12'],
  '2026': ['2', '4', '6', '8', '10', '12'],
  '2027': ['1', '3', '5', '7', '9', '11'],
  '2028': ['2', '4', '6', '8', '10', '12']
};

const COMPATIBILITY_MAP: CompatibilityMap = {
  'Rat': ['Dragon', 'Monkey'],
  'Ox': ['Snake', 'Rooster'],
  'Tiger': ['Horse', 'Dog'],
  'Rabbit': ['Goat', 'Pig'],
  'Dragon': ['Rat', 'Monkey'],
  'Snake': ['Ox', 'Rooster'],
  'Horse': ['Tiger', 'Dog'],
  'Goat': ['Rabbit', 'Pig'],
  'Monkey': ['Rat', 'Dragon'],
  'Rooster': ['Ox', 'Snake'],
  'Dog': ['Tiger', 'Horse'],
  'Pig': ['Rabbit', 'Goat']
};

const INITIAL_FORM_DATA: FormData = {
  spouse1Name: '',
  spouse1Year: '',
  spouse2Name: '',
  spouse2Year: '',
  weddingYear: '2024',
  weddingMonth: ''
};

const FengShuiLogic: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [results, setResults] = useState<Results>(null);

  const getZodiacSign = (year: number): ZodiacAnimal => {
    return ZODIAC_ANIMALS[(year - 4) % 12];
  };

  const checkCompatibility = (sign1: ZodiacAnimal, sign2: ZodiacAnimal): boolean => {
    return COMPATIBILITY_MAP[sign1]?.includes(sign2) ?? false;
  };

  const isWeekend = (date: string): boolean => {
    const day = new Date(date).getDay();
    return day === 5 || day === 6 || day === 0; // Friday, Saturday, Sunday
  };

  const calculateAuspiciousDates = (): void => {
    const sign1 = getZodiacSign(parseInt(formData.spouse1Year));
    const sign2 = getZodiacSign(parseInt(formData.spouse2Year));
    const isCompatible = checkCompatibility(sign1, sign2);

    const luckyDays = ['1', '2', '8', '9', '10', '11', '20', '21', '28', '29'];
    const selectedMonth = formData.weddingMonth.padStart(2, '0');
    const year = formData.weddingYear;
    
    const luckyDates: string[] = [];
    luckyDays.forEach(day => {
      const date = `${year}-${selectedMonth}-${day.padStart(2, '0')}`;
      if (parseInt(day) <= new Date(parseInt(year), parseInt(selectedMonth), 0).getDate() && isWeekend(date)) {
        luckyDates.push(date);
      }
    });

    setResults({
      spouse1Name: formData.spouse1Name,
      spouse2Name: formData.spouse2Name,
      sign1,
      sign2,
      isCompatible,
      luckyDates: luckyDates.slice(0, 5)
    });
  };

  const handleNext = (): void => {
    setStep(step === 3 ? 3 : (step + 1) as 1 | 2 | 3);
  };

  const handleBack = (): void => {
    setStep(step === 1 ? 1 : (step - 1) as 1 | 2 | 3);
  };

  const handleFormChange = (field: keyof FormData, value: string): void => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = (): void => {
    setResults(null);
    setStep(1);
    setFormData(INITIAL_FORM_DATA);
  };

  const renderInput = (
    label: string,
    field: keyof FormData,
    type: "text" | "number" = "text",
    placeholder: string
  ): React.ReactElement => (
    <div className="space-y-2">
      <label className="text-lg font-medium">{label}</label>
      <Input
        type={type}
        min={type === "number" ? "1900" : undefined}
        max={type === "number" ? "2024" : undefined}
        placeholder={placeholder}
        value={formData[field]}
        onChange={(e) => handleFormChange(field, e.target.value)}
        className="text-lg"
      />
    </div>
  );

  const renderStep = (): React.ReactElement => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-4">
            {renderInput("What's your name?", "spouse1Name", "text", "Enter your name")}
            {renderInput("What year were you born?", "spouse1Year", "number", "YYYY")}
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            {renderInput("What's your partner's name?", "spouse2Name", "text", "Enter your partner's name")}
            {renderInput("What year was your partner born?", "spouse2Year", "number", "YYYY")}
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-lg font-medium">When are you planning to get married?</label>
              <Select 
                value={formData.weddingYear}
                onValueChange={(value) => handleFormChange("weddingYear", value)}
              >
                <SelectTrigger className="text-lg">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(LUCKY_MONTHS).map((year) => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select 
                value={formData.weddingMonth}
                onValueChange={(value) => handleFormChange("weddingMonth", value)}
              >
                <SelectTrigger className="text-lg">
                  <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent>
                  {MONTHS.map((month) => (
                    <SelectItem key={month.value} value={month.value}>
                      {month.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white ">
      <div className="max-w-5xl mx-auto">
        {!results ? (
          <Card className="backdrop-blur-sm bg-white/90 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-rose-600">
                <Heart className="text-rose-500" />
                Feng Shui Wedding Date Calculator
              </CardTitle>
              <CardDescription className="text-lg">
                Find your perfect wedding date based on Chinese astrology
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex justify-between mb-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step === i ? 'bg-rose-600 text-white' : 'bg-gray-200'
                      }`}
                    >
                      {i}
                    </div>
                  ))}
                </div>
                {renderStep()}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              {step > 1 && (
                <Button variant="outline" onClick={handleBack}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
              )}
              {step < 3 ? (
                <Button 
                  className="ml-auto"
                  onClick={handleNext}
                  disabled={
                    (step === 1 && (!formData.spouse1Name || !formData.spouse1Year)) ||
                    (step === 2 && (!formData.spouse2Name || !formData.spouse2Year))
                  }
                >
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button 
                  className="ml-auto bg-rose-600 hover:bg-rose-700"
                  onClick={calculateAuspiciousDates}
                  disabled={!formData.weddingMonth}
                >
                  <Calculator className="mr-2 h-4 w-4" />
                  Find Lucky Dates
                </Button>
              )}
            </CardFooter>
          </Card>
        ) : (
          <div className="space-y-6">
            <Card className="backdrop-blur-sm bg-white/90 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <PartyPopper className="text-rose-500" />
                  Your Feng Shui Wedding Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert className={results.isCompatible ? "bg-green-50" : "bg-yellow-50"}>
                  <Info className="h-4 w-4" />
                  <AlertTitle className="text-xl">Zodiac Compatibility</AlertTitle>
                  <AlertDescription className="text-lg">
                    {results.spouse1Name}: {results.sign1} | {results.spouse2Name}: {results.sign2}
                    <br />
                    {results.isCompatible 
                      ? `Wonderful news! ${results.spouse1Name} and ${results.spouse2Name}'s zodiac signs are naturally compatible! This is very auspicious.`
                      : `${results.spouse1Name} and ${results.spouse2Name}'s zodiac signs have different energies. Consider incorporating balancing Feng Shui elements on your wedding day.`}
                  </AlertDescription>
                </Alert>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Calendar className="text-rose-500" />
                    Most Auspicious Wedding Dates
                  </h3>
                  <div className="space-y-3">
                    {results.luckyDates.map((date, index) => (
                      <div 
                        key={date}
                        className="p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
                      >
                        <span className="text-lg">{new Date(date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</span>
                        <span className="text-rose-600 font-medium">#{index + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  onClick={resetForm}
                  className="w-full"
                >
                  Start Over
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default FengShuiLogic