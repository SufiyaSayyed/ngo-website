"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { GraduationCap, Building2, Heart, MapPin } from "lucide-react";
import { impactStats } from "@/data/impact";
import AnimatedSection from "@/components/shared/AnimatedSection";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap, Building2, Heart, MapPin,
};

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function ImpactStats() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #388E3C 100%)" }}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl bg-white" style={{ transform: "translate(-40%, -40%)" }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl bg-white" style={{ transform: "translate(40%, 40%)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-300 inline-block" />
            Our Impact
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-white">
            Numbers That Tell Our Story
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, i) => {
            const Icon = iconMap[stat.icon];
            return (
              <AnimatedSection key={stat.id} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl p-6 text-center"
                  style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 bg-white/20">
                    {Icon && <Icon className="w-6 h-6 text-white" />}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-base font-semibold text-white/90 mb-1">{stat.label}</div>
                  <div className="text-xs text-white/60 leading-relaxed">{stat.description}</div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
