"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Stories"
          title="Voices of Change"
          subtitle="Real stories from the children, families, and volunteers who are part of our journey."
          centered
        />

        {/* Featured quote */}
        <div className="mt-14 relative max-w-3xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Quote className="w-10 h-10 mx-auto mb-6 text-green-200" />
              <p className="font-display text-2xl md:text-3xl text-gray-800 leading-relaxed italic mb-8">
                &quot;{testimonials[active].quote}&quot;
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[active].image}
                  alt={testimonials[active].name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-green-100"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{testimonials[active].name}</div>
                  <div className="text-sm text-gray-500">{testimonials[active].role}</div>
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full capitalize">
                  {testimonials[active].type}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-green-500 hover:text-green-600 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-green-600" : "w-2 bg-gray-200"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-green-500 hover:text-green-600 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Small cards grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((t, i) => (
            <AnimatedSection key={t.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                onClick={() => setActive(i)}
                className="cursor-pointer rounded-2xl p-5 border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-300"
                style={{ background: active === i ? "rgba(46,125,50,0.04)" : "white" }}
              >
                <Quote className="w-5 h-5 text-green-300 mb-3" />
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <div className="text-xs font-semibold text-gray-800">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role}</div>
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
