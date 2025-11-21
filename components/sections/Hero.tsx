"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, Hotel, Coffee, Wine, Bell, Utensils, Key, Briefcase, ChefHat } from "lucide-react";
import { heroVariants, heroChildVariants } from "@/lib/animations";
import { smoothScroll } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const floatingIcons = [
  { Icon: Hotel, delay: 0, x: "10%", y: "20%", duration: 6 },
  { Icon: ChefHat, delay: 0.5, x: "80%", y: "15%", duration: 7 },
  { Icon: Coffee, delay: 1, x: "15%", y: "70%", duration: 5.5 },
  { Icon: Wine, delay: 1.5, x: "85%", y: "65%", duration: 6.5 },
  { Icon: Bell, delay: 0.3, x: "25%", y: "45%", duration: 7.5 },
  { Icon: Utensils, delay: 0.8, x: "70%", y: "40%", duration: 6 },
  { Icon: Key, delay: 1.2, x: "40%", y: "25%", duration: 5 },
  { Icon: Briefcase, delay: 0.6, x: "60%", y: "75%", duration: 7 },
];

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Jagdish Joshi";
  const [cursorVisible, setCursorVisible] = useState(true);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  // Cursor blink
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted"
    >
      {/* Floating Icons Background */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map(({ Icon, delay, x, y, duration }, index) => (
          <motion.div
            key={index}
            className="absolute text-primary/10 dark:text-primary/5"
            style={{
              left: x,
              top: y,
              x: useTransform(
                useMotionValue(mousePosition.x),
                [-1, 1],
                [-20 * (index % 3), 20 * (index % 3)]
              ),
              y: useTransform(
                useMotionValue(mousePosition.y),
                [-1, 1],
                [-20 * (index % 3), 20 * (index % 3)]
              ),
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
            <Icon className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name with Typewriter Effect */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
          variants={heroChildVariants}
        >
          <span className="text-foreground">
            {displayedText}
            <span
              className={`inline-block w-1 h-12 md:h-16 lg:h-20 bg-primary ml-2 ${
                cursorVisible ? "opacity-100" : "opacity-0"
              } transition-opacity`}
            />
          </span>
        </motion.h1>

        {/* Title with Gradient Animation */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-gradient-animate"
          variants={heroChildVariants}
        >
          MSc International Events Management Student & Hospitality Professional
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={heroChildVariants}
        >
          Crafting exceptional experiences through innovative event management
          and culinary excellence across international hospitality venues
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={heroChildVariants}>
          <Button
            size="lg"
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-2xl"
            onClick={() => smoothScroll("projects")}
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore My Work
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-accent"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </motion.div>
      </motion.div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
    </section>
  );
}
