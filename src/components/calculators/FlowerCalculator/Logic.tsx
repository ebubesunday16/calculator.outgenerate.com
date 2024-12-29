'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { 
  Flower2, 
  DollarSign, 
  CalendarDays, 
  Users, 
  Palette, 
  Info,
  Building,
  UserPlus,
  Heart,
  Flower,
  TreePine
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Types for our calculator
type Season = 'spring' | 'summer' | 'fall' | 'winter';
type FlowerStyle = 'minimal' | 'moderate' | 'luxurious';
type VenueSize = 'small' | 'medium' | 'large';
type VenueDecorLevel = 'basic' | 'enhanced' | 'elaborate';

interface FlowerPrices {
  bridalBouquet: number;
  bridesmaidBouquets: number;
  boutonnieres: number;
  corsages: number;
  ceremonyFlowers: number;
  receptionFlowers: number;
  venueDecoration: number;
  installationCosts: number;
  delivery: number;
}

const WeddingFlowerLogic = () => {
  // State management
  const [guestCount, setGuestCount] = useState<number>(100);
  const [season, setSeason] = useState<Season>('spring');
  const [flowerStyle, setFlowerStyle] = useState<FlowerStyle>('moderate');
  const [venueSize, setVenueSize] = useState<VenueSize>('medium');
  const [venueDecorLevel, setVenueDecorLevel] = useState<VenueDecorLevel>('basic');
  const [totalBudget, setTotalBudget] = useState<number>(35000);
  const [greeneryRatio, setGreeneryRatio] = useState<number>(30);
  const [bridesmaidCount, setBridesmaidCount] = useState<number>(4);
  const [boutonnieresCount, setBoutonnieresCount] = useState<number>(6);
  const [corsagesCount, setCorsagesCount] = useState<number>(4);
  const [calculations, setCalculations] = useState<FlowerPrices>({
    bridalBouquet: 0,
    bridesmaidBouquets: 0,
    boutonnieres: 0,
    corsages: 0,
    ceremonyFlowers: 0,
    receptionFlowers: 0,
    venueDecoration: 0,
    installationCosts: 0,
    delivery: 0
  });

  // Base prices (2024 estimates based on The Knot data)
  const BASE_PRICES = {
    bridal_bouquet: {
      minimal: 250,
      moderate: 350,
      luxurious: 500
    },
    bridesmaid_bouquet: {
      minimal: 85,
      moderate: 125,
      luxurious: 175
    },
    boutonniere: {
      minimal: 18,
      moderate: 25,
      luxurious: 35
    },
    corsage: {
      minimal: 28,
      moderate: 35,
      luxurious: 45
    },
    centerpiece: {
      minimal: 100,
      moderate: 150,
      luxurious: 250
    },
    ceremony_arrangement: {
      minimal: 200,
      moderate: 275,
      luxurious: 400
    },
    arch_decoration: {
      minimal: 600,
      moderate: 800,
      luxurious: 1200
    },
    venue_decoration: {
      basic: 500,
      enhanced: 1000,
      elaborate: 2000
    },
    delivery_base: 200
  };

  // Seasonal multipliers
  const SEASONAL_MULTIPLIERS = {
    spring: 1.2,  // Peak wedding season
    summer: 1.1,
    fall: 1.0,
    winter: 0.9
  };

  // Calculate total costs
  const calculateCosts = () => {
    const seasonalMultiplier = SEASONAL_MULTIPLIERS[season];
    const greeneryDiscount = (100 - greeneryRatio) / 100;

    // Calculate bridal bouquet
    const bridalBouquet = BASE_PRICES.bridal_bouquet[flowerStyle] * seasonalMultiplier;

    // Calculate bridesmaid bouquets
    const bridesmaidBouquets = bridesmaidCount * BASE_PRICES.bridesmaid_bouquet[flowerStyle] * seasonalMultiplier;

    // Calculate boutonnieres and corsages
    const boutonnieres = boutonnieresCount * BASE_PRICES.boutonniere[flowerStyle] * seasonalMultiplier;
    const corsages = corsagesCount * BASE_PRICES.corsage[flowerStyle] * seasonalMultiplier;

    // Calculate ceremony flowers
    const ceremonyFlowers = (
      BASE_PRICES.arch_decoration[flowerStyle] +
      (2 * BASE_PRICES.ceremony_arrangement[flowerStyle])
    ) * seasonalMultiplier * greeneryDiscount;

    // Calculate reception flowers
    const tableCount = Math.ceil(guestCount / 8);
    const receptionFlowers = (
      (tableCount * BASE_PRICES.centerpiece[flowerStyle]) +
      (2 * BASE_PRICES.ceremony_arrangement[flowerStyle])
    ) * seasonalMultiplier * greeneryDiscount;

    // Calculate venue decoration
    const venueDecorationBase = BASE_PRICES.venue_decoration[venueDecorLevel];
    const venueSizeMultiplier = venueSize === 'small' ? 1 : venueSize === 'medium' ? 1.5 : 2;
    const venueDecoration = venueDecorationBase * venueSizeMultiplier * seasonalMultiplier * greeneryDiscount;

    // Installation costs based on venue size
    const installationCosts = BASE_PRICES.delivery_base * venueSizeMultiplier;

    // Delivery costs based on total flowers
    const delivery = BASE_PRICES.delivery_base + (guestCount * 2);

    setCalculations({
      bridalBouquet: Math.round(bridalBouquet),
      bridesmaidBouquets: Math.round(bridesmaidBouquets),
      boutonnieres: Math.round(boutonnieres),
      corsages: Math.round(corsages),
      ceremonyFlowers: Math.round(ceremonyFlowers),
      receptionFlowers: Math.round(receptionFlowers),
      venueDecoration: Math.round(venueDecoration),
      installationCosts: Math.round(installationCosts),
      delivery: Math.round(delivery)
    });
  };

  // Recalculate when inputs change
  useEffect(() => {
    calculateCosts();
  }, [
    guestCount,
    season,
    flowerStyle,
    venueSize,
    venueDecorLevel,
    greeneryRatio,
    bridesmaidCount,
    boutonnieresCount,
    corsagesCount
  ]);

  // Calculate total and percentage of wedding budget
  const totalCost = Object.values(calculations).reduce((a, b) => a + b, 0);
  const budgetPercentage = (totalCost / totalBudget) * 100;

  // Helper component for labeled inputs with tooltips
  const LabeledInput = ({ icon: Icon, label, tooltip, children }: {
    icon: React.ElementType;
    label: string;
    tooltip: string;
    children: React.ReactNode;
  }) => (
    <div className="space-y-2">
      <Label className="flex items-center gap-2">
        <Icon className="w-4 h-4" />
        {label}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info className="w-4 h-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs">{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Label>
      {children}
    </div>
  );

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Flower2 className="text-pink-500" />
          Wedding Flower Cost Calculator
        </CardTitle>
        <CardDescription>
          Estimate your wedding flower costs based on your specific needs and preferences
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Guest Count Input */}
        <LabeledInput 
          icon={Users} 
          label="Number of Guests"
          tooltip="Total number of guests affects the number of table centerpieces and overall floral requirements"
        >
          <Input
            type="number"
            value={guestCount}
            onChange={(e) => setGuestCount(Number(e.target.value))}
            min={1}
            max={1000}
          />
        </LabeledInput>

        {/* Total Wedding Budget */}
        <LabeledInput 
          icon={DollarSign} 
          label="Total Wedding Budget"
          tooltip="Your overall wedding budget helps determine if flower costs are within the recommended 10-15% range"
        >
          <Input
            type="number"
            value={totalBudget}
            onChange={(e) => setTotalBudget(Number(e.target.value))}
            min={5000}
          />
        </LabeledInput>

        {/* Bridal Party Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <LabeledInput 
            icon={UserPlus} 
            label="Bridesmaids"
            tooltip="Number of bridesmaids who need bouquets"
          >
            <Input
              type="number"
              value={bridesmaidCount}
              onChange={(e) => setBridesmaidCount(Number(e.target.value))}
              min={0}
            />
          </LabeledInput>

          <LabeledInput 
            icon={Flower} 
            label="Boutonnieres"
            tooltip="Number of boutonnieres needed (usually for groom, groomsmen, fathers, and other VIPs)"
          >
            <Input
              type="number"
              value={boutonnieresCount}
              onChange={(e) => setBoutonnieresCount(Number(e.target.value))}
              min={0}
            />
          </LabeledInput>

          <LabeledInput 
            icon={Heart} 
            label="Corsages"
            tooltip="Number of corsages needed (usually for mothers, grandmothers, and other VIPs)"
          >
            <Input
              type="number"
              value={corsagesCount}
              onChange={(e) => setCorsagesCount(Number(e.target.value))}
              min={0}
            />
          </LabeledInput>
        </div>

        {/* Season Selection */}
        <LabeledInput 
          icon={CalendarDays} 
          label="Wedding Season"
          tooltip="Season affects flower availability and pricing. Spring is typically most expensive due to peak demand"
        >
          <Select value={season} onValueChange={(value: Season) => setSeason(value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="spring">Spring (Peak Season)</SelectItem>
              <SelectItem value="summer">Summer</SelectItem>
              <SelectItem value="fall">Fall</SelectItem>
              <SelectItem value="winter">Winter</SelectItem>
            </SelectContent>
          </Select>
        </LabeledInput>

        {/* Style Selection */}
        <LabeledInput 
          icon={Palette} 
          label="Flower Style"
          tooltip="Affects the type and quality of flowers used. Luxurious includes premium and out-of-season blooms"
        >
          <Select value={flowerStyle} onValueChange={(value: FlowerStyle) => setFlowerStyle(value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="minimal">Minimal (More Greenery)</SelectItem>
              <SelectItem value="moderate">Moderate (Balanced)</SelectItem>
              <SelectItem value="luxurious">Luxurious (Premium Flowers)</SelectItem>
            </SelectContent>
          </Select>
        </LabeledInput>

        {/* Venue Size */}
        <LabeledInput 
          icon={Building} 
          label="Venue Size"
          tooltip="Affects installation costs and the amount of decoration needed to fill the space"
        >
          <Select value={venueSize} onValueChange={(value: VenueSize) => setVenueSize(value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small (Indoor/Intimate)</SelectItem>
              <SelectItem value="medium">Medium (Standard Venue)</SelectItem>
              <SelectItem value="large">Large (Multiple Spaces)</SelectItem>
            </SelectContent>
          </Select>
        </LabeledInput>

        {/* Venue Decoration Level */}
        <LabeledInput 
          icon={Flower2} 
          label="Venue Decoration Level"
          tooltip="Determines the extent of floral decorations throughout the venue spaces"
        >
          <Select value={venueDecorLevel} onValueChange={(value: VenueDecorLevel) => setVenueDecorLevel(value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic">Basic (Essential Areas Only)</SelectItem>
              <SelectItem value="enhanced">Enhanced (Additional Focal Points)</SelectItem>
              <SelectItem value="elaborate">Elaborate (Full Venue Transformation)</SelectItem>
            </SelectContent>
          </Select>
        </LabeledInput>

        {/* Greenery Ratio Slider */}
        <LabeledInput 
          icon={TreePine} 
          label={`Greenery to Flower Ratio (${greeneryRatio}% Greenery)`}
          tooltip="Higher greenery percentage typically reduces overall cost while maintaining visual impact"
        >
          <Slider
            value={[greeneryRatio]}
            onValueChange={(value) => setGreeneryRatio(value[0])}
            min={0}
            max={70}
            step={5}
            className="pt-2"
          />
        </LabeledInput>

        {/* Results Display */}
        <Card className="bg-slate-50">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Bridal Bouquet:</span>
                <span>${calculations.bridalBouquet}</span>
              </div>
              <div className="flex justify-between">
                <span>Bridesmaid Bouquets:</span>
                <span>${calculations.bridesmaidBouquets}</span>
              </div>
              <div className="flex justify-between">
                <span>Boutonnieres:</span>
                <span>${calculations.boutonnieres}</span>
              </div>
              <div className="flex justify-between">
                <span>Corsages:</span>
                <span>${calculations.corsages}</span>
              </div>
              <div className="flex justify-between">
                <span>Ceremony Flowers:</span>
                <span>${calculations.ceremonyFlowers}</span>
              </div>
              <div className="flex justify-between">
                <span>Reception Flowers:</span>
                <span>${calculations.receptionFlowers}</span>
              </div>
              <div className="flex justify-between">
                <span>Venue Decoration:</span>
                <span>${calculations.venueDecoration}</span>
              </div>
              <div className="flex justify-between">
                <span>Installation:</span>
                <span>${calculations.installationCosts}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery:</span>
                <span>${calculations.delivery}</span>
              </div>
              <div className="flex justify-between font-bold pt-2 border-t">
                <span>Total Estimated Cost:</span>
                <span>${totalCost}</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Percentage of Wedding Budget:</span>
                <span>{budgetPercentage.toFixed(1)}%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Budget Alerts */}
        {budgetPercentage > 15 && (
          <Alert variant="destructive">
            <AlertDescription>
              Your flower budget is {budgetPercentage.toFixed(1)}% of your total wedding budget, which is higher than the recommended 10-15%. Consider:
              <ul className="list-disc pl-4 mt-2">
                <li>Increasing your greenery ratio</li>
                <li>Choosing a more minimal flower style</li>
                <li>Reducing the venue decoration level</li>
                <li>Adjusting your total wedding budget</li>
              </ul>
            </AlertDescription>
          </Alert>
        )}

        {greeneryRatio < 20 && flowerStyle === 'luxurious' && (
          <Alert>
            <AlertDescription>
              Using premium flowers with low greenery ratio will significantly impact costs. Consider increasing greenery to 30-40% for better budget balance while maintaining luxury appeal.
            </AlertDescription>
          </Alert>
        )}

        {season === 'spring' && flowerStyle === 'luxurious' && (
          <Alert>
            <AlertDescription>
              Spring is peak wedding season with highest flower costs. Consider summer or fall for better pricing on premium flowers.
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};

export default WeddingFlowerLogic;