import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tent,
  Calendar,
  Users,
  Lightbulb,
  CloudRain,
  DollarSign,
  CheckCircle2,
  AlertTriangle,
  Heart,
  PartyPopper
} from 'lucide-react';

const InfoSection = ({ 
  icon: Icon, 
  title, 
  description, 
  children 
}: { 
  icon: React.ElementType;
  title: string;
  description: string;
  children: React.ReactNode;
}) => (
  <Card className="mb-6">
    <CardHeader>
      <div className="flex items-center gap-2">
        <Icon className="w-6 h-6 text-rose-600" />
        <CardTitle className="text-xl text-rose-800">{title}</CardTitle>
      </div>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="prose prose-rose max-w-none">
      {children}
    </CardContent>
  </Card>
);

const WeddingTentInfo = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-rose-800 mb-2 flex items-center justify-center gap-2">
          <Heart className="w-8 h-8" />
          Wedding Tent Guide
        </h1>
        <p className="text-rose-600">Everything you need to know about planning your tented wedding celebration</p>
      </div>

      <InfoSection
        icon={Tent}
        title="Types of Wedding Tents"
        description="Understanding different tent styles and their best uses"
      >
        <div className="space-y-4">
          <h3 className="font-semibold">Pole Tents</h3>
          <p>Classic and elegant, pole tents are supported by center poles and side poles. They feature peaked tops and require staking into grass or soft ground.</p>
          <ul>
            <li>Best for: Grass venues and outdoor spaces</li>
            <li>Distinctive peaked ceiling creates dramatic height</li>
            <li>Most cost-effective option for large spaces</li>
            <li>Requires proper ground conditions for staking</li>
          </ul>

          <h3 className="font-semibold">Frame Tents</h3>
          <p>Versatile and freestanding, frame tents can be set up on any surface and don't require center poles.</p>
          <ul>
            <li>Can be installed on any surface</li>
            <li>Unobstructed interior space</li>
            <li>More flexibility in layout design</li>
            <li>Ideal for concrete or paved areas</li>
          </ul>

          <h3 className="font-semibold">Clear Top Tents</h3>
          <p>Perfect for starlit evenings and natural light, clear top tents offer a unique outdoor-indoor experience.</p>
          <ul>
            <li>Beautiful for daytime and evening events</li>
            <li>Great for nature-focused venues</li>
            <li>Can be heated and cooled effectively</li>
            <li>Premium option for sophisticated events</li>
          </ul>

          <h3 className="font-semibold">High Peak Tents</h3>
          <p>Also known as marquee tents, these create an elegant, sophisticated atmosphere with their dramatic peaks.</p>
          <ul>
            <li>Elegant and upscale appearance</li>
            <li>Great for small to medium gatherings</li>
            <li>Can be joined together for larger spaces</li>
            <li>Popular for luxury weddings</li>
          </ul>
        </div>
      </InfoSection>

      <InfoSection
        icon={Calendar}
        title="Seasonal Considerations"
        description="How different seasons affect your tented wedding planning"
      >
        <div className="space-y-4">
          <h3 className="font-semibold">Spring (March-May)</h3>
          <ul>
            <li>Consider flooring for wet ground conditions</li>
            <li>Plan for both heating and cooling options</li>
            <li>Include sidewall options for wind and rain</li>
            <li>Better pricing than peak summer months</li>
          </ul>

          <h3 className="font-semibold">Summer (June-August)</h3>
          <ul>
            <li>Peak wedding season - book well in advance</li>
            <li>Cooling systems are essential</li>
            <li>Consider clear tops for evening events only</li>
            <li>Plan for higher peak season pricing</li>
          </ul>

          <h3 className="font-semibold">Fall (September-November)</h3>
          <ul>
            <li>Popular for outdoor weddings</li>
            <li>Temperature control may be needed</li>
            <li>Beautiful natural backdrop</li>
            <li>Consider earlier sunset times</li>
          </ul>

          <h3 className="font-semibold">Winter (December-February)</h3>
          <ul>
            <li>Requires substantial heating</li>
            <li>Snow load considerations for tent structure</li>
            <li>Higher utility costs</li>
            <li>Magical atmosphere possibilities</li>
          </ul>
        </div>
      </InfoSection>

      <InfoSection
        icon={Users}
        title="Space Planning"
        description="How to determine the right tent size for your guest count"
      >
        <div className="space-y-4">
          <h3 className="font-semibold">Space Requirements Per Person</h3>
          <ul>
            <li>Seated dinner: 15-20 sq ft per person</li>
            <li>Cocktail style: 8-10 sq ft per person</li>
            <li>Ceremony seating: 8 sq ft per person</li>
            <li>Buffet line: Add 100 sq ft per 100 guests</li>
          </ul>

          <h3 className="font-semibold">Additional Space Considerations</h3>
          <ul>
            <li>Dance floor: 2-4 sq ft per person</li>
            <li>Band or DJ area: 200-400 sq ft</li>
            <li>Bar area: 100-200 sq ft</li>
            <li>Buffet tables: 100 sq ft per 100 guests</li>
          </ul>
        </div>
      </InfoSection>

      <InfoSection
        icon={Lightbulb}
        title="Lighting and Decor"
        description="Creating the perfect ambiance for your celebration"
      >
        <div className="space-y-4">
          <h3 className="font-semibold">Popular Lighting Options</h3>
          <ul>
            <li>String lights or bistro lighting</li>
            <li>Chandeliers and pendant lights</li>
            <li>LED uplighting</li>
            <li>Spotlights for focal points</li>
            <li>Paper lanterns</li>
          </ul>

          <h3 className="font-semibold">Tent Liners and Draping</h3>
          <p>Transform your tent with fabric treatments that create an elegant indoor feel:</p>
          <ul>
            <li>Full tent liner for a finished look</li>
            <li>Partial draping for accent areas</li>
            <li>Swags and valances</li>
            <li>Backdrop draping for ceremony area</li>
          </ul>
        </div>
      </InfoSection>

      <InfoSection
        icon={CloudRain}
        title="Weather Considerations"
        description="Preparing for any weather scenario"
      >
        <div className="space-y-4">
          <h3 className="font-semibold">Essential Weather Planning</h3>
          <ul>
            <li>Book sidewalls for wind and rain protection</li>
            <li>Consider flooring for wet conditions</li>
            <li>Have a climate control plan</li>
            <li>Ensure proper drainage around tent</li>
          </ul>

          <h3 className="font-semibold">Backup Plans</h3>
          <ul>
            <li>Additional covered walkways</li>
            <li>Umbrellas for guests</li>
            <li>Indoor backup location if possible</li>
            <li>Weather monitoring leading up to event</li>
          </ul>
        </div>
      </InfoSection>

      <InfoSection
        icon={DollarSign}
        title="Budget Planning"
        description="Understanding the costs involved in a tented wedding"
      >
        <div className="space-y-4">
          <h3 className="font-semibold">Basic Tent Costs</h3>
          <ul>
            <li>Small weddings (up to 100 guests): $2,000-$5,000</li>
            <li>Medium weddings (100-200 guests): $5,000-$10,000</li>
            <li>Large weddings (200+ guests): $10,000-$20,000+</li>
          </ul>

          <h3 className="font-semibold">Additional Costs to Consider</h3>
          <ul>
            <li>Flooring: $4-8 per square foot</li>
            <li>Lighting: $1,000-3,000</li>
            <li>Climate control: $1,000-4,000</li>
            <li>Generator rental: $500-1,500</li>
            <li>Setup and teardown labor</li>
          </ul>
        </div>
      </InfoSection>

      <InfoSection
        icon={CheckCircle2}
        title="Planning Timeline"
        description="Key deadlines and planning milestones"
      >
        <div className="space-y-4">
          <h3 className="font-semibold">12+ Months Before</h3>
          <ul>
            <li>Research tent companies and options</li>
            <li>Book tent rental for popular dates</li>
            <li>Secure venue location</li>
          </ul>

          <h3 className="font-semibold">6 Months Before</h3>
          <ul>
            <li>Finalize tent size and style</li>
            <li>Book additional rentals</li>
            <li>Plan layout and flow</li>
          </ul>

          <h3 className="font-semibold">1 Month Before</h3>
          <ul>
            <li>Confirm all details with rental company</li>
            <li>Review weather contingency plans</li>
            <li>Finalize setup and teardown schedule</li>
          </ul>
        </div>
      </InfoSection>

      <InfoSection
        icon={AlertTriangle}
        title="Common Mistakes to Avoid"
        description="Learn from others' experiences"
      >
        <div className="space-y-4">
          <ul>
            <li>Underestimating space needs</li>
            <li>Forgetting about climate control</li>
            <li>Not having a weather backup plan</li>
            <li>Overlooking power requirements</li>
            <li>Insufficient lighting planning</li>
            <li>Not considering bathroom facilities</li>
            <li>Forgetting about parking space</li>
            <li>Inadequate timeline for setup/teardown</li>
          </ul>
        </div>
      </InfoSection>

      <InfoSection
        icon={PartyPopper}
        title="Making It Special"
        description="Tips for creating an unforgettable tented celebration"
      >
        <div className="space-y-4">
          <h3 className="font-semibold">Personal Touches</h3>
          <ul>
            <li>Custom entrance designs</li>
            <li>Themed lighting schemes</li>
            <li>Creative floor plans</li>
            <li>Unique ceiling treatments</li>
          </ul>

          <h3 className="font-semibold">Comfort Considerations</h3>
          <ul>
            <li>Lounge areas for guests</li>
            <li>Proper ventilation</li>
            <li>Clear signage and wayfinding</li>
            <li>Accessible pathways</li>
          </ul>
        </div>
      </InfoSection>
    </div>
  );
};

export default WeddingTentInfo;