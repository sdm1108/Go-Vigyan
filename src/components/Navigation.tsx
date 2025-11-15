import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav
      className={`fixed top-[30px] left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
  <Link to="/" className="flex items-center gap-3">        
  <div
    className={`h-12 w-12 rounded-full flex items-center justify-center ${
      scrolled ? "bg-white" : "bg-white"
    }`}
  >
    <img
      src="/assets/logo.jpg"
      alt="Logo"
      className="h-10 w-10"
    />
  </div>

  <span
    className={`font-bold text-lg hidden md:block ${
      scrolled ? "text-black" : "text-white"
    }`}
  >
    Bijendra Gaushala Welfare Association
  </span>
</Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">

            <Link
              to="/"
              className={`transition-colors font-medium ${
                scrolled ? "text-black hover:text-accent" : "text-white hover:text-accent"
              }`}
            >
              {t('nav.home')}
            </Link>

            {/* About Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`bg-transparent ${
                      scrolled
                        ? "text-black hover:bg-black/5"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {t('nav.about')}
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <ul className="w-64 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/about" className="block p-3 hover:bg-muted rounded-md">
                            {t('nav.aboutOrg')}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/indian-cow" className="block p-3 hover:bg-muted rounded-md">
                            {t('nav.indianCow')}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/importance" className="block p-3 hover:bg-muted rounded-md">
                            {t('nav.importance')}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/breeds" className="block p-3 hover:bg-muted rounded-md">
                            {t('nav.breeds')}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Training Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`bg-transparent ${
                      scrolled
                        ? "text-black hover:bg-black/5"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {t('nav.training')}
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <ul className="w-64 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/training-schedule" className="block p-3 hover:bg-muted rounded-md">
                            {t('nav.schedule')}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/cow-economy" className="block p-3 hover:bg-muted rounded-md">
                            {t('nav.economy')}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/organic-farming" className="block p-3 hover:bg-muted rounded-md">
                            {t('nav.organic')}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>

            {/* Single Links */}
            <Link
              to="/ayurved"
              className={`font-medium ${
                scrolled ? "text-black hover:text-accent" : "text-white hover:text-accent"
              }`}
            >
              {t('nav.ayurved')}
            </Link>

            <Link
              to="/shop"
              className={`font-medium ${
                scrolled ? "text-black hover:text-accent" : "text-white hover:text-accent"
              }`}
            >
              {t('nav.shop')}
            </Link>

            {/* Language Toggle */}
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className={`border ${
                scrolled
                  ? "border-black text-black hover:bg-black hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-black"
              }`}
            >
              {i18n.language === 'en' ? 'हिन्दी' : 'English'}
            </Button>

            {/* Donate */}
            <Button
              asChild
             className="mt-4 rounded-full px-8 bg-[#FCE7D8] text-[#6B4F3F] hover:bg-[#F8D9C4]"
            >
              <Link to="/donate">{t('nav.donate')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className={`h-6 w-6 ${scrolled ? "text-black" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? "text-black" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary-foreground/20 bg-white text-black">
            <div className="flex flex-col gap-3">
              <Link to="/" className="py-2">{t('nav.home')}</Link>
              <Link to="/about" className="py-2">{t('nav.about')}</Link>
              <Link to="/training-schedule" className="py-2">{t('nav.training')}</Link>
              <Link to="/ayurved" className="py-2">{t('nav.ayurved')}</Link>
              <Link to="/shop" className="py-2">{t('nav.shop')}</Link>

              <Button onClick={toggleLanguage} variant="outline" size="sm" className="w-fit">
                {i18n.language === 'en' ? 'हिन्दी' : 'English'}
              </Button>

              <Button asChild className="bg-accent hover:bg-accent/90 w-fit">
                <Link to="/donate">{t('nav.donate')}</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
