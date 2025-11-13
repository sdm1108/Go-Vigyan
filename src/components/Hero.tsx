import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90 z-0" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to Our Organization
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Dedicated to preserving traditions and promoting sustainable practices for a better future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold shadow-hover transition-all duration-300 hover:scale-105 group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm font-bold transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-accent/20 rounded-full blur-2xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
    </section>
  );
};

export default Hero;
