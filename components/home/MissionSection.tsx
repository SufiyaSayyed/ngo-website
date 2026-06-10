"use client";

// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image";

const highlights = [
  "Providing learning materials to 2,000+ children annually",
  "Operating 150+ community learning centers",
  "Training government school teachers in modern pedagogy",
  "Awarding 500 scholarships to high-potential students",
];

export default function MissionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/5">
                <Image
                  src="/photo.jpeg"
                  alt="Children learning"
                  width={2}
                  height={2}
                  className="w-full h-full object-cover"
                />
                {/* Green overlay card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-5 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #2E7D32, #4CAF50)" }}>
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">14 Years</div>
                      <div className="text-sm text-gray-500">Transforming lives through education</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating accent */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-2xl opacity-20 rotate-12" style={{ background: "linear-gradient(135deg, #2E7D32, #4CAF50)" }} />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-xl opacity-15" style={{ background: "#4CAF50" }} />
            </div>
          </AnimatedSection>

          {/* Text side */}
          <div>
            <SectionHeader
              tag="Our Mission"
              title="Education Is the Most Powerful Tool We Have"
              subtitle="We believe every child, regardless of economic background, deserves access to quality education. Since 2010, Ruchi Foundation has been removing the barriers that stand between children and their futures."
            />

            <div className="mt-8 space-y-3">
              {highlights.map((item, i) => (
                <AnimatedSection key={i} delay={0.1 * i + 0.3}>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full mt-0.5 flex items-center justify-center shrink-0" style={{ background: "rgba(76,175,80,0.15)" }}>
                      <div className="w-2 h-2 rounded-full bg-green-600" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.6}>
              <div className="mt-10 p-6 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(46,125,50,0.05), rgba(76,175,80,0.08))", border: "1px solid rgba(76,175,80,0.2)" }}>
                <p className="font-display text-xl text-gray-800 italic leading-relaxed">
                &quot;Our vision is a world where no child&quot;s potential is limited by the circumstances of their birth.&quot;
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80" alt="Founder" className="w-9 h-9 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Yogita Suryawanshi</div>
                    <div className="text-xs text-gray-500">Founder, Ruchi Foundation</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
