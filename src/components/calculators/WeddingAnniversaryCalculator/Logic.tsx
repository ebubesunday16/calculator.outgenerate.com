'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Gift, Gem, Calendar, Clock } from 'lucide-react';

const WeddingAnniversaryLogic = () => {
  const [weddingDate, setWeddingDate] = useState('');
  const [result, setResult] = useState(null);

  const anniversaryData = {
    1: { traditional: "Paper", modern: "Clocks", flower: "Carnation", gemstone: "Gold jewelry" },
    2: { traditional: "Cotton", modern: "China", flower: "Lily of the valley", gemstone: "Garnet" },
    3: { traditional: "Leather", modern: "Crystal/Glass", flower: "Sunflower", gemstone: "Pearl" },
    4: { traditional: "Fruit/Flowers", modern: "Appliances", flower: "Geranium", gemstone: "Blue topaz" },
    5: { traditional: "Wood", modern: "Silverware", flower: "Daisy", gemstone: "Sapphire" },
    10: { traditional: "Tin/Aluminum", modern: "Diamond jewelry", flower: "Daffodil", gemstone: "Diamond" },
    15: { traditional: "Crystal", modern: "Watch", flower: "Rose", gemstone: "Ruby" },
    20: { traditional: "China", modern: "Platinum", flower: "Aster", gemstone: "Emerald" },
    25: { traditional: "Silver", modern: "Silver", flower: "Iris", gemstone: "Silver jubilee" },
    30: { traditional: "Pearl", modern: "Diamond", flower: "Lily", gemstone: "Pearl" },
    40: { traditional: "Ruby", modern: "Ruby", flower: "Gladiolus", gemstone: "Ruby" },
    50: { traditional: "Gold", modern: "Gold", flower: "Yellow rose", gemstone: "Golden jubilee" },
    60: { traditional: "Diamond", modern: "Diamond", flower: "Red rose", gemstone: "Diamond jubilee" }
  };

  const calculateAnniversary = () => {
    if (!weddingDate) return;

    const wedding = new Date(weddingDate);
    const today = new Date();
    
    // Calculate years difference
    let yearsDiff = today.getFullYear() - wedding.getFullYear();
    const monthDiff = today.getMonth() - wedding.getMonth();
    const dayDiff = today.getDate() - wedding.getDate();
    
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      yearsDiff--;
    }

    // Calculate next anniversary date
    const nextAnniversary = new Date(wedding);
    nextAnniversary.setFullYear(today.getFullYear());
    if (nextAnniversary < today) {
      nextAnniversary.setFullYear(today.getFullYear() + 1);
    }

    // Calculate days until next anniversary
    const daysUntil = Math.ceil((nextAnniversary - today) / (1000 * 60 * 60 * 24));

    // Find the closest milestone
    const milestones = Object.keys(anniversaryData).map(Number);
    const nextMilestone = milestones.find(m => m > yearsDiff) || milestones[milestones.length - 1];
    const yearsToNextMilestone = nextMilestone - yearsDiff;

    setResult({
      years: yearsDiff,
      daysUntil,
      nextAnniversaryDate: nextAnniversary,
      currentGifts: anniversaryData[yearsDiff] || { traditional: "Every year is special!", modern: "Create your own tradition", flower: "Any flower", gemstone: "Any gemstone" },
      nextMilestone,
      yearsToNextMilestone
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-pink-600 flex items-center justify-center gap-2">
          <Heart className="text-pink-500" />
          Wedding Anniversary Calculator
          <Heart className="text-pink-500" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="weddingDate">Your Wedding Date</Label>
            <Input
              id="weddingDate"
              type="date"
              value={weddingDate}
              onChange={(e) => setWeddingDate(e.target.value)}
              className="w-full"
            />
          </div>
          
          <Button 
            onClick={calculateAnniversary}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white"
          >
            Calculate Anniversary
          </Button>

          {result && (
            <div className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg flex items-center gap-2 text-pink-600">
                    <Calendar className="h-5 w-5" />
                    Anniversary Details
                  </h3>
                  <p className="mt-2">Years Married: {result.years}</p>
                  <p>Days until next anniversary: {result.daysUntil}</p>
                  <p>Next milestone: {result.nextMilestone}th anniversary (in {result.yearsToNextMilestone} years)</p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg flex items-center gap-2 text-pink-600">
                    <Gift className="h-5 w-5" />
                    Traditional Gifts
                  </h3>
                  <p className="mt-2">Traditional: {result.currentGifts.traditional}</p>
                  <p>Modern: {result.currentGifts.modern}</p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg flex items-center gap-2 text-pink-600">
                    <Gem className="h-5 w-5" />
                    Symbols
                  </h3>
                  <p className="mt-2">Flower: {result.currentGifts.flower}</p>
                  <p>Gemstone: {result.currentGifts.gemstone}</p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg flex items-center gap-2 text-pink-600">
                    <Clock className="h-5 w-5" />
                    Next Anniversary
                  </h3>
                  <p className="mt-2">
                    Date: {result.nextAnniversaryDate.toLocaleDateString()}
                  </p>
                  <p>Countdown: {result.daysUntil} days</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeddingAnniversaryLogic;