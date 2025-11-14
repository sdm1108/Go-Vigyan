import { TopBar } from '@/components/TopBar';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';

const IndianCow = () => {
  const { t } = useTranslation();

  const breeds = [
    { name: 'Gir', origin: 'Gujarat', characteristics: 'Known for high milk yield and disease resistance' },
    { name: 'Sahiwal', origin: 'Punjab', characteristics: 'Excellent milk producer with heat tolerance' },
    { name: 'Red Sindhi', origin: 'Sindh', characteristics: 'Hardy breed with good milk quality' },
    { name: 'Tharparkar', origin: 'Rajasthan', characteristics: 'Dual-purpose breed, drought resistant' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navigation />
      
      <main className="flex-1 py-16 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            {t('nav.indianCow')}
          </h1>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&h=400&fit=crop"
                alt="Indian Cow"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">Indigenous Breeds</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Indian cow breeds are known for their resilience, adaptability to local conditions, and the superior 
                quality of their milk and other products. These breeds have been developed over thousands of years 
                through natural selection.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike exotic breeds, Indian cows produce A2 milk, which is easier to digest and has numerous health 
                benefits. They also require less feed and are well-adapted to Indian climate conditions.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Major Indian Breeds</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {breeds.map((breed, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{breed.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="font-medium">Origin:</span> {breed.origin}
                  </p>
                  <p className="text-muted-foreground">{breed.characteristics}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Why Indian Cows Matter</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Produce A2 milk with superior nutritional value</li>
              <li>• Better adapted to Indian climate and conditions</li>
              <li>• Require less feed and maintenance</li>
              <li>• More disease resistant than exotic breeds</li>
              <li>• Produce high-quality dung for organic farming</li>
              <li>• Integral to sustainable cow-based economy</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IndianCow;
