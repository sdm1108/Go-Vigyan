import { TopBar } from '@/components/TopBar';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TrainingSchedule = () => {
  const { t } = useTranslation();

  const trainings = [
    {
      title: 'Organic Farming Basics',
      date: 'December 15-17, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'GVAK Training Center, Nagpur',
      description: 'Learn the fundamentals of organic farming, soil health, and natural pest control methods.',
      seats: 'Limited to 30 participants'
    },
    {
      title: 'Vermicompost Production',
      date: 'December 22-23, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'GVAK Training Center, Nagpur',
      description: 'Hands-on training in vermicompost production, maintenance, and usage for optimal crop growth.',
      seats: 'Limited to 25 participants'
    },
    {
      title: 'Cow-Based Economy Workshop',
      date: 'January 5-7, 2026',
      time: '9:00 AM - 5:00 PM',
      location: 'GVAK Training Center, Nagpur',
      description: 'Comprehensive workshop on building sustainable livelihoods through cow-based products and services.',
      seats: 'Limited to 40 participants'
    },
    {
      title: 'Panchagavya Preparation',
      date: 'January 12-13, 2026',
      time: '10:00 AM - 3:00 PM',
      location: 'GVAK Training Center, Nagpur',
      description: 'Learn traditional methods of preparing panchagavya and its applications in agriculture and health.',
      seats: 'Limited to 20 participants'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navigation />
      
      <main className="flex-1 py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {t('nav.schedule')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our comprehensive training programs to learn traditional and sustainable farming practices
            </p>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {trainings.map((training, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{training.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{training.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-medium">{training.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{training.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{training.location}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{training.seats}</span>
                    <Button className="bg-primary hover:bg-primary/90">
                      Register Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-secondary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Custom Training Programs</h3>
                <p className="text-muted-foreground mb-6">
                  We also offer customized training programs for farmer groups, schools, and organizations. 
                  Contact us to discuss your specific requirements.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TrainingSchedule;
