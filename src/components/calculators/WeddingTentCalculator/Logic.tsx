'use client'
import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Calculator, Tent, Users, Calendar, Thermometer, Wind, HeartIcon, InfoIcon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// Types for our calculator
type TentType = 'pole' | 'frame' | 'clear' | 'highPeak';
type Season = 'spring' | 'summer' | 'fall' | 'winter';
type Surface = 'grass' | 'concrete' | 'mixed';

interface TentPricing {
  basePrice: number;
  pricePerSqFt: number;
}

const DEFAULT_TENT_PRICING: Record<TentType, TentPricing> = {
  pole: { basePrice: 4500, pricePerSqFt: 2 },
  frame: { basePrice: 5600, pricePerSqFt: 2.5 },
  clear: { basePrice: 8300, pricePerSqFt: 3 },
  highPeak: { basePrice: 6000, pricePerSqFt: 2.75 }
};

const InfoTooltip = ({ content }: { content: string }) => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <InfoIcon className="w-4 h-4 ml-2 inline-block cursor-help text-muted-foreground hover:text-primary" />
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
      <p className="text-sm">{content}</p>
    </HoverCardContent>
  </HoverCard>
);

const WeddingTentLogic = () => {
  // State management for form inputs
  const [guestCount, setGuestCount] = useState<number>(100);
  const [tentType, setTentType] = useState<TentType>('pole');
  const [season, setSeason] = useState<Season>('summer');
  const [surface, setSurface] = useState<Surface>('grass');
  const [needsDanceFloor, setNeedsDanceFloor] = useState(true);
  const [needsCatering, setNeedsCatering] = useState(true);
  const [needsLighting, setNeedsLighting] = useState(true);
  const [needsFlooring, setNeedsFlooring] = useState(false);
  const [needsHeatingCooling, setNeedsHeatingCooling] = useState(false);

  // Calculation functions remain the same as before
  const calculateTentSize = useCallback((guests: number) => {
    const sqFtPerPerson = 15;
    const danceFloorSpace = needsDanceFloor ? 400 : 0;
    const cateringSpace = needsCatering ? 200 : 0;
    
    const totalSqFt = (guests * sqFtPerPerson) + danceFloorSpace + cateringSpace;
    return totalSqFt;
  }, [needsDanceFloor, needsCatering]);

  const calculateTotalCost = useCallback(() => {
    // Previous calculation logic remains the same
    const tentSize = calculateTentSize(guestCount);
    const pricing = DEFAULT_TENT_PRICING[tentType];
    
    let totalCost = pricing.basePrice + (tentSize * pricing.pricePerSqFt);

    if (needsDanceFloor) totalCost += 1500;
    if (needsCatering) totalCost += 800;
    if (needsLighting) totalCost += 1200;
    if (needsFlooring) totalCost += tentSize * 4;
    
    if (season === 'winter') totalCost *= 1.2;
    if (season === 'summer') totalCost *= 1.15;
    
    if (surface === 'concrete') totalCost += 500;
    if (surface === 'mixed') totalCost += 750;
    
    if (needsHeatingCooling) {
      if (season === 'winter' || season === 'summer') {
        totalCost += 2000;
      } else {
        totalCost += 1000;
      }
    }

    return Math.round(totalCost);
  }, [guestCount, tentType, season, surface, needsDanceFloor, needsCatering, needsLighting, needsFlooring, needsHeatingCooling, calculateTentSize]);

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-sm border-rose-100">
      <CardHeader className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-t-lg border-b border-rose-100">
        <CardTitle className="flex items-center gap-2 text-rose-800">
          <HeartIcon className="w-6 h-6" />
          Wedding Tent Cost Calculator
        </CardTitle>
        <CardDescription className="text-rose-600">
          Plan the perfect coverage for your special day
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Guest Count Section */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2 text-rose-700">
            <Users className="w-4 h-4" />
            Number of Guests
            <InfoTooltip content="We recommend 15 square feet per guest for comfortable seating and movement." />
          </Label>
          <Slider
            value={[guestCount]}
            onValueChange={(value) => setGuestCount(value[0])}
            max={500}
            min={50}
            step={10}
            className="w-full"
          />
          <div className="text-sm text-rose-600">{guestCount} guests</div>
        </div>

        {/* Tent Type Selection */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2 text-rose-700">
            <Tent className="w-4 h-4" />
            Tent Type
            <InfoTooltip content="Pole tents are classic and cost-effective, frame tents are versatile, clear tops offer a view of the sky, and high peak tents provide an elegant profile." />
          </Label>
          <Select value={tentType} onValueChange={(value: TentType) => setTentType(value)}>
            <SelectTrigger className="border-rose-200">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pole">Pole Tent</SelectItem>
              <SelectItem value="frame">Frame Tent</SelectItem>
              <SelectItem value="clear">Clear Top Tent</SelectItem>
              <SelectItem value="highPeak">High Peak Tent</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Season Selection */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2 text-rose-700">
            <Calendar className="w-4 h-4" />
            Season
            <InfoTooltip content="Peak season (summer) and winter months may incur additional costs for comfort control." />
          </Label>
          <Select value={season} onValueChange={(value: Season) => setSeason(value)}>
            <SelectTrigger className="border-rose-200">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="spring">Spring</SelectItem>
              <SelectItem value="summer">Summer</SelectItem>
              <SelectItem value="fall">Fall</SelectItem>
              <SelectItem value="winter">Winter</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Surface Type */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2 text-rose-700">
            <Wind className="w-4 h-4" />
            Setup Surface
            <InfoTooltip content="Different surfaces require different setup methods and may affect the total cost." />
          </Label>
          <Select value={surface} onValueChange={(value: Surface) => setSurface(value)}>
            <SelectTrigger className="border-rose-200">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="grass">Grass</SelectItem>
              <SelectItem value="concrete">Concrete</SelectItem>
              <SelectItem value="mixed">Mixed Surface</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Additional Features */}
        <div className="space-y-4 bg-rose-50 p-4 rounded-lg">
          <Label className="text-rose-700">Additional Features</Label>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="flex items-center">
                Dance Floor
                <InfoTooltip content="Includes a 20x20 professional dance floor setup." />
              </Label>
              <Switch checked={needsDanceFloor} onCheckedChange={setNeedsDanceFloor} />
            </div>
            <div className="flex items-center justify-between">
              <Label className="flex items-center">
                Catering Space
                <InfoTooltip content="Additional tent space for catering prep and service." />
              </Label>
              <Switch checked={needsCatering} onCheckedChange={setNeedsCatering} />
            </div>
            <div className="flex items-center justify-between">
              <Label className="flex items-center">
                Lighting
                <InfoTooltip content="Includes string lights and uplighting for ambiance." />
              </Label>
              <Switch checked={needsLighting} onCheckedChange={setNeedsLighting} />
            </div>
            <div className="flex items-center justify-between">
              <Label className="flex items-center">
                Flooring
                <InfoTooltip content="Professional flooring to create a stable surface." />
              </Label>
              <Switch checked={needsFlooring} onCheckedChange={setNeedsFlooring} />
            </div>
            <div className="flex items-center justify-between">
              <Label className="flex items-center">
                <Thermometer className="w-4 h-4 mr-2" />
                Heating/Cooling
                <InfoTooltip content="Temperature control systems for guest comfort." />
              </Label>
              <Switch checked={needsHeatingCooling} onCheckedChange={setNeedsHeatingCooling} />
            </div>
          </div>
        </div>

        {/* Results */}
        <Alert className="mt-6 border-rose-200 bg-gradient-to-r from-rose-50 to-pink-50">
          <AlertTitle className="text-xl text-rose-700">Estimated Total Cost</AlertTitle>
          <AlertDescription className="text-3xl font-bold text-rose-800">
            ${calculateTotalCost().toLocaleString()}
          </AlertDescription>
        </Alert>

        <div className="text-sm text-rose-600 mt-4">
          * This is an estimate based on average prices. Actual costs may vary depending on location, specific vendor pricing, and additional requirements.
        </div>
      </CardContent>
    </Card>
  );
};

export default WeddingTentLogic;