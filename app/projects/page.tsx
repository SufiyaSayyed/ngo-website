"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, Users } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";

const categories = ["All", "Education", "Technology", "Literacy", "Scholarships", "Training", "Support", "Gender Equity", "Vocational"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80')" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(27,94,32,0.9), rgba(0,0,0,0.3))" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-green-300 text-xs font-semibold tracking-widest uppercase mb-2">What We Do</div>
            <h1 className="font-display text-4xl md:text-5xl text-white">Our Programs & Projects</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search + Filter */}
          <AnimatedSection>
            <div className="flex flex-col md:flex-row gap-4 mb-10">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent bg-gray-50"
                  readOnly
                />
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeCategory === cat
                        ? "text-white shadow-sm"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                    style={activeCategory === cat ? { background: "linear-gradient(135deg, #2E7D32, #4CAF50)" } : {}}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-shadow duration-300 group flex flex-col h-full"
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-white/90 backdrop-blur-sm text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">{project.category}</span>
                      {project.status === "upcoming" && (
                        <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded-full">Coming Soon</span>
                      )}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-xs text-gray-400 mb-1 flex items-center gap-1.5">
                      <Users className="w-3 h-3" />
                      {project.beneficiaries.toLocaleString()}+ beneficiaries · {project.location}
                    </div>
                    <h3 className="font-display text-xl text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{project.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{project.description}</p>
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">{project.impact}</span>
                      <button className="flex items-center gap-1 text-xs font-semibold text-gray-700 hover:text-green-700 transition-colors">
                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
