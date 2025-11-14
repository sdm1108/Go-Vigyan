import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
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

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-primary-foreground flex items-center justify-center">
              <span className="text-primary text-xl font-bold">GV</span>
            </div>
            <span className="font-bold text-lg hidden md:block"> Bijendra Gaushala Welfare Association</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/" className="hover:text-accent transition-colors font-medium">
              {t('nav.home')}
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-primary-foreground/10">
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

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-primary-foreground/10">
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

            <Link to="/ayurved" className="hover:text-accent transition-colors font-medium">
              {t('nav.ayurved')}
            </Link>
            <Link to="/shop" className="hover:text-accent transition-colors font-medium">
              {t('nav.shop')}
            </Link>

            <Button 
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              {i18n.language === 'en' ? 'हिन्दी' : 'English'}
            </Button>

            <Button 
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
            >
              <Link to="/donate">{t('nav.donate')}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary-foreground/20">
            <div className="flex flex-col gap-3">
              <Link to="/" className="py-2 hover:text-accent">
                {t('nav.home')}
              </Link>
              <Link to="/about" className="py-2 hover:text-accent">
                {t('nav.about')}
              </Link>
              <Link to="/training-schedule" className="py-2 hover:text-accent">
                {t('nav.training')}
              </Link>
              <Link to="/ayurved" className="py-2 hover:text-accent">
                {t('nav.ayurved')}
              </Link>
              <Link to="/shop" className="py-2 hover:text-accent">
                {t('nav.shop')}
              </Link>
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
