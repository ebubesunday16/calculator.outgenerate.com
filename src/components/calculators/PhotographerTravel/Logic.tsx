'use client'

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Car, Plane, Hotel, DollarSign } from 'lucide-react';

const TravelFeeLogic = () => {
  const [distance, setDistance] = useState('');
  const [requiresLodging, setRequiresLodging] = useState(false);
  const [lodgingNights, setLodgingNights] = useState('1');
  const [lodgingRate, setLodgingRate] = useState('150');
  const [mileageRate, setMileageRate] = useState('0.65');
  const [parkingFees, setParkingFees] = useState('0');
  const [airfareCost, setAirfareCost] = useState('0');
  const [rentalCarCost, setRentalCarCost] = useState('0');
  const [perDiem, setPerDiem] = useState('50');
  const [additionalFees, setAdditionalFees] = useState('0');

  const calculateTotalCost = () => {
    const mileageCost = parseFloat(distance) * parseFloat(mileageRate);
    const totalLodging = requiresLodging ? parseFloat(lodgingRate) * parseFloat(lodgingNights) : 0;
    const totalPerDiem = parseFloat(perDiem) * (requiresLodging ? parseFloat(lodgingNights) : 1);
    
    const total = 
      mileageCost +
      totalLodging +
      parseFloat(parkingFees) +
      parseFloat(airfareCost) +
      parseFloat(rentalCarCost) +
      totalPerDiem +
      parseFloat(additionalFees);

    return isNaN(total) ? 0 : total;
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Travel Fee Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Transportation Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Car className="mr-2" /> Transportation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="distance">Distance (miles)</Label>
                <Input
                  id="distance"
                  type="number"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  placeholder="Enter total miles"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mileageRate">Mileage Rate ($/mile)</Label>
                <Input
                  id="mileageRate"
                  type="number"
                  step="0.01"
                  value={mileageRate}
                  onChange={(e) => setMileageRate(e.target.value)}
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Air Travel Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Plane className="mr-2" /> Air Travel
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="airfare">Airfare Cost ($)</Label>
                <Input
                  id="airfare"
                  type="number"
                  value={airfareCost}
                  onChange={(e) => setAirfareCost(e.target.value)}
                  placeholder="Enter airfare cost"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rentalCar">Rental Car Cost ($)</Label>
                <Input
                  id="rentalCar"
                  type="number"
                  value={rentalCarCost}
                  onChange={(e) => setRentalCarCost(e.target.value)}
                  placeholder="Enter rental car cost"
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Lodging Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Hotel className="mr-2" /> Lodging
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="requiresLodging"
                  checked={requiresLodging}
                  onChange={(e) => setRequiresLodging(e.target.checked)}
                  className="h-4 w-4"
                />
                <Label htmlFor="requiresLodging">Requires Overnight Stay</Label>
              </div>
              
              {requiresLodging && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="lodgingNights">Number of Nights</Label>
                    <Input
                      id="lodgingNights"
                      type="number"
                      value={lodgingNights}
                      onChange={(e) => setLodgingNights(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lodgingRate">Rate per Night ($)</Label>
                    <Input
                      id="lodgingRate"
                      type="number"
                      value={lodgingRate}
                      onChange={(e) => setLodgingRate(e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <Separator />

          {/* Additional Fees Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <DollarSign className="mr-2" /> Additional Fees
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="parking">Parking Fees ($)</Label>
                <Input
                  id="parking"
                  type="number"
                  value={parkingFees}
                  onChange={(e) => setParkingFees(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="perDiem">Per Diem ($)</Label>
                <Input
                  id="perDiem"
                  type="number"
                  value={perDiem}
                  onChange={(e) => setPerDiem(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="additionalFees">Other Fees ($)</Label>
                <Input
                  id="additionalFees"
                  type="number"
                  value={additionalFees}
                  onChange={(e) => setAdditionalFees(e.target.value)}
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Total Section */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Total Travel Fees</h3>
              <span className="text-2xl font-bold">
                ${calculateTotalCost().toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TravelFeeLogic;