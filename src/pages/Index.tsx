import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <CallToAction />
      <Testimonials />
      <Gallery />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
