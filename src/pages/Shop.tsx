import { TopBar } from '@/components/TopBar';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const Shop = () => {
  const products = [
    {
      name: 'Organic Cow Ghee',
      price: '₹800/500g',
      image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=300&fit=crop',
      description: 'Pure A2 cow ghee prepared using traditional methods'
    },
    {
      name: 'Vermicompost',
      price: '₹300/5kg',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop',
      description: 'Nutrient-rich organic fertilizer for your garden'
    },
    {
      name: 'Panchagavya',
      price: '₹250/liter',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=300&fit=crop',
      description: 'Traditional ayurvedic preparation from cow products'
    },
    {
      name: 'Organic Fertilizer',
      price: '₹400/10kg',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop',
      description: 'Natural cow dung-based fertilizer'
    },
    {
      name: 'Cow Dung Cakes',
      price: '₹200/10pcs',
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=300&fit=crop',
      description: 'Traditional fuel and ritual purposes'
    },
    {
      name: 'Organic Pesticide',
      price: '₹350/liter',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop',
      description: 'Natural pest control solution'
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
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Authentic cow-based products prepared using traditional methods
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button className="bg-primary hover:bg-primary/90">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-secondary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Bulk Orders</h3>
                <p className="text-muted-foreground mb-6">
                  For bulk orders and wholesale inquiries, please contact us directly. 
                  We offer special pricing for large quantities and regular customers.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Contact for Bulk Orders
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

export default Shop;
