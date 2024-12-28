'use client'
import  { useState } from 'react';
import { Calendar, Info, Calculator, Heart, ArrowRight, ArrowLeft, PartyPopper } from 'lucide-react';
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

const FengShuiLogic = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    spouse1Name: '',
    spouse1Year: '',
    spouse2Name: '',
    spouse2Year: '',
    weddingYear: '2024',
    weddingMonth: ''
  });
  const [results, setResults] = useState(null);

  const months = [
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

  const zodiacAnimals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];

  const luckyMonths = {
    '2024': ['1', '2', '3', '6', '7', '8', '12'],
    '2025': ['1', '3', '5', '7', '8', '9', '12'],
    '2026': ['2', '4', '6', '8', '10', '12'],
    '2027': ['1', '3', '5', '7', '9', '11'],
    '2028': ['2', '4', '6', '8', '10', '12']
  };

  const getZodiacSign = (year) => {
    return zodiacAnimals[(year - 4) % 12];
  };

  const checkCompatibility = (sign1, sign2) => {
    const compatibilityMap = {
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
    return compatibilityMap[sign1]?.includes(sign2);
  };

  const isWeekend = (date) => {
    const day = new Date(date).getDay();
    return day === 5 || day === 6 || day === 0; // Friday, Saturday, Sunday
  };

  const calculateAuspiciousDates = () => {
    const sign1 = getZodiacSign(parseInt(formData.spouse1Year));
    const sign2 = getZodiacSign(parseInt(formData.spouse2Year));
    const isCompatible = checkCompatibility(sign1, sign2);

    const luckyDays = ['1', '2', '8', '9', '10', '11', '20', '21', '28', '29'];
    
    // Filter for selected month only
    const selectedMonth = formData.weddingMonth.padStart(2, '0');
    const year = formData.weddingYear;
    
    // Calculate all dates in the selected month
    const luckyDates = [];
    luckyDays.forEach(day => {
      const date = `${year}-${selectedMonth}-${day.padStart(2, '0')}`;
      if (day <= new Date(year, selectedMonth, 0).getDate() && isWeekend(date)) {
        luckyDates.push(date);
      }
    });

    setResults({
      spouse1Name: formData.spouse1Name,
      spouse2Name: formData.spouse2Name,
      sign1,
      sign2,
      isCompatible,
      luckyDates: luckyDates.slice(0, 5) // Show top 5 weekend dates
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-lg font-medium">What's your name?</label>
              <Input
                placeholder="Enter your name"
                value={formData.spouse1Name}
                onChange={(e) => setFormData({...formData, spouse1Name: e.target.value})}
                className="text-lg"
              />
            </div>
            <div className="space-y-2">
              <label className="text-lg font-medium">What year were you born?</label>
              <Input
                type="number"
                min="1900"
                max="2024"
                placeholder="YYYY"
                value={formData.spouse1Year}
                onChange={(e) => setFormData({...formData, spouse1Year: e.target.value})}
                className="text-lg"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-lg font-medium">What's your partner's name?</label>
              <Input
                placeholder="Enter your partner's name"
                value={formData.spouse2Name}
                onChange={(e) => setFormData({...formData, spouse2Name: e.target.value})}
                className="text-lg"
              />
            </div>
            <div className="space-y-2">
              <label className="text-lg font-medium">What year was your partner born?</label>
              <Input
                type="number"
                min="1900"
                max="2024"
                placeholder="YYYY"
                value={formData.spouse2Year}
                onChange={(e) => setFormData({...formData, spouse2Year: e.target.value})}
                className="text-lg"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-lg font-medium">When are you planning to get married?</label>
              <Select 
                value={formData.weddingYear}
                onValueChange={(value) => setFormData({...formData, weddingYear: value})}
              >
                <SelectTrigger className="text-lg">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2026">2026</SelectItem>
                  <SelectItem value="2027">2027</SelectItem>
                  <SelectItem value="2028">2028</SelectItem>
                </SelectContent>
              </Select>
              
              <Select 
                value={formData.weddingMonth}
                onValueChange={(value) => setFormData({...formData, weddingMonth: value})}
              >
                <SelectTrigger className="text-lg">
                  <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month) => (
                    <SelectItem key={month.value} value={month.value}>
                      {month.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white p-6">
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
                  onClick={() => {
                    setResults(null);
                    setStep(1);
                    setFormData({
                      spouse1Name: '',
                      spouse1Year: '',
                      spouse2Name: '',
                      spouse2Year: '',
                      weddingYear: '2024',
                      weddingMonth: ''
                    });
                  }}
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

export default FengShuiLogic;