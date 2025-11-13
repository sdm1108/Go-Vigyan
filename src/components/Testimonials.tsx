import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mr. Pavan Katankar",
    role: "Cow Based Products Manufacturer",
    location: "Gondia Dist., Maharashtra, India",
    content: "I came to Go Vigyan after my jersey cow based dairy went in loss. I was hugely benefitted by the training of producing cow based products. Thanks to Go Vigyan I was able to start a new business. I get regular consultation from Go Vigyan & my business has grown since then."
  },
  {
    name: "Mr. Nagorao Deshmukh",
    role: "Organic Farmer",
    location: "Karanja Ghadge, Dist. Wardha, India",
    content: "I am a small land owner in a small village in Wardha District. I was facing bankruptcy because of very less yield and income from my land. After the training, I started farming as told by Go Vigyan. My input cost was reduced considerably and my income grew with this. Now I am earning 2 Lakh Rupees per year from my 2 Acre Land."
  },
  {
    name: "Mr. Pavan Katankar",
    role: "Cow Based Products Manufacturer",
    location: "Gondia Dist., Maharashtra, India",
    content: "I came to Go Vigyan after my jersey cow based dairy went in loss. I was hugely benefitted by the training of producing cow based products. Thanks to Go Vigyan I was able to start a new business. I get regular consultation from Go Vigyan & my business has grown since then."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2">Our Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What they are talking about Go Vigyan Anusandhan Kendra
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-hover transition-all duration-300 bg-card border-none relative">
              <Quote className="h-12 w-12 text-primary/20 mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-1">{testimonial.name}</h4>
              <p className="text-primary font-semibold text-sm mb-1">{testimonial.role}</p>
              <p className="text-muted-foreground text-sm mb-4">{testimonial.location}</p>
              <p className="text-foreground leading-relaxed">{testimonial.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
