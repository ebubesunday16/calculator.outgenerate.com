'use client'

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calendar, Clock, MapPin, Users, Calendar as CalendarIcon, AlertCircle } from 'lucide-react';

const WeddingRSVPLogic = () => {
  const [weddingDate, setWeddingDate] = useState('');
  const [isDestination, setIsDestination] = useState(false);
  const [dates, setDates] = useState(null);
  
  const calculateDates = () => {
    if (!weddingDate) return;
    
    const wedding = new Date(weddingDate);
    const today = new Date();
    
    // Calculate all important dates
    const dates = {
      wedding: wedding,
      invitationDate: new Date(wedding),
      rsvpDeadline: new Date(wedding),
      followUpDate: new Date(wedding),
      finalizeDate: new Date(wedding),
      lastCallDate: new Date(wedding)
    };
    
    // Set invitation send date (6-8 weeks before for regular, 10-12 for destination)
    dates.invitationDate.setDate(
      wedding.getDate() - (isDestination ? 84 : 56)
    );
    
    // Set RSVP deadline (4 weeks before)
    dates.rsvpDeadline.setDate(wedding.getDate() - 28);
    
    // Set follow-up date (3 weeks before)
    dates.followUpDate.setDate(wedding.getDate() - 21);
    
    // Set finalize date (2 weeks before)
    dates.finalizeDate.setDate(wedding.getDate() - 14);
    
    // Set last call date (1 week before)
    dates.lastCallDate.setDate(wedding.getDate() - 7);
    
    setDates(dates);
  };
  
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarIcon className="w-6 h-6" />
            Wedding RSVP Timeline Calculator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="wedding-date">Wedding Date</Label>
              <Input
                id="wedding-date"
                type="date"
                value={weddingDate}
                onChange={(e) => setWeddingDate(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="destination"
                checked={isDestination}
                onChange={(e) => setIsDestination(e.target.checked)}
                className="w-4 h-4"
              />
              <Label htmlFor="destination" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                This is a destination wedding
              </Label>
            </div>
            
            <Button onClick={calculateDates} className="w-full">
              Calculate Timeline
            </Button>
          </div>
        </CardContent>
      </Card>

      {dates && (
        <div className="space-y-4">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Your wedding is on {formatDate(dates.wedding)}. Here's your recommended RSVP timeline:
            </AlertDescription>
          </Alert>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <TimelineItem
                  icon={<Calendar className="w-5 h-5" />}
                  date={formatDate(dates.invitationDate)}
                  title="Send Wedding Invitations"
                  description={`Send out your invitations ${isDestination ? '10-12' : '6-8'} weeks before the wedding. This gives guests enough time to make arrangements${isDestination ? ', especially for travel and accommodations' : ''}.`}
                />
                
                <TimelineItem
                  icon={<Clock className="w-5 h-5" />}
                  date={formatDate(dates.rsvpDeadline)}
                  title="RSVP Deadline"
                  description="Set your RSVP deadline 4 weeks before the wedding. This is the sweet spot that gives you enough time to finalize details while not being too far in advance that guests forget."
                />
                
                <TimelineItem
                  icon={<Users className="w-5 h-5" />}
                  date={formatDate(dates.followUpDate)}
                  title="Follow Up with Non-Respondents"
                  description="Start following up with guests who haven't RSVP'd about a week after the deadline. A friendly phone call or text message usually does the trick."
                />
                
                <TimelineItem
                  icon={<Calendar className="w-5 h-5" />}
                  date={formatDate(dates.finalizeDate)}
                  title="Finalize Numbers with Vendors"
                  description="Provide final guest count to your caterer, venue, and other vendors. Start working on seating arrangements and place cards."
                />
                
                <TimelineItem
                  icon={<AlertCircle className="w-5 h-5" />}
                  date={formatDate(dates.lastCallDate)}
                  title="Last Call for RSVPs"
                  description="Final deadline for any remaining RSVPs. After this point, you'll need to assume non-respondents aren't attending for planning purposes."
                />
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

const TimelineItem = ({ icon, date, title, description }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <div className="font-medium text-sm text-primary">{date}</div>
      <div className="font-semibold mb-1">{title}</div>
      <div className="text-sm text-muted-foreground">{description}</div>
    </div>
  </div>
);

export default WeddingRSVPLogic;