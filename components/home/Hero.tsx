"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Heart, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1800&q=85')" }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

      {/* Floating accent circles */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-20 w-64 h-64 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(76,175,80,0.3), transparent 70%)" }}
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-32 right-40 w-48 h-48 rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(46,125,50,0.4), transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Registered NGO · Since 2010 · 5,000+ Children Helped
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
          >
            Empowering Every Child{" "}
            <span className="italic" style={{ color: "#81C784" }}>Through</span>
            <br />
            Education
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-xl"
          >
            Creating life-changing opportunities for underprivileged children through quality learning, mentorship, and strong community support.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Link
              href="/donation"
              className="group flex items-center gap-2.5 px-7 py-4 rounded-xl text-white font-semibold text-base transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-100"
              style={{ background: "linear-gradient(135deg, #2E7D32, #4CAF50)" }}
            >
              <Heart className="w-5 h-5" />
              Donate Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/projects"
              className="group flex items-center gap-2.5 px-7 py-4 rounded-xl bg-white/15 backdrop-blur-sm border border-white/25 text-white font-semibold text-base hover:bg-white/25 transition-all duration-300"
            >
              <PlayCircle className="w-5 h-5" />
              Our Projects
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 flex items-center gap-8 flex-wrap"
          >
            {[
              { value: "5,000+", label: "Children Reached" },
              { value: "150+", label: "Learning Centers" },
              { value: "250+", label: "Volunteers" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/60 font-medium">{stat.label}</div>
                </div>
                <div className="w-px h-8 bg-white/20 last:hidden" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-linear-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
