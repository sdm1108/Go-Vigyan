import { BookOpen, Users, Leaf, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: BookOpen,
    title: "Training Programs",
    description: "Comprehensive training sessions on traditional practices and modern sustainable methods.",
    color: "text-primary",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Building strong communities through collaborative programs and shared knowledge.",
    color: "text-secondary",
  },
  {
    icon: Leaf,
    title: "Organic Farming",
    description: "Promoting organic and sustainable farming techniques for a healthier environment.",
    color: "text-primary",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Professional certification programs to validate expertise and commitment to excellence.",
    color: "text-accent",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the comprehensive range of services we offer to support and empower our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50 bg-card"
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
