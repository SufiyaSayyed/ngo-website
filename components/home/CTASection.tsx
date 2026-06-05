"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Users, ArrowRight, BookOpen } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const options = [
  {
    icon: Heart,
    title: "Support a Child",
    description: "Your donation funds school supplies, learning materials, and scholarships for one child for an entire year.",
    cta: "Donate Now",
    href: "/donation",
    primary: true,
  },
  {
    icon: Users,
    title: "Become a Volunteer",
    description: "Give your time, skills, and energy. Teach, mentor, or support our operations — every hour makes a difference.",
    cta: "Join Us",
    href: "/volunteer",
    primary: false,
  },
  {
    icon: BookOpen,
    title: "Spread Awareness",
    description: "Share our mission with your network. Raising awareness is one of the most powerful ways to create change.",
    cta: "Learn More",
    href: "/about",
    primary: false,
  },
];

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #F5F7F9 0%, #E8F5E9 50%, #F5F7F9 100%)" }}>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(76,175,80,0.2), transparent 60%)", transform: "translate(30%, -30%)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-green-600 bg-green-50 px-3 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            Get Involved
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-4">
            Be the Change a Child Needs
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            There are many ways to make a meaningful difference. Choose what resonates with you.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((opt, i) => {
            const Icon = opt.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className={`rounded-2xl p-8 h-full flex flex-col ${
                    opt.primary
                      ? "text-white shadow-2xl"
                      : "bg-white border border-gray-100 shadow-sm hover:shadow-lg"
                  }`}
                  style={opt.primary ? { background: "linear-gradient(135deg, #1B5E20, #2E7D32, #4CAF50)" } : {}}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${opt.primary ? "bg-white/20" : "bg-green-50"}`}>
                    <Icon className={`w-6 h-6 ${opt.primary ? "text-white" : "text-green-600"}`} />
                  </div>
                  <h3 className={`font-display text-2xl mb-3 ${opt.primary ? "text-white" : "text-gray-900"}`}>
                    {opt.title}
                  </h3>
                  <p className={`text-sm leading-relaxed flex-1 mb-8 ${opt.primary ? "text-white/80" : "text-gray-500"}`}>
                    {opt.description}
                  </p>
                  <Link
                    href={opt.href}
                    className={`group inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 ${
                      opt.primary
                        ? "text-white hover:gap-3"
                        : "text-green-700 hover:gap-3"
                    }`}
                  >
                    {opt.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
