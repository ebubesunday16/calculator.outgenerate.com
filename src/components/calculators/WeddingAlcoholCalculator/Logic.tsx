'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { 
  Wine, 
  Beer, 
  Coffee, 
  Martini, 
  GlassWater, 
  Calculator,
  Info,
  HelpCircle 
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type DrinkingStyle = 'light' | 'average' | 'heavy';
type TimeOfDay = 'morning' | 'afternoon' | 'evening';
type Season = 'spring' | 'summer' | 'fall' | 'winter';

interface CalculatorInputs {
  guestCount: number;
  duration: number;
  drinkingStyle: DrinkingStyle;
  hasChampagneToast: boolean;
  signatureCocktails: number;
  timeOfDay: TimeOfDay;
  season: Season;
  beerPreference: number;
  winePreference: number;
  cocktailPreference: number;
  spiritsRatio: {
    vodka: number;
    gin: number;
    rum: number;
    whiskey: number;
    tequila: number;
  };
}

interface AlcoholResults {
  champagne: number;
  redWine: number;
  whiteWine: number;
  spirits: {
    vodka: number;
    gin: number;
    rum: number;
    whiskey: number;
    tequila: number;
  };
  beer: {
    domestic: number;
    craft: number;
  };
  mixers: number;
  ice: number;
  garnishes: number;
}

const WeddingAlcoholLogic = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    guestCount: 100,
    duration: 5,
    drinkingStyle: 'average',
    hasChampagneToast: true,
    signatureCocktails: 2,
    timeOfDay: 'evening',
    season: 'summer',
    beerPreference: 25,
    winePreference: 35,
    cocktailPreference: 40,
    spiritsRatio: {
      vodka: 30,
      gin: 15,
      rum: 15,
      whiskey: 20,
      tequila: 20,
    }
  });

  const InfoTooltip = ({ content }: { content: string }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <HelpCircle className="h-4 w-4 ml-2 inline-block text-gray-400" />
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  const calculateAlcohol = (inputs: CalculatorInputs): AlcoholResults => {
    // Base calculations
    const drinksPerHour = {
      light: 0.8,
      average: 1,
      heavy: 1.2
    };

    const timeAdjustment = {
      morning: 0.7,
      afternoon: 0.85,
      evening: 1
    };

    const seasonAdjustment = {
      winter: { beer: 0.8, wine: 1.2 },
      spring: { beer: 1, wine: 1 },
      summer: { beer: 1.2, wine: 0.8 },
      fall: { beer: 1, wine: 1.1 }
    };

    const totalDrinksPerPerson = inputs.duration * drinksPerHour[inputs.drinkingStyle] * 
      timeAdjustment[inputs.timeOfDay];

    const totalDrinks = inputs.guestCount * totalDrinksPerPerson;

    // Adjust for guest preferences
    const beerDrinks = totalDrinks * (inputs.beerPreference / 100);
    const wineDrinks = totalDrinks * (inputs.winePreference / 100);
    const cocktailDrinks = totalDrinks * (inputs.cocktailPreference / 100);

    // Calculate spirits based on ratio
    const spiritsCalculation = {
      vodka: Math.ceil((cocktailDrinks * inputs.spiritsRatio.vodka / 100) / 19),
      gin: Math.ceil((cocktailDrinks * inputs.spiritsRatio.gin / 100) / 19),
      rum: Math.ceil((cocktailDrinks * inputs.spiritsRatio.rum / 100) / 19),
      whiskey: Math.ceil((cocktailDrinks * inputs.spiritsRatio.whiskey / 100) / 19),
      tequila: Math.ceil((cocktailDrinks * inputs.spiritsRatio.tequila / 100) / 19),
    };

    return {
      champagne: inputs.hasChampagneToast ? Math.ceil(inputs.guestCount / 6) : 0,
      redWine: Math.ceil(wineDrinks * 0.5 / 5),
      whiteWine: Math.ceil(wineDrinks * 0.5 / 5),
      spirits: spiritsCalculation,
      beer: {
        domestic: Math.ceil(beerDrinks * 0.6),
        craft: Math.ceil(beerDrinks * 0.4)
      },
      mixers: Math.ceil(cocktailDrinks * 1.5),
      ice: Math.ceil(inputs.guestCount * inputs.duration * 0.5 * 2),
      garnishes: Math.ceil(cocktailDrinks * 0.8)
    };
  };

  const results = calculateAlcohol(inputs);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-6 h-6" />
            Wedding Alcohol Calculator
          </CardTitle>
          <CardDescription>
            Plan your wedding bar with precision using our comprehensive calculator
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label className="flex items-center">
                  Number of Guests
                  <InfoTooltip content="Total number of adult guests expected to attend your wedding" />
                </Label>
                <Input 
                  type="number" 
                  value={inputs.guestCount}
                  onChange={(e) => setInputs({...inputs, guestCount: parseInt(e.target.value) || 0})}
                  min="1"
                />
              </div>

              <div>
                <Label className="flex items-center">
                  Event Duration (hours)
                  <InfoTooltip content="Total length of time alcohol will be served, including cocktail hour" />
                </Label>
                <Input 
                  type="number" 
                  value={inputs.duration}
                  onChange={(e) => setInputs({...inputs, duration: parseInt(e.target.value) || 0})}
                  min="1"
                />
              </div>

              <div>
                <Label className="flex items-center">
                  Drinking Style
                  <InfoTooltip content="Light: 0.8 drinks/hour, Average: 1 drink/hour, Heavy: 1.2 drinks/hour" />
                </Label>
                <Select 
                  value={inputs.drinkingStyle}
                  onValueChange={(value: DrinkingStyle) => setInputs({...inputs, drinkingStyle: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select drinking style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="average">Average</SelectItem>
                    <SelectItem value="heavy">Heavy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label className="flex items-center">
                  Champagne Toast
                  <InfoTooltip content="Include champagne service for wedding toasts" />
                </Label>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={inputs.hasChampagneToast}
                    onCheckedChange={(checked) => setInputs({...inputs, hasChampagneToast: checked})}
                  />
                  <span>{inputs.hasChampagneToast ? 'Yes' : 'No'}</span>
                </div>
              </div>

              <div>
                <Label className="flex items-center">
                  Guest Preferences
                  <InfoTooltip content="Adjust the percentage of guests who prefer each type of drink" />
                </Label>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between">
                      <span>Beer ({inputs.beerPreference}%)</span>
                    </div>
                    <Slider
                      value={[inputs.beerPreference]}
                      onValueChange={(value) => {
                        const newBeerPref = value[0];
                        const remaining = 100 - newBeerPref;
                        setInputs({
                          ...inputs,
                          beerPreference: newBeerPref,
                          winePreference: Math.round(remaining * 0.5),
                          cocktailPreference: Math.round(remaining * 0.5)
                        });
                      }}
                      max={100}
                      step={1}
                    />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span>Wine ({inputs.winePreference}%)</span>
                    </div>
                    <Slider
                      value={[inputs.winePreference]}
                      onValueChange={(value) => {
                        const newWinePref = value[0];
                        const remaining = 100 - newWinePref;
                        setInputs({
                          ...inputs,
                          winePreference: newWinePref,
                          beerPreference: Math.round(remaining * 0.5),
                          cocktailPreference: Math.round(remaining * 0.5)
                        });
                      }}
                      max={100}
                      step={1}
                    />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span>Cocktails ({inputs.cocktailPreference}%)</span>
                    </div>
                    <Slider
                      value={[inputs.cocktailPreference]}
                      onValueChange={(value) => {
                        const newCocktailPref = value[0];
                        const remaining = 100 - newCocktailPref;
                        setInputs({
                          ...inputs,
                          cocktailPreference: newCocktailPref,
                          beerPreference: Math.round(remaining * 0.5),
                          winePreference: Math.round(remaining * 0.5)
                        });
                      }}
                      max={100}
                      step={1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spirits Ratio */}
          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="text-lg">Spirits Ratio</CardTitle>
              <CardDescription>Adjust the proportion of different spirits</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(inputs.spiritsRatio).map(([spirit, value]) => (
                <div key={spirit}>
                  <div className="flex justify-between">
                    <span className="capitalize">{spirit} ({value}%)</span>
                  </div>
                  <Slider
                    value={[value]}
                    onValueChange={(newValue) => {
                      const total = Object.entries(inputs.spiritsRatio)
                        .reduce((acc, [key, val]) => key === spirit ? acc : acc + val, 0);
                      if (total + newValue[0] <= 100) {
                        setInputs({
                          ...inputs,
                          spiritsRatio: {
                            ...inputs.spiritsRatio,
                            [spirit]: newValue[0]
                          }
                        });
                      }
                    }}
                    max={100}
                    step={1}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Recommended Quantities</CardTitle>
              <CardDescription>Based on your selections and guest preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Wine className="w-5 h-5" />
                    <span>Champagne: {results.champagne} bottles (750ml)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wine className="w-5 h-5 text-red-500" />
                    <span>Red Wine: {results.redWine} bottles (750ml)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wine className="w-5 h-5 text-yellow-500" />
                    <span>White Wine: {results.whiteWine} bottles (750ml)</span>
                  </div>
                  <div className="space-y-2">
                    <span className="font-medium">Spirits (1L bottles):</span>
                    {Object.entries(results.spirits).map(([spirit, amount]) => (
                      <div key={spirit} className="flex items-center gap-2 pl-4">
                        <Martini className="w-4 h-4" />
                        <span className="capitalize">{spirit}: {amount} bottles</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="font-medium">Beer:</span>
                    <div className="flex items-center gap-2 pl-4">
                      <Beer className="w-4 h-4" />
                      <span>Domestic: {results.beer.domestic} bottles/cans</span>
                      </div>
                    <div className="flex items-center gap-2 pl-4">
                      <Beer className="w-4 h-4" />
                      <span>Craft: {results.beer.craft} bottles/cans</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <GlassWater className="w-5 h-5" />
                    <span>Mixers: {results.mixers} bottles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coffee className="w-5 h-5" />
                    <span>Ice: {results.ice} pounds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Martini className="w-5 h-5" />
                    <span>Garnishes: {results.garnishes} pieces</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Alert>
            <AlertTitle className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              Important Notes
            </AlertTitle>
            <AlertDescription>
              <div className="space-y-2 mt-2">
                <p className="text-sm">Calculations based on:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Standard drink sizes: 5oz wine, 12oz beer, 1.5oz spirits</li>
                  <li>One bottle of wine = 5 glasses</li>
                  <li>One bottle of champagne = 6 glasses</li>
                  <li>One liter of spirits = 19 drinks (1.75oz pour)</li>
                  <li>Additional 10% buffer included for spillage</li>
                </ul>
                <p className="text-sm mt-4">Recommendations:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Consider adding non-alcoholic options (sodas, juices, water)</li>
                  <li>Plan for 1-2 bartenders per 100 guests</li>
                  <li>Include backup stock for popular items</li>
                  <li>Check venue policies regarding alcohol service</li>
                </ul>
              </div>
            </AlertDescription>
          </Alert>

          {/* Additional Costs Estimate */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Additional Items to Consider</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span>🍸 Glassware (if not provided by venue)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>🧊 Ice bins and scoops</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>🍋 Fresh fruit for garnishes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📏 Jiggers and pourers</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>🧃 Mixers and juices</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeddingAlcoholLogic;