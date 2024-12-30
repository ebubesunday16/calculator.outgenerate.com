'use client'
import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, Calendar, Users, MapPin, Clock, Building, Utensils, Music, Camera, Info, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Enhanced types
type Season = 'peak' | 'shoulder' | 'offPeak';
type DayType = 'weekend' | 'weekday';

interface VenuePricing {
  [key: string]: {
    basePrice: number;
    description: string;
    popularVenues: string[];
    seasonMultiplier: {
      peak: number;
      shoulder: number;
      offPeak: number;
    };
    dayMultiplier: {
      weekend: number;
      weekday: number;
    };
  };
}

const STATE_PRICING: VenuePricing = {
  'New Jersey': {
    basePrice: 27200,
    description: "Highest average venue cost in the US, known for luxury venues and proximity to NYC",
    popularVenues: ["Banquet Halls", "Country Clubs", "Historic Mansions"],
    seasonMultiplier: { peak: 1.2, shoulder: 1, offPeak: 0.8 },
    dayMultiplier: { weekend: 1.2, weekday: 0.8 }
  },
  'New York': {
    basePrice: 21700,
    description: "Second highest venue costs, featuring diverse options from urban to rural settings",
    popularVenues: ["Rooftop Venues", "Industrial Lofts", "Wineries"],
    seasonMultiplier: { peak: 1.2, shoulder: 1, offPeak: 0.8 },
    dayMultiplier: { weekend: 1.2, weekday: 0.8 }
  },
  'Connecticut': {
    basePrice: 20000,
    description: "Known for elegant country clubs and historic venues",
    popularVenues: ["Country Estates", "Waterfront Venues", "Historic Inns"],
    seasonMultiplier: { peak: 1.2, shoulder: 1, offPeak: 0.8 },
    dayMultiplier: { weekend: 1.2, weekday: 0.8 }
  },
  'Massachusetts': {
    basePrice: 19000,
    description: "Features beautiful coastal venues and historic locations",
    popularVenues: ["Coastal Resorts", "Historic Buildings", "Garden Venues"],
    seasonMultiplier: { peak: 1.2, shoulder: 1, offPeak: 0.8 },
    dayMultiplier: { weekend: 1.2, weekday: 0.8 }
  },
  'California': {
    basePrice: 16200,
    description: "Diverse options from wineries to beaches, with year-round availability",
    popularVenues: ["Wineries", "Beach Resorts", "Modern Hotels"],
    seasonMultiplier: { peak: 1.15, shoulder: 1, offPeak: 0.9 },
    dayMultiplier: { weekend: 1.2, weekday: 0.8 }
  },
  'Pennsylvania': {
    basePrice: 15100,
    description: "Mix of urban and rural venues with historic charm",
    popularVenues: ["Barns", "Historic Buildings", "Urban Lofts"],
    seasonMultiplier: { peak: 1.2, shoulder: 1, offPeak: 0.8 },
    dayMultiplier: { weekend: 1.2, weekday: 0.8 }
  },
  'Arizona': {
    basePrice: 14500,
    description: "Desert venues with unique landscapes and resort options",
    popularVenues: ["Desert Resorts", "Golf Clubs", "Botanical Gardens"],
    seasonMultiplier: { peak: 1.1, shoulder: 1, offPeak: 0.9 },
    dayMultiplier: { weekend: 1.15, weekday: 0.85 }
  },
  'Florida': {
    basePrice: 13100,
    description: "Beach and resort venues with year-round availability",
    popularVenues: ["Beach Resorts", "Garden Venues", "Country Clubs"],
    seasonMultiplier: { peak: 1.15, shoulder: 1, offPeak: 0.9 },
    dayMultiplier: { weekend: 1.2, weekday: 0.8 }
  },
  'Texas': {
    basePrice: 9800,
    description: "Large variety of venues from rustic to modern",
    popularVenues: ["Ranch Venues", "Modern Hotels", "Historic Sites"],
    seasonMultiplier: { peak: 1.15, shoulder: 1, offPeak: 0.9 },
    dayMultiplier: { weekend: 1.2, weekday: 0.8 }
  },
  'Utah': {
    basePrice: 4900,
    description: "Affordable venues with mountain and desert backdrops",
    popularVenues: ["Mountain Resorts", "Desert Venues", "Garden Centers"],
    seasonMultiplier: { peak: 1.2, shoulder: 1, offPeak: 0.8 },
    dayMultiplier: { weekend: 1.15, weekday: 0.85 }
  },
  'Other': {
    basePrice: 12800,
    description: "National average for wedding venues",
    popularVenues: ["Banquet Halls", "Farms & Barns", "Historic Buildings"],
    seasonMultiplier: { peak: 1.2, shoulder: 1, offPeak: 0.8 },
    dayMultiplier: { weekend: 1.2, weekday: 0.8 }
  }
};

// Info tooltips content
const tooltips = {
  state: "Select your state to get location-specific pricing. Prices vary significantly by region.",
  guests: "The number of guests affects venue capacity requirements and potentially per-person costs.",
  season: "Peak season (summer) typically costs more than off-peak (winter). Shoulder seasons offer moderate pricing.",
  dayType: "Weekend weddings typically cost 20-40% more than weekday weddings.",
  duration: "Standard rental duration is 6 hours. Additional hours affect the total cost.",
  catering: "In-house catering services, including staff, dinnerware, and setup.",
  setup: "Includes venue setup, breakdown, and cleaning services.",
  coordinator: "Professional on-site coordinator to manage vendors and timeline."
};

const WeddingVenueLogic = () => {
  // State management (same as before)
  const [state, setState] = useState<string>('Other');
  const [guestCount, setGuestCount] = useState<number>(100);
  const [season, setSeason] = useState<Season>('peak');
  const [dayType, setDayType] = useState<DayType>('weekend');
  const [duration, setDuration] = useState<number>(6);
  const [includeCatering, setIncludeCatering] = useState<boolean>(false);
  const [includeSetup, setIncludeSetup] = useState<boolean>(false);
  const [includeCoordinator, setIncludeCoordinator] = useState<boolean>(false);
  const [totalCost, setTotalCost] = useState<number>(0);

  // Calculate venue cost (same as before)
  useEffect(() => {
    const basePrice = STATE_PRICING[state].basePrice;
    const seasonMultiplier = STATE_PRICING[state].seasonMultiplier[season];
    const dayMultiplier = STATE_PRICING[state].dayMultiplier[dayType];
    
    const perPersonCost = guestCount * (includeCatering ? 75 : 0);
    const setupCost = includeSetup ? 1500 : 0;
    const coordinatorCost = includeCoordinator ? 2500 : 0;
    const durationMultiplier = duration / 6;
    
    const calculatedTotal = (basePrice * seasonMultiplier * dayMultiplier * durationMultiplier) + 
                          perPersonCost + setupCost + coordinatorCost;
    
    setTotalCost(Math.round(calculatedTotal));
  }, [state, guestCount, season, dayType, duration, includeCatering, includeSetup, includeCoordinator]);

  // Helper component for info tooltip
  const InfoTooltip = ({ content }: { content: string }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Info className="h-4 w-4 ml-2 text-muted-foreground" />
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

    // Style modifications
    const decorativeBorder = "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-pink-200 before:via-pink-300 before:to-pink-200";
  
    // Custom Select Component with better scrolling
    const CustomSelectContent = ({ children }: { children: React.ReactNode }) => (
      <SelectContent className="max-h-[300px] overflow-y-auto">
        <div className="p-1">
          {children}
        </div>
      </SelectContent>
    );

  return (
    <Card className={`w-full max-w-3xl mx-auto relative  ${decorativeBorder}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-pink-700">
          <Heart className="h-6 w-6 text-pink-500" />
          Wedding Venue Calculator
        </CardTitle>
        <CardDescription className="text-pink-600">
          Plan your perfect day with our venue cost estimator
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Location Selection */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2 text-pink-700">
            <MapPin className="h-4 w-4" />
            State
            <InfoTooltip content={tooltips.state} />
          </Label>
          <Select value={state} onValueChange={setState}>
            <SelectTrigger className="border-pink-200 focus:ring-pink-200">
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <CustomSelectContent>
              {Object.entries(STATE_PRICING).map(([stateName, data]) => (
                <SelectItem 
                  key={stateName} 
                  value={stateName}
                  className="hover:bg-pink-50 focus:bg-pink-50 cursor-pointer py-2"
                >
                  <div className="flex  items-center justify-between space-x-16 ">
                    <div>{stateName}</div>
                    <div className="text-xs text-muted-foreground">
                      Avg: ${data.basePrice.toLocaleString()}
                    </div>
                  </div>
                </SelectItem>
              ))}
            </CustomSelectContent>
          </Select>
          {state !== 'Other' && (
            <div className="mt-2 text-sm text-pink-600 bg-pink-50 p-3 rounded-lg">
              <p>{STATE_PRICING[state].description}</p>
              <p className="mt-1">Popular venues: {STATE_PRICING[state].popularVenues.join(", ")}</p>
            </div>
          )}
        </div>

        {/* Guest Count */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2 text-pink-700">
            <Users className="h-4 w-4" />
            Number of Guests
            <InfoTooltip content={tooltips.guests} />
          </Label>
          <Input
            type="number"
            min="1"
            value={guestCount}
            onChange={e => setGuestCount(parseInt(e.target.value) || 0)}
            className="border-pink-200 focus:ring-pink-200"
          />
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2 text-pink-700">
            <Users className="h-4 w-4" />
            Number of Guests
            <InfoTooltip content={tooltips.guests} />
          </Label>
          <Input
            type="number"
            min="1"
            value={guestCount}
            onChange={e => setGuestCount(parseInt(e.target.value) || 0)}
            className="border-pink-200 focus:ring-pink-200"
          />
        </div>

        {/* Season Selection */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2 text-pink-700">
            <Calendar className="h-4 w-4" />
            Season
            <InfoTooltip content={tooltips.season} />
          </Label>
          <Select value={season} onValueChange={(value: Season) => setSeason(value)}>
            <SelectTrigger className="border-pink-200 focus:ring-pink-200">
              <SelectValue placeholder="Select season" />
            </SelectTrigger>
            <CustomSelectContent>
              <SelectItem value="peak" className="hover:bg-pink-50">Peak (June-September)</SelectItem>
              <SelectItem value="shoulder" className="hover:bg-pink-50">Shoulder (April-May, October)</SelectItem>
              <SelectItem value="offPeak" className="hover:bg-pink-50">Off-Peak (November-March)</SelectItem>
            </CustomSelectContent>
          </Select>
        </div>

        {/* Day Type */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2 text-pink-700">
            <Clock className="h-4 w-4" />
            Day Type
            <InfoTooltip content={tooltips.dayType} />
          </Label>
          <Select value={dayType} onValueChange={(value: DayType) => setDayType(value)}>
            <SelectTrigger className="border-pink-200 focus:ring-pink-200">
              <SelectValue placeholder="Select day type" />
            </SelectTrigger>
            <CustomSelectContent>
              <SelectItem value="weekend" className="hover:bg-pink-50">Weekend</SelectItem>
              <SelectItem value="weekday" className="hover:bg-pink-50">Weekday</SelectItem>
            </CustomSelectContent>
          </Select>
        </div>

        {/* Duration */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2 text-pink-700">
            <Clock className="h-4 w-4" />
            Duration (hours)
            <InfoTooltip content={tooltips.duration} />
          </Label>
          <Input
            type="number"
            min="4"
            max="12"
            value={duration}
            onChange={e => setDuration(parseInt(e.target.value) || 6)}
            className="border-pink-200 focus:ring-pink-200"
          />
        </div>

        {/* Additional Services */}
        <div className="space-y-4">
          <Label className="flex items-center gap-2 text-pink-700">
            <Building className="h-4 w-4" />
            Additional Services
          </Label>
          
          <div className="flex items-center justify-between p-3 bg-pink-50/50 rounded-lg">
            <div className="flex items-center gap-2">
              <Utensils className="h-4 w-4 text-pink-600" />
              <span>Include Catering ($75/person)</span>
              <InfoTooltip content={tooltips.catering} />
            </div>
            <Switch
              checked={includeCatering}
              onCheckedChange={setIncludeCatering}
              className="data-[state=checked]:bg-pink-500"
            />
          </div>

          <div className="flex items-center justify-between p-3 bg-pink-50/50 rounded-lg">
            <div className="flex items-center gap-2">
              <Music className="h-4 w-4 text-pink-600" />
              <span>Setup/Breakdown Service ($1,500)</span>
              <InfoTooltip content={tooltips.setup} />
            </div>
            <Switch
              checked={includeSetup}
              onCheckedChange={setIncludeSetup}
              className="data-[state=checked]:bg-pink-500"
            />
          </div>

          <div className="flex items-center justify-between p-3 bg-pink-50/50 rounded-lg">
            <div className="flex items-center gap-2">
              <Camera className="h-4 w-4 text-pink-600" />
              <span>Day-of Coordinator ($2,500)</span>
              <InfoTooltip content={tooltips.coordinator} />
            </div>
            <Switch
              checked={includeCoordinator}
              onCheckedChange={setIncludeCoordinator}
              className="data-[state=checked]:bg-pink-500"
            />
          </div>
        </div>

        {/* Total Cost Display */}
        <Card className="bg-gradient-to-r from-pink-100 via-pink-50 to-pink-100 border-pink-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-pink-500" />
                <span className="text-lg font-semibold text-pink-700">Estimated Total</span>
              </div>
              <span className="text-3xl font-bold text-pink-700">
                ${totalCost.toLocaleString()}
              </span>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default WeddingVenueLogic;