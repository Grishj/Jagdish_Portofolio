"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award } from "lucide-react";
import { technicalSkills, softSkills, certifications } from "@/data/skills";
import { fadeInUp, staggerContainer, skillBarVariants } from "@/lib/animations";

export function Skills() {
  const [activeTab, setActiveTab] = useState<"technical" | "soft" | "certifications">("technical");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const tabs = [
    { id: "technical", label: "Technical Skills" },
    { id: "soft", label: "Soft Skills" },
    { id: "certifications", label: "Certifications" },
  ] as const;

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Skills & <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expertise and qualifications in hospitality management
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-12">
            <div className="inline-flex bg-muted p-1 rounded-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-3 rounded-md font-medium transition-all ${
                    activeTab === tab.id
                      ? "text-primary-foreground"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-md"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === "technical" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        custom={skill.level}
                        variants={skillBarVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "soft" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        custom={skill.level}
                        variants={skillBarVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "certifications" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card border-2 border-border hover:border-primary p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <Award className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                    <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">
                      Issued: {new Date(cert.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                      })}
                    </p>
                    {cert.credentialId && (
                      <p className="text-xs text-muted-foreground mt-2">
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
