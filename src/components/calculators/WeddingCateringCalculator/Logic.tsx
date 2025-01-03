'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  ArrowRight, 
  ArrowLeft, 
  Calculator, 
  DollarSign, 
  Users, 
  MapPin, 
  Cake, 
  Coffee, 
  Wine,
  HeartHandshake,
  Info
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";



const WeddingCateringLogic = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    guestCount: '',
    locationType: 'hometown', // hometown or destination
    mealStyle: 'plated', // plated, buffet, stations, familyStyle
    barType: 'full', // full, beer-wine, non-alcoholic
    appetizers: false,
    dessertTable: false,
    lateNightSnacks: false,
    culturalDishes: false,
    dietaryRestrictions: false,
    rentals: false,
  });

  const [result, setResult] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateTotal = () => {
    // Base cost per person from The Knot's data
    let basePerPerson = formData.locationType === 'destination' ? 102 : 81;

    // Adjust based on meal style
    const mealStyleMultipliers = {
      plated: 1,
      buffet: 0.85,
      stations: 1.1,
      familyStyle: 0.95
    };
    basePerPerson *= mealStyleMultipliers[formData.mealStyle];

    // Bar service adjustments
    const barMultipliers = {
      full: 1.3,
      'beer-wine': 1.15,
      'non-alcoholic': 1
    };
    basePerPerson *= barMultipliers[formData.barType];

    // Additional services
    if (formData.appetizers) basePerPerson += 12;
    if (formData.dessertTable) basePerPerson += 8;
    if (formData.lateNightSnacks) basePerPerson += 10;
    if (formData.culturalDishes) basePerPerson += 15;
    if (formData.dietaryRestrictions) basePerPerson += 5;
    if (formData.rentals) basePerPerson += 20;

    const totalCost = basePerPerson * parseInt(formData.guestCount);
    
    setResult({
      perPerson: Math.round(basePerPerson),
      total: Math.round(totalCost)
    });
  };

  const tooltips = {
    guestCount: "The number of guests impacts your per-person cost. Larger weddings (100+ guests) average $86 per person, while smaller weddings average $85 per person.",
    locationType: "Destination weddings typically cost more ($102/person) compared to hometown weddings ($81/person) due to travel and logistics.",
    mealStyle: "Different service styles affect both cost and guest experience. Plated service is most formal, buffet most economical, stations most interactive, and family-style most intimate.",
    barType: "Bar service significantly impacts overall cost. Full bar is most expensive but offers most options, beer & wine is moderate, non-alcoholic is most economical.",
    additionalServices: {
      appetizers: "Passed appetizers during cocktail hour can range from simple to elaborate, typically adding $12/person",
      dessertTable: "A dessert table beyond the wedding cake adds variety and entertainment value, typically $8/person",
      lateNightSnacks: "Late night snacks keep the party going and are a trending option, adding about $10/person",
      culturalDishes: "Special cultural dishes may require specific ingredients and preparation, adding approximately $15/person",
      dietaryRestrictions: "Accommodating dietary restrictions ensures all guests can enjoy the meal, adding about $5/person",
      rentals: "Including rentals (tables, chairs, linens, etc.) in your catering package can simplify planning, adding roughly $20/person"
    }
  };

  const renderStep = () => {
    const renderTooltip = (content) => (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Info className="w-4 h-4 ml-2 text-gray-400 hover:text-gray-600 cursor-help" />
          </TooltipTrigger>
          <TooltipContent className="max-w-xs">
            <p>{content}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    switch(step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-rose-400" />
                <Label>Number of Guests</Label>
              </div>
              {renderTooltip(tooltips.guestCount)}
            </div>
            <Input
              type="number"
              value={formData.guestCount}
              onChange={(e) => handleInputChange('guestCount', e.target.value)}
              placeholder="Enter number of guests"
              min="1"
              className="border-rose-200 focus:border-rose-400"
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-rose-400" />
                <Label>Event Location Type</Label>
              </div>
              {renderTooltip(tooltips.locationType)}
            </div>
            <RadioGroup
              value={formData.locationType}
              onValueChange={(value) => handleInputChange('locationType', value)}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2 p-3 rounded-lg border border-rose-200 hover:border-rose-400 transition-colors">
                <RadioGroupItem value="hometown" id="hometown" />
                <Label htmlFor="hometown" className="flex-1 cursor-pointer">Hometown</Label>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg border border-rose-200 hover:border-rose-400 transition-colors">
                <RadioGroupItem value="destination" id="destination" />
                <Label htmlFor="destination" className="flex-1 cursor-pointer">Destination</Label>
              </div>
            </RadioGroup>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <Coffee className="w-5 h-5 text-rose-400" />
                <Label>Meal Service Style</Label>
              </div>
              {renderTooltip(tooltips.mealStyle)}
            </div>
            <Select
              value={formData.mealStyle}
              onValueChange={(value) => handleInputChange('mealStyle', value)}
            >
              <SelectTrigger className="border-rose-200 focus:border-rose-400">
                <SelectValue placeholder="Select meal style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="plated">Plated Service</SelectItem>
                <SelectItem value="buffet">Buffet Style</SelectItem>
                <SelectItem value="stations">Food Stations</SelectItem>
                <SelectItem value="familyStyle">Family Style</SelectItem>
              </SelectContent>
            </Select>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <Wine className="w-5 h-5 text-rose-400" />
                <Label>Bar Service</Label>
              </div>
              {renderTooltip(tooltips.barType)}
            </div>
            <Select
              value={formData.barType}
              onValueChange={(value) => handleInputChange('barType', value)}
            >
              <SelectTrigger className="border-rose-200 focus:border-rose-400">
                <SelectValue placeholder="Select bar service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full">Full Bar</SelectItem>
                <SelectItem value="beer-wine">Beer & Wine Only</SelectItem>
                <SelectItem value="non-alcoholic">Non-Alcoholic</SelectItem>
              </SelectContent>
            </Select>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <Cake className="w-5 h-5 text-rose-400" />
                <Label>Additional Services</Label>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { id: 'appetizers', label: 'Passed Appetizers', tooltip: tooltips.additionalServices.appetizers },
                { id: 'dessertTable', label: 'Dessert Table', tooltip: tooltips.additionalServices.dessertTable },
                { id: 'lateNightSnacks', label: 'Late Night Snacks', tooltip: tooltips.additionalServices.lateNightSnacks },
                { id: 'culturalDishes', label: 'Cultural Dishes', tooltip: tooltips.additionalServices.culturalDishes },
                { id: 'dietaryRestrictions', label: 'Dietary Restrictions', tooltip: tooltips.additionalServices.dietaryRestrictions },
                { id: 'rentals', label: 'Include Rentals', tooltip: tooltips.additionalServices.rentals },
              ].map(({ id, label, tooltip }) => (
                <div key={id} className="flex items-center p-3 rounded-lg border border-rose-200 hover:border-rose-400 transition-colors">
                  <input
                    type="checkbox"
                    id={id}
                    checked={formData[id]}
                    onChange={(e) => handleInputChange(id, e.target.checked)}
                    className="h-4 w-4 rounded border-rose-300 text-rose-400 focus:ring-rose-400"
                  />
                  <Label htmlFor={id} className="flex-1 ml-2 cursor-pointer">{label}</Label>
                  {renderTooltip(tooltip)}
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      calculateTotal();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className=" ">
      <Card className="w-full  mx-auto border-rose-200 shadow-lg">
        <CardHeader className="border-b border-rose-100 bg-white/50 backdrop-blur-sm">
          <CardTitle className="flex items-center gap-2 text-rose-700">
            <HeartHandshake className="w-6 h-6" />
            Wedding Catering Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            {!result ? (
              <>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm text-gray-500">Step {step} of 5</div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={`h-1 w-6 rounded-full ${
                          i <= step ? 'bg-rose-400' : 'bg-rose-100'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                {renderStep()}
                <div className="flex justify-between mt-6 pt-6 border-t border-rose-100">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    disabled={step === 1}
                    className="border-rose-200 hover:bg-rose-50"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <Button 
                    onClick={handleNext}
                    className="bg-rose-500 hover:bg-rose-600"
                  >
                    {step === 5 ? (
                      <>
                        Calculate
                        <Calculator className="w-4 h-4 ml-2" />
                      </>
                    ) : (
                      <>
                        Next
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </>
            ) : (
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-2 text-rose-700">
                    <DollarSign className="w-6 h-6" />
                    <h3 className="text-2xl font-semibold">Estimated Costs</h3>
                  </div>
                  <div className="p-6 rounded-lg bg-rose-50">
                    <p className="text-lg text-gray-600 mb-2">
                      Per Person: <span className="font-semibold">${result.perPerson}</span>
                    </p>
                    <p className="text-3xl font-bold text-rose-700">
                      Total: ${result.total.toLocaleString()}
                    </p>
                  </div>
                </div>
                <Button
                  onClick={() => {
                    setResult(null);
                    setStep(1);
                  }}
                  className="w-full bg-rose-500 hover:bg-rose-600"
                >
                  Calculate Again
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeddingCateringLogic;