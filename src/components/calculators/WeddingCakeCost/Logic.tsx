'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Cake, DollarSign, Users, PlusCircle, MinusCircle, Info } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Enums for strict type checking
enum ServingSize {
  Full = "full",
  Half = "half"
}

enum CakeShape {
  Round = "round",
  Square = "square"
}

enum FrostingType {
  Buttercream = "buttercream",
  Fondant = "fondant"
}

enum FlavorComplexity {
  Standard = "standard",
  Premium = "premium",
  Luxury = "luxury"
}

enum LocationType {
  Rural = "rural",
  Suburban = "suburban",
  Urban = "urban"
}

// Type definitions for various multipliers and costs
type ComplexityMultipliers = {
  [key: number]: number;
};

type LocationMultipliers = {
  [K in LocationType]: number;
};

type FlavorMultipliers = {
  [K in FlavorComplexity]: number;
};

type BaseSliceCosts = {
  [K in FrostingType]: number;
};

// Interface for tooltip content
interface TooltipContent {
  servingSize: string;
  shape: string;
  tiers: string;
  designComplexity: {
    [key: number]: string;
  };
  frostingType: {
    [K in FrostingType]: string;
  };
  flavorComplexity: {
    [K in FlavorComplexity]: string;
  };
  dietary: string;
  topper: string;
  delivery: string;
  location: {
    [K in LocationType]: string;
  };
}

// Props interface for InfoTooltip component
interface InfoTooltipProps {
  content: string;
}

const WeddingCakeLogic: React.FC = () => {
  // State with type definitions
  const [guestCount, setGuestCount] = useState<number>(100);
  const [servingSize, setServingSize] = useState<ServingSize>(ServingSize.Full);
  const [shape, setShape] = useState<CakeShape>(CakeShape.Round);
  const [tiers, setTiers] = useState<number>(2);
  const [frostingType, setFrostingType] = useState<FrostingType>(FrostingType.Buttercream);
  const [designComplexity, setDesignComplexity] = useState<number>(1);
  const [includesTopper, setIncludesTopper] = useState<boolean>(false);
  const [includesDelivery, setIncludesDelivery] = useState<boolean>(true);
  const [location, setLocation] = useState<LocationType>(LocationType.Suburban);
  const [flavorComplexity, setFlavorComplexity] = useState<FlavorComplexity>(FlavorComplexity.Standard);
  const [specialDietary, setSpecialDietary] = useState<boolean>(false);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [costPerSlice, setCostPerSlice] = useState<number>(0);

  // Constants with proper typing
  const BASE_SLICE_COSTS: BaseSliceCosts = {
    [FrostingType.Buttercream]: 6,
    [FrostingType.Fondant]: 10,
  };

  const LOCATION_MULTIPLIERS: LocationMultipliers = {
    [LocationType.Rural]: 0.8,
    [LocationType.Suburban]: 1,
    [LocationType.Urban]: 1.5,
  };

  const COMPLEXITY_MULTIPLIERS: ComplexityMultipliers = {
    1: 1,    // Simple
    2: 1.25, // Moderate
    3: 1.5,  // Complex
    4: 1.75, // Very Complex
    5: 2,    // Extremely Complex
  };

  const FLAVOR_MULTIPLIERS: FlavorMultipliers = {
    [FlavorComplexity.Standard]: 1,
    [FlavorComplexity.Premium]: 1.2,
    [FlavorComplexity.Luxury]: 1.4,
  };

  const tooltips: TooltipContent = {
    servingSize: "Half servings can help reduce costs. Most guests only eat a bite or two!",
    shape: "Square cakes typically serve more guests per tier than round cakes",
    tiers: "Each additional tier adds $50 to the base cost",
    designComplexity: {
      1: "Simple designs with minimal decoration (+0%)",
      2: "Basic piping and simple patterns (+25%)",
      3: "Moderate detail work and textures (+50%)",
      4: "Complex patterns and handmade decorations (+75%)",
      5: "Intricate designs, hand-painting, or sugar flowers (+100%)"
    },
    frostingType: {
      [FrostingType.Buttercream]: "Classic, creamy finish ($6/slice base)",
      [FrostingType.Fondant]: "Smooth, polished finish ($10/slice base)"
    },
    flavorComplexity: {
      [FlavorComplexity.Standard]: "Vanilla, chocolate, or marble (+0%)",
      [FlavorComplexity.Premium]: "Red velvet, lemon, or fruit flavors (+20%)",
      [FlavorComplexity.Luxury]: "Custom flavors, specialty combinations (+40%)"
    },
    dietary: "Gluten-free, vegan, or other special requirements (+30%)",
    topper: "Includes a basic cake topper ($35)",
    delivery: "Professional delivery and setup ($50)",
    location: {
      [LocationType.Rural]: "Rural areas (-20% from base price)",
      [LocationType.Suburban]: "Standard pricing",
      [LocationType.Urban]: "Major cities (+50% to base price)"
    }
  };

  const calculateTotalCost = (): void => {
    // Calculate number of servings needed
    const servingsNeeded = servingSize === ServingSize.Full ? guestCount : Math.ceil(guestCount / 2);
    
    // Base cost per slice
    let baseSliceCost = BASE_SLICE_COSTS[frostingType];
    
    // Apply multipliers
    let adjustedSliceCost = baseSliceCost
      * LOCATION_MULTIPLIERS[location]
      * COMPLEXITY_MULTIPLIERS[designComplexity]
      * FLAVOR_MULTIPLIERS[flavorComplexity];
    
    // Add dietary restrictions cost if needed
    if (specialDietary) {
      adjustedSliceCost *= 1.3;
    }
    
    // Calculate base cake cost
    let totalCostCalculation = adjustedSliceCost * servingsNeeded;
    
    // Add tier complexity cost
    totalCostCalculation += (tiers - 1) * 50;
    
    // Add delivery if included
    if (includesDelivery) {
      totalCostCalculation += 50;
    }
    
    // Add topper if included
    if (includesTopper) {
      totalCostCalculation += 35;
    }
    
    setCostPerSlice(adjustedSliceCost);
    setTotalCost(Math.round(totalCostCalculation));
  };

  useEffect(() => {
    calculateTotalCost();
  }, [guestCount, servingSize, shape, tiers, frostingType, designComplexity, 
      includesTopper, includesDelivery, location, flavorComplexity, specialDietary]);

  const InfoTooltip: React.FC<InfoTooltipProps> = ({ content }) => (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger>
          <Info className="h-4 w-4 ml-2 text-muted-foreground hover:text-primary" />
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <p className="text-sm">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  // JSX remains the same, but now with proper type checking for all values and event handlers
  return (
    <Card className="w-full max-w-3xl mx-auto bg-gradient-to-b from-white to-pink-50/30">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-3 text-3xl font-serif">
          <Cake className="h-8 w-8 text-pink-400" />
          <h2>Wedding Cake Calculator</h2>
          <Cake className="h-8 w-8 text-pink-400" />
        </CardTitle>
        <p className="text-muted-foreground mt-2">Design your perfect wedding cake and estimate costs</p>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Guest Count Section */}
        <div className="space-y-4 p-6 bg-white/50 rounded-lg border border-pink-100 shadow-sm">
          <Label className="flex items-center gap-2 text-lg font-medium">
            <Users className="h-5 w-5 text-pink-500" />
            Guest Information
          </Label>
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <Label>Number of Guests</Label>
                <InfoTooltip content="This will help determine the size of your cake" />
              </div>
              <Input
                type="number"
                value={guestCount}
                onChange={(e) => setGuestCount(Math.max(1, parseInt(e.target.value) || 0))}
                className="w-24"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <Label>Serving Size</Label>
                <InfoTooltip content={tooltips.servingSize} />
              </div>
              <Select value={servingSize} onValueChange={(value: ServingSize) => setServingSize(value)}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ServingSize.Full}>Full Slice</SelectItem>
                  <SelectItem value={ServingSize.Half}>Half Slice</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Cake Design Section */}
        <div className="space-y-6 p-6 bg-white/50 rounded-lg border border-pink-100 shadow-sm">
          <Label className="flex items-center gap-2 text-lg font-medium">
            <Cake className="h-5 w-5 text-pink-500" />
            Cake Design
          </Label>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center">
                <Label>Cake Shape</Label>
                <InfoTooltip content={tooltips.shape} />
              </div>
              <Select value={shape} onValueChange={setShape}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="round">Round</SelectItem>
                  <SelectItem value="square">Square</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label>Number of Tiers</Label>
                <InfoTooltip content={tooltips.tiers} />
              </div>
              <div className="flex items-center gap-4 p-2 bg-white rounded-md">
                <MinusCircle 
                  className="cursor-pointer text-pink-500 hover:text-pink-600" 
                  onClick={() => setTiers(Math.max(1, tiers - 1))}
                />
                <span className="w-8 text-center font-semibold">{tiers}</span>
                <PlusCircle 
                  className="cursor-pointer text-pink-500 hover:text-pink-600"
                  onClick={() => setTiers(Math.min(6, tiers + 1))}
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Label>Design Complexity</Label>
              <InfoTooltip content={tooltips.designComplexity[designComplexity]} />
            </div>
            <Slider 
              value={[designComplexity]}
              min={1}
              max={5}
              step={1}
              onValueChange={([value]) => setDesignComplexity(value)}
              className="py-4"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Simple</span>
              <span>Moderate</span>
              <span>Complex</span>
              <span>Very Complex</span>
              <span>Extreme</span>
            </div>
          </div>
        </div>

        {/* Frosting & Flavors Section */}
        <div className="space-y-6 p-6 bg-white/50 rounded-lg border border-pink-100 shadow-sm">
          <Label className="flex items-center gap-2 text-lg font-medium">
            Frosting & Flavors
          </Label>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center">
                <Label>Frosting Type</Label>
                <InfoTooltip content={tooltips.frostingType[frostingType]} />
              </div>
              <Select value={frostingType} onValueChange={setFrostingType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buttercream">Buttercream</SelectItem>
                  <SelectItem value="fondant">Fondant</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label>Flavor Complexity</Label>
                <InfoTooltip content={tooltips.flavorComplexity[flavorComplexity]} />
              </div>
              <Select value={flavorComplexity} onValueChange={setFlavorComplexity}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Additional Options Section */}
        <div className="space-y-4 p-6 bg-white/50 rounded-lg border border-pink-100 shadow-sm">
          <Label className="flex items-center gap-2 text-lg font-medium">
            Additional Options
          </Label>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Label>Special Dietary Requirements</Label>
                <InfoTooltip content={tooltips.dietary} />
              </div>
              <Switch
                checked={specialDietary}
                onCheckedChange={setSpecialDietary}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Label>Include Cake Topper</Label>
                <InfoTooltip content={tooltips.topper} />
              </div>
              <Switch
                checked={includesTopper}
                onCheckedChange={setIncludesTopper}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Label>Include Delivery</Label>
                <InfoTooltip content={tooltips.delivery} />
              </div>
              <Switch
                checked={includesDelivery}
                onCheckedChange={setIncludesDelivery}
              />
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="space-y-2 p-6 bg-white/50 rounded-lg border border-pink-100 shadow-sm">
          <div className="flex items-center">
            <Label>Location Type</Label>
            <InfoTooltip content={tooltips.location[location]} />
          </div>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rural">Rural</SelectItem>
              <SelectItem value="suburban">Suburban</SelectItem>
              <SelectItem value="urban">Urban/Major City</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Results Section */}
        <Alert className="mt-6 bg-gradient-to-r from-pink-50 to-pink-100 border-pink-200">
          <AlertDescription className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-pink-500" />
                <span className="font-semibold">Estimated Total Cost:</span>
                <span className="text-2xl font-bold text-pink-600">${totalCost}</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Cost per slice: ${costPerSlice.toFixed(2)}
              </div>
            </div>
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};

export default WeddingCakeLogic;