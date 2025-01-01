import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Gift, Heart, Info, Clock, Gem } from 'lucide-react';

const WeddingAnniversaryInfo = () => {
  const sections = [
    {
      icon: <Info className="h-6 w-6 text-pink-500" />,
      title: "How Anniversary Celebrations Work",
      content: `Wedding anniversaries are celebrated yearly to commemorate the day of marriage. Each year 
      is associated with specific materials and symbols, both traditional and modern. These symbols 
      represent the strength and growth of the marriage bond over time. The tradition dates back to 
      Medieval Germany, where husbands would give their wives silver wreaths for their 25th anniversary 
      and golden wreaths for their 50th.`
    },
    {
      icon: <Gift className="h-6 w-6 text-pink-500" />,
      title: "Traditional vs Modern Gifts",
      content: `The traditional anniversary gifts start with paper for the first year, symbolizing the 
      blank page on which you write your lives together. Modern gift alternatives were introduced in 
      1937 to reflect contemporary lifestyles. For example, while the traditional first-anniversary 
      gift is paper, the modern equivalent is a clock, representing the time you'll spend together.`
    },
    {
      icon: <Gem className="h-6 w-6 text-pink-500" />,
      title: "Symbols and Their Meanings",
      content: `Each anniversary year has associated flowers and gemstones. These symbols carry deep 
      meaning - for instance, the carnation for the first anniversary represents pure love and 
      fascination, while the ruby for the 40th anniversary symbolizes passion and prosperity. 
      These symbols help couples celebrate their journey with meaningful gifts.`
    },
    {
      icon: <Clock className="h-6 w-6 text-pink-500" />,
      title: "Major Milestones",
      content: `Certain anniversaries are considered major milestones: Silver (25th), Pearl (30th), 
      Ruby (40th), Gold (50th), and Diamond (60th). These milestones are particularly special as they 
      represent significant achievements in marriage. Each milestone has its own unique symbolism and 
      traditional celebrations associated with it.`
    },
    {
      icon: <Calendar className="h-6 w-6 text-pink-500" />,
      title: "Anniversary Celebrations Worldwide",
      content: `Different cultures celebrate anniversaries in unique ways. In English-speaking countries, 
      milestone anniversaries often involve renewing vows. In Germany, couples celebrate Crowned 
      Wedding Anniversaries. Japanese couples focus on specific years like 13, 25, and 50. These 
      diverse traditions show how universal the concept of celebrating lasting love is.`
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-pink-600 flex items-center justify-center gap-2">
          <Heart className="text-pink-500" />
          Understanding Wedding Anniversaries
          <Heart className="text-pink-500" />
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {sections.map((section, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-pink-600">
                {section.icon}
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WeddingAnniversaryInfo;