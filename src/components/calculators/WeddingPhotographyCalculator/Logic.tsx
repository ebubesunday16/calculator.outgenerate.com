'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Camera, Clock, Users, Image, Package, Map, Heart } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

const WeddingPhotographyLogic = () => {
  const [hours, setHours] = useState(8);
  const [guests, setGuests] = useState(100);
  const [numberOfPhotos, setNumberOfPhotos] = useState(400);
  const [addons, setAddons] = useState({
    engagement: false,
    secondPhotographer: false,
    album: false,
    prints: false,
    drone: false,
    travelFee: false
  });

  // Base pricing configuration
  const pricing = {
    baseRate: 250, // per hour
    engagementSession: 500,
    secondPhotographer: 75, // per hour
    album: 800,
    prints: 400,
    drone: 400,
    travelFee: 200,
    photoEditingPerHour: 50
  };

  // Calculate number of edited photos based on hours and guests
  const calculateEditedPhotos = () => {
    const basePhotos = hours * 50;
    const guestFactor = Math.floor(guests / 50) * 25;
    return basePhotos + guestFactor;
  };

  // Calculate total price
  const calculateTotal = () => {
    let total = hours * pricing.baseRate;
    
    if (addons.engagement) total += pricing.engagementSession;
    if (addons.secondPhotographer) total += hours * pricing.secondPhotographer;
    if (addons.album) total += pricing.album;
    if (addons.prints) total += pricing.prints;
    if (addons.drone) total += pricing.drone;
    if (addons.travelFee) total += pricing.travelFee;
    
    // Add editing time cost
    const editingHours = Math.ceil(calculateEditedPhotos() / 50);
    total += editingHours * pricing.photoEditingPerHour;

    return total;
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="border-2 border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Heart className="text-pink-500" />
            Wedding Photography Calculator
          </CardTitle>
          <CardDescription>
            Calculate your wedding photography package based on your specific needs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Coverage Hours */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="text-slate-500" />
                <h3 className="font-medium">Coverage Hours</h3>
              </div>
              <span className="font-semibold">{hours} hours</span>
            </div>
            <Slider
              value={[hours]}
              onValueChange={(value) => setHours(value[0])}
              max={12}
              min={4}
              step={1}
              className="w-full"
            />
          </div>

          {/* Guest Count */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="text-slate-500" />
                <h3 className="font-medium">Expected Guests</h3>
              </div>
              <span className="font-semibold">{guests} guests</span>
            </div>
            <Slider
              value={[guests]}
              onValueChange={(value) => setGuests(value[0])}
              max={300}
              min={50}
              step={10}
              className="w-full"
            />
          </div>

          {/* Add-ons */}
          <div className="space-y-4">
            <h3 className="font-medium flex items-center gap-2">
              <Package className="text-slate-500" />
              Additional Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries({
                engagement: ['Engagement Session', pricing.engagementSession],
                secondPhotographer: ['Second Photographer', `${pricing.secondPhotographer}/hr`],
                album: ['Wedding Album', pricing.album],
                prints: ['Print Package', pricing.prints],
                drone: ['Drone Coverage', pricing.drone],
                travelFee: ['Travel Fee', pricing.travelFee]
              }).map(([key, [label, price]]) => (
                <div key={key} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="space-y-1">
                    <h4 className="font-medium">{label}</h4>
                    <p className="text-sm text-slate-500">+{formatCurrency(price)}</p>
                  </div>
                  <Switch
                    checked={addons[key]}
                    onCheckedChange={(checked) => 
                      setAddons(prev => ({ ...prev, [key]: checked }))
                    }
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <Card className="bg-slate-50">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Total Investment</h3>
                  <span className="text-2xl font-bold text-pink-500">
                    {formatCurrency(calculateTotal())}
                  </span>
                </div>

                <Alert>
                  <AlertDescription>
                    <div className="space-y-2">
                      <p className="font-medium">Package Includes:</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>{hours} hours of coverage</li>
                        <li>All edited high-resolution images ({calculateEditedPhotos()} estimated photos)</li>
                        <li>Online gallery with digital downloads</li>
                        <li>Personal printing rights</li>
                        {addons.engagement && <li>Engagement photo session</li>}
                        {addons.secondPhotographer && <li>Second photographer coverage</li>}
                        {addons.album && <li>Premium wedding album</li>}
                        {addons.prints && <li>Print package</li>}
                        {addons.drone && <li>Drone aerial coverage</li>}
                      </ul>
                    </div>
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeddingPhotographyLogic;