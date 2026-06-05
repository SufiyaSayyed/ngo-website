"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Clock, Heart, BookOpen, Smile, TrendingUp, ArrowRight, Bell } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const benefits = [
  { icon: Heart, title: "Make Real Impact", description: "See the direct difference you make in children's lives, not just in reports, but in real conversations and smiles." },
  { icon: BookOpen, title: "Share Your Skills", description: "Whether you're a teacher, engineer, artist, or accountant — every skill has a place in our programs." },
  { icon: TrendingUp, title: "Grow as a Person", description: "Volunteering builds empathy, leadership, and a sense of purpose that enriches your professional and personal life." },
  { icon: Smile, title: "Join a Community", description: "Connect with 250+ like-minded volunteers who believe in the power of education to transform society." },
  { icon: Clock, title: "Flexible Commitment", description: "From 2 hours a week to full-time placements, we work around your schedule." },
  { icon: Users, title: "Recognition & Growth", description: "Receive training, certificates, and references. Many volunteers have gone on to careers in social impact." },
];

export default function VolunteerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593113616828-6f22bca04804?w=1600&q=80')" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(27,94,32,0.85), rgba(56,142,60,0.6))" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
              <Bell className="w-3.5 h-3.5" /> Registration Opening Soon
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-white mb-6 leading-tight">
              Volunteer With <br />
              <span className="italic" style={{ color: "#A5D6A7" }}>Ruchi Foundation </span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Join 250+ passionate individuals who give their time, skills, and love to ensure every child gets the education they deserve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-green-600 bg-green-50 px-3 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              Why Volunteer
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-gray-900">Why People Love Volunteering With Us</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="rounded-2xl p-6 border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-green-50">
                    <b.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-display text-lg text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon CTA */}
      <section className="py-20 text-center" style={{ background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 60%, #388E3C 100%)" }}>
        <AnimatedSection>
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-6xl mb-6"
          >
            🙌
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">Volunteer Registration<br />Opening Soon</h2>
          <p className="text-white/75 text-lg max-w-lg mx-auto mb-10">
            We're finalizing our volunteer onboarding platform to make your experience seamless. Leave your details and we'll notify you the moment registration opens.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-7 py-4 rounded-xl bg-white font-semibold text-green-700 hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <Bell className="w-5 h-5" />
              Get Notified
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 px-7 py-4 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Learn About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
