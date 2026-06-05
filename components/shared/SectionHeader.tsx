"use client";

import AnimatedSection from "./AnimatedSection";

interface Props {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({ tag, title, subtitle, centered = false, light = false }: Props) {
  return (
    <div className={centered ? "text-center" : ""}>
      {tag && (
        <AnimatedSection delay={0}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-green-600 bg-green-50 px-3 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            {tag}
          </span>
        </AnimatedSection>
      )}
      <AnimatedSection delay={0.1}>
        <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 ${light ? "text-white" : "text-gray-900"}`}>
          {title}
        </h2>
      </AnimatedSection>
      {subtitle && (
        <AnimatedSection delay={0.2}>
          <p className={`text-lg leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-white/75" : "text-gray-500"}`}>
            {subtitle}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}
