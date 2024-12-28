import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calendar, Clock,  CheckCircle2, PhoneCall, AlertCircle } from 'lucide-react';

const RSVPInfo = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6 p-4">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-primary" />
            <CardTitle><h2>How Wedding RSVPs Work</h2></CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">The Basics of Wedding RSVPs</h3>
            <p className="text-muted-foreground">
              RSVP stands for "Répondez s'il vous plaît," which means "please respond" in French. For weddings, 
              this system helps couples accurately plan their celebration by knowing exactly how many guests 
              will attend. Modern RSVPs can be collected through traditional mail-in cards or digital platforms, 
              giving guests convenient ways to respond.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Why RSVPs Matter</h3>
            <p className="text-muted-foreground">
              Accurate guest counts are crucial for multiple aspects of wedding planning, including:
              catering orders, seating arrangements, party favors, and venue setup. They also help
              manage the budget effectively by avoiding unnecessary expenses for non-attending guests.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-primary" />
            <CardTitle><h2>Perfect Timing for Wedding RSVPs</h2></CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Standard Timeline</h3>
            <p className="text-muted-foreground">
              For local weddings, send invitations 6-8 weeks before the wedding date. Set the RSVP 
              deadline 3-4 weeks before the wedding, giving guests enough time to respond while 
              leaving you adequate time for final planning.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Destination Wedding Considerations</h3>
            <p className="text-muted-foreground">
              For destination weddings, send invitations 10-12 weeks in advance. This extra time 
              allows guests to arrange travel, accommodations, and time off work. Set the RSVP 
              deadline 6-8 weeks before the wedding to accommodate complex travel planning.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-primary" />
            <CardTitle><h2>RSVP Best Practices</h2></CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Clear Communication</h3>
            <p className="text-muted-foreground">
              Include all essential information on RSVP cards: response deadline, number of seats 
              reserved, meal choices (if applicable), and any additional events like welcome 
              dinners or brunches. Make the response process as straightforward as possible.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Multiple Response Methods</h3>
            <p className="text-muted-foreground">
              Offer both traditional and digital RSVP options. While some guests prefer mail-in 
              cards, others appreciate the convenience of responding through a wedding website. 
              This flexibility typically results in faster response rates.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <PhoneCall className="w-6 h-6 text-primary" />
            <CardTitle><h2>Managing RSVP Responses</h2></CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Tracking Systems</h3>
            <p className="text-muted-foreground">
              Maintain a detailed spreadsheet or use a wedding planning app to track responses. 
              Record not just attendance, but also meal choices, plus-ones, and any dietary 
              restrictions. This organization will prove invaluable during final planning stages.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Following Up</h3>
            <p className="text-muted-foreground">
              Start following up with non-respondents one week after the RSVP deadline. A polite 
              phone call, text, or email is appropriate. Remember to express enthusiasm about their 
              potential attendance while emphasizing the importance of a timely response.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-primary" />
            <CardTitle><h2>Common RSVP Challenges and Solutions</h2></CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Late Responses</h3>
            <p className="text-muted-foreground">
              Set your RSVP deadline earlier than when you actually need final numbers. This buffer 
              allows time to track down late responses while still meeting vendor deadlines. Consider 
              adding a note about reply urgency on your wedding website.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Unexpected Plus-Ones</h3>
            <p className="text-muted-foreground">
              Clearly indicate on invitations exactly who is invited, including plus-ones. If guests 
              add unexpected names to their RSVP, address it promptly and politely, explaining any 
              limitations due to venue capacity or budget constraints.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Last-Minute Changes</h3>
            <p className="text-muted-foreground">
              Build some flexibility into your final numbers with vendors to accommodate last-minute 
              changes. Most caterers and venues understand that guest lists can fluctuate slightly 
              and will work with you to handle these adjustments.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RSVPInfo;