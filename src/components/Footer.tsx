import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.jpg"; // ✅ your logo

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Mission", href: "#mission" },
    { name: "Impact", href: "#impact" },
    { name: "Gallery", href: "#gallery" },
  ];

  const programs = [
    { name: "Women Empowerment" },
    { name: "Organic Farming" },
    { name: "Clean Energy" },
    { name: "Rural Development" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  return (
    <footer id="contact" className="bg-foreground text-background pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* About Column */}
          <div>
            <div className="flex items-center gap-3 mb-6 group">

              {/* ⭐ UPDATED LOGO — SAME AS NAVBAR ⭐ */}
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center transition-transform group-hover:scale-110">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <div className="text-xl font-bold">Bijendra Gaushala</div>
                <div className="text-sm text-background/70">Welfare Association</div>
              </div>
            </div>

            <p className="text-background/80 mb-6 leading-relaxed">
              Building self-reliant villages through sustainable cattle-based ecosystems that heal and empower communities.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary transition-all group-hover:w-4 mr-0 group-hover:mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Programs</h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index} className="text-background/80 flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  {program.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-background/80">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Village Gaushala Road, Rural District, India 123456</span>
              </li>
              <li className="flex items-center gap-3 text-background/80">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-background/80">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>info@gaushalarevolution.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm">
            © 2024 Bijendra Gaushala Welfare Association. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/70 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/70 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
