import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1600&h=600&fit=crop',
    titleKey: 'hero.title',
    subtitleKey: 'hero.subtitle'
  },
  {
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1600&h=600&fit=crop',
    titleKey: 'hero.title',
    subtitleKey: 'hero.subtitle'
  },
  {
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&h=600&fit=crop',
    titleKey: 'hero.title',
    subtitleKey: 'hero.subtitle'
  }
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                {t(slide.titleKey)}
              </h1>
              <p className="text-lg md:text-2xl mb-8 animate-fade-in">
                {t(slide.subtitleKey)}
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
