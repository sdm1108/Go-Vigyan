import { Target, Eye, Lightbulb, TrendingUp } from "lucide-react";
import productsImage from "@/assets/products.jpg";
import modernGaushala from "@/assets/modern-gaushala.jpg";

const Mission = () => {
  return (
    <section
      id="mission"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* ⭐ Animated Gradient Background ⭐ */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 animate-gradient" />

      <div className="container mx-auto px-4">
        
        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">Our Mission</h2>
            </div>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              To build self-reliant villages through sustainable cattle-based ecosystems 
              that provide pure organic food, dignified employment, and prosperity to 
              rural communities across India.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">
                  Create 60-70% employment opportunities for rural women
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">
                  Produce pure organic dairy products from indigenous cow breeds
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">
                  Generate sustainable energy and organic fertilizers
                </p>
              </div>
            </div>
          </div>

          <div className="animate-scale-in">
            <img
              src={productsImage}
              alt="Organic Products"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-scale-in order-2 md:order-1">
            <img
              src={modernGaushala}
              alt="Modern Gaushala"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="animate-fade-in-up order-1 md:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">Our Vision</h2>
            </div>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              A dream for every person who deserves food that heals instead of harms. 
              We envision a network of 1000+ commercial gaushalas transforming rural 
              India into prosperous, self-sufficient communities.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary/10 p-6 rounded-xl">
                <Lightbulb className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-2xl mb-1">1000+</h3>
                <p className="text-sm text-muted-foreground">Clean Energy Daily</p>
              </div>

              <div className="bg-secondary/10 p-6 rounded-xl">
                <TrendingUp className="w-8 h-8 text-secondary-foreground mb-3" />
                <h3 className="font-bold text-2xl mb-1">70-140</h3>
                <p className="text-sm text-muted-foreground">Jobs Per Gaushala</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
