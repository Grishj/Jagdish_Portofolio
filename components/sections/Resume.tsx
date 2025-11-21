"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Resume() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="resume" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              My <span className="text-gradient">Resume</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take a look at my professional journey, skills, and qualifications in detail.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-center justify-center space-y-8">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                <FileText className="w-12 h-12 text-primary" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Download My CV</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Get a comprehensive overview of my experience in the hospitality industry, including my roles at Doubletree by Hilton and The Everest Hotel.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300"
                >
                  <a href="/resume/resume.pdf" download="Jagdish_Joshi_Resume.pdf">
                    Download Resume <Download className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-lg px-8 py-6 rounded-full"
                >
                  <a href="/resume/resume.pdf" target="_blank" rel="noopener noreferrer">
                    View in Browser
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
