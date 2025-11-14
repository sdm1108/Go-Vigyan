import { TopBar } from '@/components/TopBar';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTranslation } from 'react-i18next';
import { Heart, Leaf, Users } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const Donate = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your generous donation! We will contact you shortly.');
    setFormData({ name: '', email: '', amount: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navigation />
      
      <main className="flex-1 py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {t('donateSection.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('donateSection.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-6 text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-bold text-lg mb-2">Cow Protection</h3>
                <p className="text-sm text-muted-foreground">
                  Support the care and protection of indigenous cow breeds
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-sacred/20">
              <CardContent className="pt-6 text-center">
                <Leaf className="h-12 w-12 mx-auto mb-4 text-sacred" />
                <h3 className="font-bold text-lg mb-2">Organic Farming</h3>
                <p className="text-sm text-muted-foreground">
                  Help farmers transition to sustainable organic practices
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20">
              <CardContent className="pt-6 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="font-bold text-lg mb-2">Training Programs</h3>
                <p className="text-sm text-muted-foreground">
                  Fund educational workshops and training sessions
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Make a Donation</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <Label htmlFor="amount">Donation Amount (₹) *</Label>
                  <Input
                    id="amount"
                    type="number"
                    required
                    min="1"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    placeholder="Enter amount"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message (Optional)</Label>
                  <textarea
                    id="message"
                    className="w-full min-h-[100px] px-3 py-2 border border-input rounded-md bg-background"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Leave a message"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Proceed to Payment
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Donate;
