'use client'
import  { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Calculator, CreditCard } from "lucide-react";

const ChasePointsLogic = () => {
  const [points, setPoints] = useState('');
  const [cardType, setCardType] = useState('');

  const cardValues = {
    'sapphire-reserve': {
      portalValue: 1.5,
      transferValue: 2.1,
      name: 'Chase Sapphire Reserve®'
    },
    'sapphire-preferred': {
      portalValue: 1.25,
      transferValue: 2.1,
      name: 'Chase Sapphire Preferred®'
    },
    'ink-preferred': {
      portalValue: 1.25,
      transferValue: 2.1,
      name: 'Ink Business Preferred®'
    },
    'freedom-flex': {
      portalValue: 1,
      transferValue: 1,
      name: 'Chase Freedom Flex®'
    },
    'freedom-unlimited': {
      portalValue: 1,
      transferValue: 1,
      name: 'Chase Freedom Unlimited®'
    },
    'ink-cash': {
      portalValue: 1,
      transferValue: 1,
      name: 'Ink Business Cash®'
    },
    'ink-unlimited': {
      portalValue: 1,
      transferValue: 1,
      name: 'Ink Business Unlimited®'
    }
  };

  const calculateValues = () => {
    if (!points || !cardType) return null;
    
    const numPoints = parseFloat(points);
    const card = cardValues[cardType];
    
    const portalValue = (numPoints * card.portalValue / 100).toFixed(2);
    const transferValue = (numPoints * card.transferValue / 100).toFixed(2);
    
    return {
      portalValue,
      transferValue,
      cardName: card.name
    };
  };

  const results = calculateValues();

  return (
    <Card className="w-full max-w-5xl mx-auto ">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-6 h-6" />
          Chase Ultimate Rewards® Points Calculator
        </CardTitle>
        <CardDescription>
          Calculate the value of your Chase Ultimate Rewards® points based on your card type
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Number of Points</label>
            <Input
              type="number"
              placeholder="Enter number of points"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Select Your Chase Card</label>
            <Select value={cardType} onValueChange={setCardType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select your Chase card" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(cardValues).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4" />
                      {value.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {results && (
          <div className="mt-6 space-y-4 p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-lg">Value of Your Points</h3>
            <div className="grid gap-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Travel Portal Value:</span>
                <span className="font-medium">${results.portalValue}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Maximum Transfer Partner Value:</span>
                <span className="font-medium">${results.transferValue}</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              Values are based on Comprehensive Research by analysts. Transfer partner values may vary based on specific redemptions.
              Portal value represents direct redemption through Chase Ultimate Rewards® travel portal.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ChasePointsLogic;