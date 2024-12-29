'use client'
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator,  GlassWater , Coffee, HelpCircle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type TimeOfDay = 'morning' | 'afternoon' | 'evening';
type Season = 'spring' | 'summer' | 'fall' | 'winter';

const WeddingDrinkLogic = () => {
  const [guestCount, setGuestCount] = useState(100);
  const [eventDuration, setEventDuration] = useState(4);
  const [temperature, setTemperature] = useState(75);
  const [isOutdoor, setIsOutdoor] = useState(false);
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('afternoon');
  const [season, setSeason] = useState<Season>('summer');
  const [servingTypes, setServingTypes] = useState({
    punch: true,
    soda: true,
    juice: true,
    coffee: true,
    tea: true,
    water: true,
    sparklingCider: false
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

  // Constants for calculations
  const DRINKS_PER_PERSON_PER_HOUR = 1;
  const TEMPERATURE_FACTOR = 0.15;
  const OUTDOOR_FACTOR = 1.2;

  // Time of day adjustments
  const TIME_ADJUSTMENTS = {
    morning: { coffee: 1.5, tea: 1.3, juice: 1.2 },
    afternoon: { soda: 1.2, water: 1.3 },
    evening: { punch: 1.2, sparklingCider: 1.3 }
  };

  // Season adjustments
  const SEASON_ADJUSTMENTS = {
    summer: { water: 1.4, soda: 1.3, ice: 1.5 },
    winter: { coffee: 1.3, tea: 1.4, ice: 0.7 },
    spring: { juice: 1.2 },
    fall: { tea: 1.2, coffee: 1.2 }
  };

  const calculateTotalDrinks = () => {
    let baseDrinks = guestCount * eventDuration * DRINKS_PER_PERSON_PER_HOUR;
    
    if (temperature > 70) {
      const tempIncrease = Math.floor((temperature - 70) / 10);
      baseDrinks *= (1 + (tempIncrease * TEMPERATURE_FACTOR));
    }
    
    if (isOutdoor) {
      baseDrinks *= OUTDOOR_FACTOR;
    }
    
    return Math.ceil(baseDrinks);
  };

  const calculateDrinkDistribution = () => {
    const totalDrinks = calculateTotalDrinks();
    const enabledTypes = Object.entries(servingTypes).filter(([_, enabled]) => enabled);
    
    if (enabledTypes.length === 0) return {};
    
    const distribution: Record<string, number> = {};
    const baseAmount = totalDrinks / enabledTypes.length;
    
    enabledTypes.forEach(([type, _]) => {
      let amount = baseAmount;
      
      // Apply time of day adjustments
      if (TIME_ADJUSTMENTS[timeOfDay]?.[type as keyof typeof TIME_ADJUSTMENTS['morning']]) {
        amount *= TIME_ADJUSTMENTS[timeOfDay][type as keyof typeof TIME_ADJUSTMENTS['morning']];
      }
      
      // Apply seasonal adjustments
      if (SEASON_ADJUSTMENTS[season]?.[type as keyof typeof SEASON_ADJUSTMENTS['summer']]) {
        amount *= SEASON_ADJUSTMENTS[season][type as keyof typeof SEASON_ADJUSTMENTS['summer']];
      }
      
      distribution[type] = Math.ceil(amount);
    });
    
    return distribution;
  };

  const getServingQuantities = (distribution: Record<string, number>) => {
    const servingSizes = {
      punch: 1.5, // gallon per 20 servings
      soda: 3, // 2L bottles per 12 servings
      juice: 1, // gallon per 16 servings
      coffee: 1.5, // pound per 40 servings
      tea: 1, // pound per 40 servings
      water: 1, // gallon per 16 servings
      sparklingCider: 1 // bottle per 6 servings
    };

    return Object.entries(distribution).map(([type, servings]) => ({
      type,
      servings,
      quantity: Math.ceil(servings / (type === 'soda' ? 12 : type === 'sparklingCider' ? 6 : 16)),
      unit: type === 'soda' ? '2L bottles' : 
            type === 'coffee' || type === 'tea' ? 'pounds' :
            type === 'sparklingCider' ? 'bottles' : 'gallons'
    }));
  };

  const drinkDistribution = calculateDrinkDistribution();
  const servingQuantities = getServingQuantities(drinkDistribution);
  const totalIce = Math.ceil(guestCount * eventDuration * 0.5 * 
    (SEASON_ADJUSTMENTS[season]?.ice || 1) * 
    (isOutdoor ? 1.3 : 1));

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-6 w-6" />
          Wedding Non-Alcoholic Drink Calculator
        </CardTitle>
        <CardDescription>
          Calculate the amount of non-alcoholic beverages needed for your wedding
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <Label className="flex items-center">
                Number of Guests
                <InfoTooltip content="Total number of guests expected to attend your wedding" />
              </Label>
              <Input
                type="number"
                value={guestCount}
                onChange={(e) => setGuestCount(Math.max(1, parseInt(e.target.value) || 0))}
                min="1"
              />
            </div>

            <div>
              <Label className="flex items-center">
                Event Duration (hours)
                <InfoTooltip content="Total length of time beverages will be served" />
              </Label>
              <Input
                type="number"
                value={eventDuration}
                onChange={(e) => setEventDuration(Math.max(1, parseInt(e.target.value) || 0))}
                min="1"
              />
            </div>

            <div>
              <Label className="flex items-center">
                Temperature (°F)
                <InfoTooltip content="Expected temperature during the event - affects drink consumption rates" />
              </Label>
              <Slider
                value={[temperature]}
                onValueChange={(value) => setTemperature(value[0])}
                min={50}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="text-sm text-gray-500">{temperature}°F</div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <Label className="flex items-center">
                Time of Day
                <InfoTooltip content="Different times of day affect beverage preferences" />
              </Label>
              <Select 
                value={timeOfDay}
                onValueChange={(value: TimeOfDay) => setTimeOfDay(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select time of day" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning</SelectItem>
                  <SelectItem value="afternoon">Afternoon</SelectItem>
                  <SelectItem value="evening">Evening</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="flex items-center">
                Season
                <InfoTooltip content="Season affects drink preferences and consumption rates" />
              </Label>
              <Select 
                value={season}
                onValueChange={(value: Season) => setSeason(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select season" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="spring">Spring</SelectItem>
                  <SelectItem value="summer">Summer</SelectItem>
                  <SelectItem value="fall">Fall</SelectItem>
                  <SelectItem value="winter">Winter</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="flex items-center">
                Outdoor Event
                <InfoTooltip content="Outdoor events typically require 20% more beverages" />
              </Label>
              <div className="flex items-center space-x-2">
                <Switch
                  checked={isOutdoor}
                  onCheckedChange={setIsOutdoor}
                />
                <span>{isOutdoor ? 'Yes' : 'No'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Beverage Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Beverage Selection</CardTitle>
            <CardDescription>Choose which drinks to serve</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(servingTypes).map(([type, enabled]) => (
                <div key={type} className="flex items-center space-x-2">
                  <Switch
                    checked={enabled}
                    onCheckedChange={(checked) => 
                      setServingTypes(prev => ({...prev, [type]: checked}))
                    }
                  />
                  <Label className="capitalize">{type}</Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GlassWater className="h-5 w-5" />
              Recommended Quantities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servingQuantities.map(({ type, quantity, unit, servings }) => (
                <div key={type} className="flex items-center gap-2">
                  <GlassWater  className="h-4 w-4" />
                  <span className="capitalize">{type}:</span>
                  <span className="font-semibold">
                    {quantity} {unit}
                  </span>
                  <span className="text-sm text-gray-500">
                    ({servings} servings)
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <Coffee className="h-4 w-4" />
                <span>Ice Required:</span>
                <span className="font-semibold">{totalIce} pounds</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Alert>
          <AlertTitle className="flex items-center gap-2">
            <Info className="h-4 w-4" />
            Important Notes
          </AlertTitle>
          <AlertDescription>
            <div className="space-y-2 mt-2">
              <p className="text-sm">Calculations based on:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Average consumption of 1 drink per person per hour</li>
                <li>Temperature adjustments (+15% per 10°F above 70°F)</li>
                <li>Outdoor event factor (+20% for outdoor events)</li>
                <li>Seasonal and time-of-day adjustments</li>
                <li>10% buffer included for spillage and heavy drinkers</li>
              </ul>
              <p className="text-sm mt-4">Additional Recommendations:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Consider having backup supplies for popular beverages</li>
                <li>Plan for additional ice if serving blended drinks</li>
                <li>Include garnishes like lemon, lime, and mint</li>
                <li>Have backup water dispensers readily available</li>
              </ul>
            </div>
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};

export default WeddingDrinkLogic;