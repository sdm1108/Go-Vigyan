import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const TopBar = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-muted border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between py-2 text-sm">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-foreground">
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-medium">{t('contact.helpline')}:</span>
              <a href="tel:+07122772273" className="hover:text-primary transition-colors">
                +0712-2772273, 2734182
              </a>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Mail className="h-4 w-4 text-primary" />
              <span className="font-medium">{t('contact.email')}:</span>
              <a href="mailto:info@govigyan.com" className="hover:text-primary transition-colors">
                info@govigyan.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-xs">{t('contact.address')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
