import { 
  Calculator, 
  Brain, 
  Code2, 
  Heart, 
  Sparkles,
  Target,
  Users,
  Coffee
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <Calculator className="h-16 w-16 text-primary animate-pulse" />
        </div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
          Calculating the Future, One Click at a Time
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We're obsessed with turning complex calculations into simple, elegant solutions.
        </p>
      </div>

      {/* Mission Statement */}
      <Card className="mb-16 bg-gradient-to-br from-background to-muted/50">
        <CardContent className="pt-6">
          <div className="flex items-start gap-6">
            <Brain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                In a world drowning in information, we believe in the power of precision. 
                Our calculators aren't just tools – they're your digital companions in making 
                informed decisions, whether you're planning a wedding, managing travel expenses, 
                or diving into scientific computations.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Value Props Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card className="transition-all hover:shadow-lg">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <Target className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">Precision Focused</h3>
                <p className="text-sm text-muted-foreground">
                  Every calculator is meticulously crafted to provide accurate, reliable results 
                  that you can count on for your decision-making.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-lg">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <Users className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">User-Centric Design</h3>
                <p className="text-sm text-muted-foreground">
                  We obsess over user experience, ensuring our tools are intuitive and 
                  accessible to everyone, from beginners to experts.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-lg">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">Diverse Solutions</h3>
                <p className="text-sm text-muted-foreground">
                  From wedding budgets to scientific equations, our growing collection of 
                  calculators covers a wide spectrum of needs.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-lg">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <Code2 className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">Modern Technology</h3>
                <p className="text-sm text-muted-foreground">
                  Built with cutting-edge web technologies to ensure fast, reliable, and 
                  secure calculations every time.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Story Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Coffee className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold">Our Story</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              It all started with a simple question: "Why are online calculators so... boring?" 
              We believed that calculation tools could be both powerful and pleasant to use.
            </p>
            <p className="text-muted-foreground">
              Today, we're proud to offer a comprehensive suite of calculators that help 
              thousands of people make better decisions daily. From creative professionals 
              calculating project fees to couples planning their dream weddings, our tools 
              are here to make complex calculations simple and even enjoyable.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg h-32" />
            <div className="bg-gradient-to-bl from-primary/20 to-purple-500/20 rounded-lg h-32" />
            <div className="bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-lg h-32" />
            <div className="bg-gradient-to-tl from-primary/20 to-purple-500/20 rounded-lg h-32" />
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <Card className="bg-gradient-to-r from-primary/10 to-purple-500/10">
        <CardContent className="pt-6">
          <div className="text-center">
            <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-3">Join Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              We're constantly adding new calculators and improving existing ones. Have a 
              suggestion? We'd love to hear from you. Our mission is to make calculations 
              accessible, accurate, and maybe even a little bit fun.
            </p>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-full transition-colors">
              Contact Us
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;