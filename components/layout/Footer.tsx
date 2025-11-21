"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Phone, MapPin, Hotel, Coffee, Wine, Bell, Utensils, Key, Briefcase, ChefHat } from "lucide-react";

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com", color: "#E4405F" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", color: "#0077b5" },
  { name: "Email", icon: Mail, href: "mailto:jagdish.joshi@example.com", color: "#ea4335" },
];

const floatingIcons = [
  { Icon: Hotel, delay: 0, x: "5%", y: "20%", duration: 7 },
  { Icon: ChefHat, delay: 0.5, x: "90%", y: "15%", duration: 6 },
  { Icon: Coffee, delay: 1, x: "10%", y: "70%", duration: 6.5 },
  { Icon: Wine, delay: 1.5, x: "85%", y: "75%", duration: 7.5 },
  { Icon: Bell, delay: 0.3, x: "20%", y: "45%", duration: 6 },
  { Icon: Utensils, delay: 0.8, x: "75%", y: "50%", duration: 7 },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-background via-background to-muted py-16 mt-20 overflow-hidden">
      {/* Floating Icons Background - Similar to Hero */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map(({ Icon, delay, x, y, duration }, index) => (
          <motion.div
            key={index}
            className="absolute text-primary/10 dark:text-primary/5"
            style={{
              left: x,
              top: y,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          >
            <Icon className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          </motion.div>
        ))}
      </div>

      {/* Decorative Gradient Orbs - Similar to Hero */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient">Jagdish Joshi</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              MSc International Events Management student at University of the West of Scotland. 
              Experienced hospitality professional with expertise in culinary arts, team leadership, 
              and operational excellence across prestigious establishments.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Projects", "Experience", "Skills", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-300"
                  >
                    → {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4 text-primary">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:jagdish.joshi@example.com"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>jagdish.joshi@example.com</span>
              </a>
              <a
                href="tel:+447XXXXXXXXX"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>+44 7XXXXXXXXX</span>
              </a>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Glasgow, United Kingdom</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links with Hover Effects */}
        <motion.div
          className="flex justify-center space-x-6 mb-8 pb-8 border-b border-border/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-muted/50 backdrop-blur-sm rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 border border-border/50 hover:border-primary/50"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <social.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright with Gradient Text */}
        <motion.div
          className="text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p>
            © {new Date().getFullYear()} <span className="text-gradient font-semibold">Jagdish Joshi</span>. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

