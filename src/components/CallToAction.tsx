import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Join as GO-Sevak */}
          <Card className="p-8 hover:shadow-hover transition-all duration-300 bg-card border-none relative overflow-hidden group">
            <div className="absolute top-4 right-4 text-6xl opacity-20 group-hover:scale-110 transition-transform duration-300">
              🐄
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Join us & become a GO-Sevak
              </h3>
              <p className="text-muted-foreground mb-6">
                As a Go Sevak, you contribute to the preservation of Indian culture and traditions deeply rooted in the significance of cows.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Be part of a community dedicated to cow welfare.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Uphold the significance of cows in Indian culture.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Learn and share the value of cows.</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Donate for Cows */}
          <Card className="p-8 hover:shadow-hover transition-all duration-300 bg-card border-none relative overflow-hidden group">
            <div className="absolute top-4 right-4 text-6xl opacity-20 group-hover:scale-110 transition-transform duration-300">
              💛
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Donate for the Well-Being of Cows
              </h3>
              <p className="text-muted-foreground mb-6">
                Support the preservation of the sacred and cultural significance of cows in India.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Contribute to the protection of a cultural icon.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Donate to provide nourishment and shelter for cows.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Small contributions lead to significant change.</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
