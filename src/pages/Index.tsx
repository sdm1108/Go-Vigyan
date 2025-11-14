import { useTranslation } from 'react-i18next';
import { TopBar } from '@/components/TopBar';
import { Navigation } from '@/components/Navigation';
import { HeroSlider } from '@/components/HeroSlider';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Heart, Users, Leaf } from 'lucide-react';

const Index = () => {
  const { t } = useTranslation();

  const testimonials = [
    { quote: t('testimonials.quote1'), author: t('testimonials.author1') },
    { quote: t('testimonials.quote2'), author: t('testimonials.author2') },
    { quote: t('testimonials.quote3'), author: t('testimonials.author3') }
  ];

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=300&fit=crop', title: t('gallery.adopt') },
    { url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop', title: t('gallery.farming') },
    { url: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=300&fit=crop', title: t('gallery.training') },
    { url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=300&fit=crop', title: t('gallery.care') }
  ];

  const newsArticles = [
    {
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=250&fit=crop',
      title: 'New Organic Farming Workshop Announced',
      date: 'November 10, 2025',
      excerpt: 'Join us for an intensive workshop on traditional organic farming methods.'
    },
    {
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=250&fit=crop',
      title: 'Success Story: Local Farmers Adopt Cow-Based Economy',
      date: 'November 5, 2025',
      excerpt: 'Learn how our training programs have transformed local agriculture.'
    },
    {
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=250&fit=crop',
      title: 'Preserving Indigenous Breeds: Our Mission',
      date: 'October 28, 2025',
      excerpt: 'Understanding the importance of protecting native cow breeds.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navigation />
      <HeroSlider />

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&h=400&fit=crop"
                alt="Indian Cow"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {t('about.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t('about.description')}
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Join & Donate Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4">{t('join.title')}</h3>
                <p className="text-muted-foreground mb-6">{t('join.description')}</p>
                <Button className="bg-primary hover:bg-primary/90">
                  {t('join.button')}
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardContent className="p-8 text-center">
                <Heart className="h-16 w-16 mx-auto mb-4 text-accent" />
                <h3 className="text-2xl font-bold mb-4">{t('donateSection.title')}</h3>
                <p className="text-muted-foreground mb-6">{t('donateSection.description')}</p>
                <Button asChild className="bg-accent hover:bg-accent/90">
                  <Link to="/donate">{t('donateSection.button')}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('testimonials.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-bold text-primary">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('gallery.title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg aspect-square">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-white font-bold p-4">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Articles */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('news.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{article.date}</p>
                  <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <Button variant="link" className="p-0 text-primary">
                    {t('news.readMore')} →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
