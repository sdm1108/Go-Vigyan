import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import heroImage from "@/assets/hero-gaushala.jpg";
import womenEmpowerment from "@/assets/women-empowerment.jpg";
import sustainableEcosystem from "@/assets/sustainable-ecosystem.jpg";
import community from "@/assets/community.jpg";
import products from "@/assets/products.jpg";
import modernGaushala from "@/assets/modern-gaushala.jpg";

const Gallery = () => {
  const images = [
    { src: heroImage, title: "Traditional Gaushala" },
    { src: womenEmpowerment, title: "Women Empowerment" },
    { src: sustainableEcosystem, title: "Sustainable Farming" },
    { src: community, title: "Community Spirit" },
    { src: products, title: "Pure Organic Products" },
    { src: modernGaushala, title: "Modern Facilities" },
  ];

  const testimonials = [
    {
      name: "Ravi Sharma",
      msg: "This initiative has completely transformed our village. Truly inspiring!",
      rating: 5,
    },
    {
      name: "Aditi Verma",
      msg: "The products are 100% pure and authentic. Loved the experience!",
      rating: 5,
    },
    {
      name: "Suresh Kumar",
      msg: "Gaushala modernization is the best thing to happen for rural growth.",
      rating: 4,
    },
    {
      name: "Priya Singh",
      msg: "Women empowerment through this project is truly remarkable.",
      rating: 5,
    },
    {
      name: "Manoj Patil",
      msg: "A movement that revives culture with modern innovation.",
      rating: 4,
    },
  ];

  // -------------------------------
  // SLIDER CONFIG
  // -------------------------------
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<any>(null);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => clearInterval(intervalRef.current);
  }, []);

  const getVisibleCards = () => {
    const prev = (index - 1 + testimonials.length) % testimonials.length;
    const next = (index + 1) % testimonials.length;

    return [testimonials[prev], testimonials[index], testimonials[next]];
  };

  return (
    <>
      {/* -------------------------------------------------- */}
      {/* GALLERY SECTION */}
      {/* -------------------------------------------------- */}
      <section id="gallery" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Witness the transformation of rural communities through sustainable practices and dedication
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[4/3]"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* 3-CARD TESTIMONIAL SLIDER */}
      {/* -------------------------------------------------- */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What <span className="text-gradient">People Say</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Voices from the community that inspire us to grow every day
          </p>

          {/* SLIDER CONTAINER */}
          <div className="flex justify-center gap-6 items-center overflow-hidden">
            {getVisibleCards().map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{
                  opacity: 1,
                  scale: i === 1 ? 1 : 0.85,
                  y: i === 1 ? 0 : 25,
                }}
                transition={{ duration: 0.6 }}
                className={`bg-white shadow-xl rounded-2xl p-8 w-[290px] md:w-[330px] transition-all ${
                  i === 1 ? "z-20 scale-100" : "opacity-80"
                }`}
              >
                <p className="text-muted-foreground italic">"{t.msg}"</p>

                {/* ⭐ Rating */}
                <div className="flex justify-center gap-1 mt-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={20}
                      className={
                        j < t.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>

                <h4 className="mt-4 font-bold text-primary">{t.name}</h4>
              </motion.div>
            ))}
          </div>

          {/* DOTS */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index ? "bg-primary scale-125" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
