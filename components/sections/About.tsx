"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Award, Briefcase, GraduationCap, Star } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useEffect, useState } from "react";

const stats = [
  { icon: Briefcase, label: "Years Experience", value: 6, suffix: "+" },
  { icon: Award, label: "Projects Completed", value: 8, suffix: "+" },
  { icon: GraduationCap, label: "Certifications", value: 4, suffix: "" },
  { icon: Star, label: "Skills Mastered", value: 5, suffix: "+" },
];

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating memorable experiences in the hospitality industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse-glow rounded-2xl" />
                <div className="absolute inset-2 bg-gradient-to-br from-primary to-accent rounded-2xl p-1">
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <Image
                      src="/images/profile.jpg"
                      alt="Jagdish Joshi - Hotel Management Student"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* About Text */}
           <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-3xl font-bold">
                Jagdish Joshi
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a dedicated hospitality professional currently pursuing my MSc in International Events Management at the University of the West of Scotland, based in Glasgow, United Kingdom. With a Bachelor's degree in Hotel Management from Kantipur International College, I bring a strong academic foundation combined with extensive hands-on experience in the hospitality industry.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in hospitality spans across prestigious establishments including Doubletree by Hilton Glasgow Central, where I currently serve as Commis Chef, The Everest Hotel Kathmandu where I previously held the position of Team Leader, and Delish Opera Restro & Banquet. I've developed expertise in culinary arts, bar operations, and team leadership, consistently delivering exceptional guest experiences and operational excellence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My diverse background includes bartending experience at Kathmandu FBA, which has enriched my understanding of all aspects of hospitality operations. I'm passionate about combining traditional hospitality values with innovative approaches to create memorable experiences. My education at Kathmandu FBA and Morning Glory Higher Secondary School has shaped my commitment to excellence in the hospitality sector.
              </p>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
              >
                <stat.icon className="w-8 h-8 text-primary mb-4" />
                <div className="text-4xl font-bold text-gradient mb-2">
                  <AnimatedCounter end={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
