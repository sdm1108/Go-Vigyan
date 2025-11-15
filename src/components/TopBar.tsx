import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export const TopBar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between py-2 text-sm">

          {/* Left side */}
          <div className="flex flex-wrap items-center gap-6">

            {/* Phone */}
            <div className="flex items-center gap-2">
              <Phone className={`h-4 w-4 ${scrolled ? "text-primary" : "text-white"}`} />
              <span className="font-medium">{t('contact.helpline')}:</span>
              <a
                href="tel:+07122772273"
                className={`transition-colors ${
                  scrolled ? "hover:text-primary" : "hover:text-primary"
                }`}
              >
                +0712-2772273, 2734182
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <Mail className={`h-4 w-4 ${scrolled ? "text-primary" : "text-white"}`} />
              <span className="font-medium">{t('contact.email')}:</span>
              <a
                href="mailto:info@govigyan.com"
                className={`transition-colors ${
                  scrolled ? "hover:text-primary" : "hover:text-primary"
                }`}
              >
                info@govigyan.com
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-2">
            <MapPin className={`h-4 w-4 ${scrolled ? "text-primary" : "text-white"}`} />
            <span className="text-xs">{t('contact.address')}</span>
          </div>

        </div>
      </div>
    </div>
  );
};
