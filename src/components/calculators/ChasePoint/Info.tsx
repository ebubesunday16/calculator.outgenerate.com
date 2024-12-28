import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info } from 'lucide-react';

const ChasePointsMeta = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-6 mt-16">
      {/* Meta Description Section */}
      

      {/* Quick Value Reference */}
      <Alert className="bg-blue-50 border-blue-200">
        <Info className="h-4 w-4" />
        <AlertTitle>Current Point Values (Updated December 2024)</AlertTitle>
        <AlertDescription>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div>
              <h4 className="font-medium">Portal Redemption Values:</h4>
              <ul className="list-disc list-inside text-sm">
                <li>Sapphire Reserve®: 1.5¢ per point</li>
                <li>Sapphire Preferred®: 1.25¢ per point</li>
                <li>Other cards: 1¢ per point</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Best Transfer Values:</h4>
              <ul className="list-disc list-inside text-sm">
                <li>World of Hyatt: 2.2¢ per point</li>
                <li>Virgin Atlantic: 1.8¢ per point</li>
                <li>JetBlue/Southwest: 1.5¢ per point</li>
              </ul>
            </div>
          </div>
        </AlertDescription>
      </Alert>

      {/* Key Benefits */}
      <Card>
        <CardHeader>
          <CardTitle>Why Chase Ultimate Rewards® Points Are Valuable</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Flexibility</h3>
              <ul className="text-sm space-y-1">
                <li>• Transfer to 14+ travel partners</li>
                <li>• Book travel directly through Chase</li>
                <li>• Redeem for cash back if needed</li>
                <li>• No blackout dates when booking travel</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Transfer Partners</h3>
              <ul className="text-sm space-y-1">
                <li>• 1:1 transfer ratio to all partners</li>
                <li>• Instant transfers to most partners</li>
                <li>• Access to multiple airline alliances</li>
                <li>• Both hotel and airline options</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChasePointsMeta;