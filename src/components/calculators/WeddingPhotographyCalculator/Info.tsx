import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Camera, 
  Clock, 
  Calendar,
  MessageCircle,
  Palette,
  Camera as CameraIcon,
  Download,
  HeartHandshake,
  Rocket,
  Bookmark
} from 'lucide-react';

const WeddingPhotographyInfo = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* How It Works Section */}
      <Card className="border-2 border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Rocket className="text-pink-500" />
            How It Works
          </CardTitle>
          <CardDescription>
            Your journey from inquiry to cherished memories
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          {[
            {
              title: "1. Initial Consultation",
              icon: <MessageCircle className="text-pink-500" />,
              content: `Begin with a personalized consultation where we'll discuss your vision, style preferences, and wedding details. 
              This helps us understand your unique story and craft a package that perfectly matches your needs. We'll review 
              portfolio samples and discuss specific shots you'd like to capture.`
            },
            {
              title: "2. Package Customization",
              icon: <Palette className="text-pink-500" />,
              content: `Using our pricing calculator, we'll customize a package that fits your budget and requirements. 
              We'll discuss additional services like engagement sessions, second photographers, or drone coverage. 
              Every element can be tailored to ensure your perfect day is perfectly captured.`
            },
            {
              title: "3. Booking & Planning",
              icon: <Calendar className="text-pink-500" />,
              content: `Once you're happy with your package, we'll secure your date with a deposit and signed contract. 
              We'll then begin detailed planning, including creating a wedding day timeline, shot list, and identifying 
              key family groupings for formal photos. Regular check-ins ensure everything stays on track.`
            },
            {
              title: "4. Your Wedding Day",
              icon: <Camera className="text-pink-500" />,
              content: `On your wedding day, we arrive early to capture preparation moments and stay through your selected 
              coverage hours. We work discretely yet thoroughly, ensuring every special moment is captured while maintaining 
              the natural flow of your day. Our experienced team knows exactly when and where to be for key moments.`
            },
            {
              title: "5. Post-Production",
              icon: <Download className="text-pink-500" />,
              content: `After your wedding, we carefully select and edit your images to ensure they perfectly capture the 
              emotion and beauty of your day. You'll receive a sneak peek within 48 hours, and your full gallery will be 
              ready within 6-8 weeks. All images are professionally edited and delivered in both high-resolution and 
              web-optimized formats.`
            }
          ].map((step, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center gap-2">
                {step.icon}
                <h3 className="font-semibold text-lg">{step.title}</h3>
              </div>
              <p className="text-slate-600 ml-8">{step.content}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* What To Expect Section */}
      <Card className="border-2 border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <HeartHandshake className="text-pink-500" />
            What To Expect
          </CardTitle>
          <CardDescription>
            Our commitment to capturing your special day
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Professional Experience",
                content: `Benefit from years of wedding photography expertise, including backup equipment, 
                insurance, and the ability to handle any lighting situation. We're prepared for everything 
                from intimate elopements to grand celebrations.`
              },
              {
                title: "Artistic Vision",
                content: `Each photo is thoughtfully composed to tell your story. We blend photojournalistic 
                capture of authentic moments with artistic portraits that showcase your love. Our style emphasizes 
                natural light and genuine emotions.`
              },
              {
                title: "Complete Coverage",
                content: `From getting ready to the last dance, we ensure comprehensive coverage of your day. 
                We capture both the big moments and the subtle details that make your wedding unique. Multiple 
                angles ensure nothing is missed.`
              },
              {
                title: "Quick Turnaround",
                content: `Receive a curated selection of preview images within 48 hours of your wedding. Your 
                complete gallery includes hundreds of fully edited images, delivered within 6-8 weeks. Rush 
                delivery available upon request.`
              }
            ].map((item, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-lg space-y-2">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-slate-600">{item.content}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Investment Value Section */}
      <Card className="border-2 border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Bookmark className="text-pink-500" />
            Investment Value
          </CardTitle>
          <CardDescription>
            Understanding the value of professional wedding photography
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            {[
              {
                title: "Quality Equipment",
                content: `Professional-grade cameras, lenses, and lighting equipment ensure the highest 
                quality images in any condition. Multiple backup systems guarantee peace of mind.`
              },
              {
                title: "Expert Editing",
                content: `Every delivered image undergoes professional editing for color correction, 
                exposure adjustment, and subtle retouching. Our editing style emphasizes timeless, 
                natural-looking results that will look beautiful for generations.`
              },
              {
                title: "Time Investment",
                content: `Beyond the wedding day, we spend 20-30 hours on post-production, including 
                image selection, editing, gallery preparation, and album design. This attention to 
                detail ensures every image meets our high standards.`
              },
              {
                title: "Archive Management",
                content: `Your images are safely backed up in multiple locations. We maintain secure 
                archives of all wedding images, allowing you to request additional copies or prints 
                years after your wedding.`
              }
            ].map((item, index) => (
              <div key={index} className="border-l-4 border-pink-500 pl-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-slate-600">{item.content}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeddingPhotographyInfo;