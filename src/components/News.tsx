import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const News = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2">News & articles</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Directly from the latest news and articles
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="overflow-hidden hover:shadow-hover transition-all duration-300 border-none">
            <div className="aspect-video bg-gradient-primary flex items-center justify-center text-6xl">
              🐄
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 text-primary text-sm mb-4">
                <Calendar className="h-4 w-4" />
                <span>1 Nov 2023</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                India's Cherished Heritage: Cow-Centric Culture and Traditions
              </h3>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                Read More
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default News;
