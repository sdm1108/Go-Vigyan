import { TopBar } from '@/components/TopBar';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navigation />
      
      <main className="flex-1 py-16 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            {t('nav.aboutOrg')}
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&h=400&fit=crop"
                alt="About GVAK"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Go Vigyan Anusandhan Kendra (GVAK) is dedicated to preserving and promoting indigenous Indian cow breeds, 
                organic farming practices, and traditional agricultural wisdom for sustainable development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in the holistic benefits of cow-based economy and natural farming methods that have sustained 
                Indian agriculture for centuries.
              </p>
            </div>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground mb-6">
              To create a sustainable ecosystem where traditional knowledge meets modern science, ensuring the protection 
              of indigenous cow breeds while empowering farmers with organic farming techniques.
            </p>

            <h2 className="text-2xl font-bold mb-4">What We Do</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Cow protection and breed preservation programs</li>
              <li>• Training in organic farming and sustainable agriculture</li>
              <li>• Research on cow-based products and their benefits</li>
              <li>• Community awareness and education programs</li>
              <li>• Support for farmers transitioning to organic methods</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
