import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section
      className="relative w-full py-28 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg')", // 🐄 COW IMAGE URL
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      {/* 🔹 Soft Nude Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8e9d9c5] via-[#f5e4d4a8] to-[#f8e9d9c5] backdrop-blur-[3px]" />

      {/* 🔹 Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/paper.png')",
        }}
      />

      {/* 🔹 Background Floating Animation */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.7, 1, 0.7], x: [0, 10, 0], y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* MAIN CONTENT */}
      <div className="relative container mx-auto px-6 z-10 text-center max-w-3xl">
        {/* TEXT */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-[#5a4632]"
        >
          Join Hands to Support Our Gaushala
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-4 text-lg text-[#6d5841]"
        >
          Your contribution helps us provide care, food, and shelter to our beloved cows.
        </motion.p>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8"
        >
          <Button
            className="bg-[#d8c3a5] text-[#5b4632] hover:bg-[#cbb298] px-8 py-4 text-lg rounded-xl shadow-md backdrop-blur-md"
          >
            Donate Now
          </Button>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: index * 0.2 }}
              className="bg-[#fff4e8d7] backdrop-blur-xl border border-[#e7d6c5] rounded-2xl p-6 shadow-lg hover:scale-105 transition-all"
            >
              <h3 className="font-semibold text-xl text-[#5a4632]">
                Support Category {index}
              </h3>
              <p className="text-[#7a6855] mt-2">
                Help provide care & nourishment for our cows.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
