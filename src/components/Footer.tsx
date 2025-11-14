import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-earth text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4"> Bijendra Gaushala Welfare Association</h3>
            <p className="text-white/80">
              Dedicated to preserving indigenous cow breeds and promoting sustainable organic farming practices.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/training-schedule" className="text-white/80 hover:text-white transition-colors">{t('nav.training')}</Link></li>
              <li><Link to="/shop" className="text-white/80 hover:text-white transition-colors">{t('nav.shop')}</Link></li>
              <li><Link to="/donate" className="text-white/80 hover:text-white transition-colors">{t('nav.donate')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="text-white/80">{t('contact.address')}</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <a href="tel:+07122772273" className="text-white/80 hover:text-white transition-colors">
                  +0712-2772273, 2734182
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:info@govigyan.com" className="text-white/80 hover:text-white transition-colors">
                  info@govigyan.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()}  Bijendra Gaushala Welfare Association. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
