import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import communityImage from "@/assets/community.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-32 bg-[#F8F3EE] overflow-hidden relative"
    >
      {/* Background soft fade */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-gradient-to-b from-white/0 to-[#F8F3EE] pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg font-semibold tracking-wider text-[#C4A484]"
            >
              <span>ABOUT US</span>
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
            >
              Bijendra Gaushala Welfare Association
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.85 }}
              viewport={{ once: true }}
              className="text-2xl text-gray-700 leading-relaxed"
            >
              GVAK is committed to promoting Indian cow breeds, organic farming
              practices, and traditional agricultural wisdom. We believe in
              sustainable development through cow-based economy and natural
              farming methods.
            </motion.p>

            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.9 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Our mission is to preserve indigenous Indian cow breeds through
              sustainable practices, community support, and knowledge sharing. We
              ensure that every cow receives proper care, nutrition, and a safe
              environment.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.9 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              We also focus on educating farmers, promoting organic farming
              methods, and reviving traditional agricultural wisdom to create
              healthier communities and a sustainable future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.9 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="mt-6 rounded-full px-10 py-6 bg-[#EADCCD] text-[#5A4A42] hover:bg-[#E3D3C2]"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE — FLOATING IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 w-96 h-96 bg-[#E7D5C6]/60 rounded-full blur-3xl -z-10" />

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4.5,
                ease: "easeInOut",
              }}
              className="rounded-full p-3 bg-[#F3E5D8] shadow-xl"
            >
              <img
                src={communityImage}
                alt="Community"
                className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover shadow-[0_25px_35px_rgba(0,0,0,0.3)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
