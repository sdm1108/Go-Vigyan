import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  { 
    id: 1, 
    image: hero1, 
    alt: "Traditional Indian cow-based farming",
    title: "Preserving Ancient Wisdom",
    subtitle: "Cow-Based Farming for Sustainable Future"
  },
  { 
    id: 2, 
    image: hero2, 
    alt: "Organic farming practices",
    title: "Nature's Way of Living",
    subtitle: "Organic Solutions for Modern Agriculture"
  },
  { 
    id: 3, 
    image: hero3, 
    alt: "Sustainable agriculture",
    title: "Building Better Tomorrow",
    subtitle: "Sustainable Agriculture & Rural Development"
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen pt-32 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Carousel Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={slide.image}
                alt={slide.alt}
                className={`w-full h-full object-cover transition-transform duration-\[7000ms\] ${
                 index === currentSlide ? "scale-110" : "scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            </div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-700 ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12 absolute"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm text-primary px-4 py-2 rounded-full mb-6 border border-primary/20 animate-fade-in">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-semibold">Welcome to GO-Vigyan</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
                {slide.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in delay-200">
                {slide.subtitle}
              </p>
              
              <div className="flex flex-wrap gap-4 animate-fade-in delay-300">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Join Our Mission
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-background/20 hover:bg-background/40 backdrop-blur-md text-foreground p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg border border-border/20 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-background/20 hover:bg-background/40 backdrop-blur-md text-foreground p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg border border-border/20 group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "bg-primary w-12 shadow-lg shadow-primary/50"
                : "bg-muted-foreground/40 w-8 hover:bg-muted-foreground/60 hover:w-10"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent z-[5]" />
    </section>
  );
};

export default HeroCarousel;
