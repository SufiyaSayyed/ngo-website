"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 4);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeader
            tag="Featured Projects"
            title="Programs Changing Lives"
            subtitle="Each initiative is designed with care, backed by data, and delivered with love."
          />
          <AnimatedSection delay={0.3} direction="left">
            <Link
              href="/projects"
              className="flex items-center gap-2 text-green-700 font-semibold text-sm hover:gap-3 transition-all duration-200 shrink-0"
            >
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col h-full"
              >
                <div className="relative overflow-hidden aspect-16/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-lg text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-green-600 font-medium">{project.impact}</span>
                    <Link
                      href="/projects"
                      className="flex items-center gap-1 text-xs font-semibold text-gray-700 hover:text-green-700 transition-colors"
                    >
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
