import { useTranslation } from 'react-i18next';
import { TopBar } from '@/components/TopBar';
import { Navigation } from '@/components/Navigation';
import { HeroSlider } from '@/components/HeroSlider';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Heart, Users } from 'lucide-react';
import { motion } from "framer-motion";

// 👉 NEW IMPORT
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  const { t } = useTranslation();

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

      {/* ⭐ UPDATED ABOUT SECTION ⭐ */}
      <section className="py-28 bg-[#F8F3EE]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg font-semibold tracking-wider text-[#C4A484]">
                ABOUT US
              </p>

              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                {t('about.title')}
              </h2>

              <p className="text-2xl text-gray-700 leading-relaxed">
                {t('about.description')}
              </p>

              <Button
                asChild
                size="lg"
                className="mt-6 rounded-full px-10 py-6 bg-[#EADCCD] text-[#5A4A42] hover:bg-[#E3D3C2]"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </motion.div>

            {/* RIGHT SIDE IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              {/* Soft Glow */}
              <div className="absolute inset-0 w-96 h-96 bg-[#E7D5C6]/60 rounded-full blur-3xl -z-10" />

              {/* Floating Circular Image */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="rounded-full p-3 bg-[#F3E5D8] shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&h=600&fit=crop"
                  alt="Indian Cow"
                  className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover shadow-[0_25px_35px_rgba(0,0,0,0.3)]"
                />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Join & Donate Section */}
      <section className="py-16 bg-[#FAF7F3]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">

            {/* JOIN CARD */}
            <Card className="border-2 border-[#E6D6C7] bg-[#FFFDFB]">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 mx-auto mb-4 text-[#C7A996]" />
                <h3 className="text-2xl font-bold mb-4">{t('join.title')}</h3>
                <p className="text-muted-foreground mb-6">{t('join.description')}</p>

                <Button className="bg-[#E8D8C8] text-[#5A4A42] hover:bg-[#DFCBB8]">
                  {t('join.button')}
                </Button>
              </CardContent>
            </Card>

            {/* DONATE CARD */}
            <Card className="border-2 border-[#D9C4B6] bg-[#FFFDFB]">
              <CardContent className="p-8 text-center">
                <Heart className="h-16 w-16 mx-auto mb-4 text-[#C8A89D]" />
                <h3 className="text-2xl font-bold mb-4">{t('donateSection.title')}</h3>
                <p className="text-muted-foreground mb-6">{t('donateSection.description')}</p>

                <Button
                  asChild
                  className="bg-[#E9D6CF] text-[#5A4A42] hover:bg-[#DCC8C0]"
                >
                  <Link to="/donate">{t('donateSection.button')}</Link>
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* ⭐ TESTIMONIAL SECTION ⭐ */}
      <TestimonialsSection />

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

      {/* News */}
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
