import { Users, Droplets, Zap, Sprout } from "lucide-react";
import { motion } from "framer-motion";

const Impact = () => {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Lives Impacted",
      description: "Rural families empowered through sustainable employment",
    },
    {
      icon: Droplets,
      value: "50,000L",
      label: "Pure Milk Daily",
      description: "Organic dairy products from indigenous cows",
    },
    {
      icon: Zap,
      value: "1000kW",
      label: "Clean Energy",
      description: "Sustainable biogas energy generated daily",
    },
    {
      icon: Sprout,
      value: "5000kg",
      label: "Organic Fertilizer",
      description: "Natural compost for sustainable farming",
    },
  ];

  return (
    <section
      id="impact"
      className="relative py-32 overflow-hidden bg-black"
    >
      {/* FIXED BACKGROUND IMAGE (same as first video) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1500')",
          backgroundAttachment: "fixed",   // ⭐ THIS FIXES THE PROBLEM
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT (scrolls over fixed image) */}
      <div className="container relative z-10 mx-auto px-4">
        
        {/* TITLE TEXT ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Growing Impact
          </h2>

          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Creating measurable change in rural communities through sustainable
            practices and empowerment
          </p>
        </motion.div>

        {/* CARDS ANIMATION */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.25,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="bg-white/20 backdrop-blur-xl border border-white/20 shadow-xl p-8 rounded-3xl text-center text-white hover:bg-white/30 transition-all hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/30 rounded-2xl mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-2xl font-semibold mb-3">{stat.label}</div>
                <p className="text-white/80">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;
