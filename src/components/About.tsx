import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const features = [
    "Traditional knowledge preservation",
    "Sustainable practices promotion",
    "Community empowerment programs",
    "Expert training and certification",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-primary overflow-hidden shadow-hover">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-6xl font-bold mb-4">10+</div>
                  <div className="text-2xl">Years of Excellence</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Our Organization
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are dedicated to preserving traditional wisdom while embracing modern sustainable practices. 
              Our mission is to empower communities through education, training, and collaborative programs 
              that promote environmental stewardship and cultural heritage.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over a decade of experience, we have successfully trained thousands of individuals 
              and supported numerous communities in adopting sustainable and traditional practices.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-primary text-white font-bold shadow-hover transition-all duration-300 hover:scale-105"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
