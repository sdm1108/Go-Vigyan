import { Card } from "@/components/ui/card";

const galleryItems = [
  { title: "Adopt Cow", emoji: "🐄", color: "bg-gradient-primary" },
  { title: "Organic Farming", emoji: "🌾", color: "bg-gradient-secondary" },
  { title: "Activities", emoji: "🤝", color: "bg-gradient-primary" },
  { title: "Vermi Compost", emoji: "🌱", color: "bg-gradient-secondary" },
  { title: "Panchagavya Ayurvedic Medicines", emoji: "💊", color: "bg-gradient-primary" }
];

const Gallery = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our photo gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {galleryItems.map((item, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-none hover:shadow-hover transition-all duration-300 cursor-pointer"
            >
              <div className={`${item.color} aspect-square flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300`}>
                {item.emoji}
              </div>
              <div className="p-4 bg-card">
                <h4 className="text-center font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
