import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-soft">
      {/* Top info bar */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-2 text-sm">
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <a href="tel:+07122772273" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">Helpline</span>
                <span className="font-medium">+0712-2772273, 2734182</span>
              </a>
              <a href="mailto:info@govigyan.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">Send email</span>
                <span className="font-medium">info@govigyan.com</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="hidden lg:inline">Kamdhenu Bhavan, Pt. Baccharaj Vyas Square, Chitar Oli, Mahal, Nagpur, India</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xl">GV</span>
              </div>
              <span className="text-white font-bold text-lg hidden sm:inline">Bijendra Gaushala Welfare Association</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <a href="#home" className="px-4 py-2 text-white hover:bg-white/10 transition-colors rounded">
                Home
              </a>
              <a href="#about" className="px-4 py-2 text-white hover:bg-white/10 transition-colors rounded">
                About
              </a>
              <a href="#training" className="px-4 py-2 text-white hover:bg-white/10 transition-colors rounded">
                Training
              </a>
              <a href="#ayurved" className="px-4 py-2 text-white hover:bg-white/10 transition-colors rounded">
                Cow Based Panchagavya Ayurved
              </a>
              <a href="#shop" className="px-4 py-2 text-white hover:bg-white/10 transition-colors rounded">
                Shop
              </a>
            </div>

            {/* Donate Button */}
            <Button 
              className="hidden lg:flex bg-accent text-accent-foreground hover:bg-accent/90 font-bold shadow-hover transition-all duration-300"
              size="lg"
            >
              🐄 Donate Now
            </Button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 space-y-2 animate-fade-in">
              <a href="#home" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors rounded">
                Home
              </a>
              <a href="#about" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors rounded">
                About
              </a>
              <a href="#training" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors rounded">
                Training
              </a>
              <a href="#ayurved" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors rounded">
                Cow Based Panchagavya Ayurved
              </a>
              <a href="#shop" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors rounded">
                Shop
              </a>
              <Button 
                className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90 font-bold"
              >
                🐄 Donate Now
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
