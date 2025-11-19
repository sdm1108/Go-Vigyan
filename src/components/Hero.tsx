import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-1.jpg";
import womenEmpowerment from "@/assets/women-empowerment.jpg";
import sustainableEcosystem from "@/assets/hero-3.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroImage,
      title: "Commercial Gaushala",
      highlight: "Revolution",
      description:
        "A dream for every person who deserves food that heals instead of harms. Building self-reliant villages through sustainable cattle-based ecosystems.",
    },
    {
      image: womenEmpowerment,
      title: "Empowering Rural",
      highlight: "Women",
      description:
        "Creating dignified employment for 60-70% rural women, fostering empowerment and self-reliance in every community.",
    },
    {
      image: sustainableEcosystem,
      title: "Complete Ecosystem",
      highlight: "For Villages",
      description:
        "Reconnecting cows, humans, and nature into a sustainable life cycle. Generating 1,000 units of clean energy daily and prosperity for rural",
    },
  ];

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* HERO IMAGE */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* CENTERED CONTENT */}
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl mx-auto animate-fade-in-up flex flex-col items-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {slide.title}{" "}
                <span className="text-gradient block">{slide.highlight}</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl">
                {slide.description}
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="
                    bg-[#EADCCD] 
                    text-[#5A4A42] 
                    hover:bg-[#E3D3C2] 
                    hover:shadow-md 
                    transition-all 
                    duration-300 
                    text-lg 
                    px-8
                    rounded-full
                  "
                >
                  Support Our Mission
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="
                    border-[#EADCCD] 
                    text-black 
                    hover:bg-[#EADCCD] 
                    hover:text-[#5A4A42]
                    hover:shadow-md
                    transition-all 
                    duration-300
                    text-lg 
                    px-8
                    rounded-full
                  "
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* ARROWS */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* INDICATORS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-12 bg-secondary" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
