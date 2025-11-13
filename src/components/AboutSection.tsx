import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-primary rounded-lg shadow-hover overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold">
                🐄
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Go-Vigyan Anusandhan Kendra
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Go Vigyan Anusandhan Kendra (GVAK) is a Non-Government Organization on a mission to rekindle the age-old bond between humans and cows.
              Rooted in the rich heritage of Indian agriculture and traditional wisdom, our organization is dedicated to researching and promoting the multifaceted
              benefits of cows and their five essential products: milk, curds, ghee, urine, and dung – collectively known as Panchgavya.
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-hover transition-all duration-300 group"
            >
              Discover More
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="mt-20 bg-gradient-primary rounded-lg p-8 md:p-12 text-center text-white shadow-hover">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join us in rediscovering the vast potential of cows and their products to enhance lives and sustain the environment.
          </h3>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-bold transition-all duration-300"
          >
            Discover More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
