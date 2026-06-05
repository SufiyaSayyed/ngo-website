"use client";

import { motion } from "framer-motion";
import { Heart, Target, Eye, Users, Shield, Lightbulb, Globe } from "lucide-react";
import { teamMembers } from "@/data/impact";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";

const coreValues = [
  { icon: Lightbulb, title: "Education", description: "We believe learning is a fundamental right, not a privilege. Every decision we make is guided by what best serves the learner." },
  { icon: Users, title: "Inclusion", description: "We actively reach those left furthest behind — girls, children with disabilities, and those in the most remote areas." },
  { icon: Heart, title: "Empowerment", description: "We don't create dependency; we build agency. Our programs equip children and communities to thrive independently." },
  { icon: Shield, title: "Integrity", description: "We are transparent in our finances, accountable in our operations, and honest in our communication." },
  { icon: Globe, title: "Community", description: "We work with communities, not for them. Local voices, insights, and ownership shape everything we do." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80')" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(27,94,32,0.9), rgba(0,0,0,0.3))" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-green-300 text-xs font-semibold tracking-widest uppercase mb-2">About Us</div>
            <h1 className="font-display text-4xl md:text-5xl text-white">Our Story & Mission</h1>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-square">
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80" alt="Founder" className="w-full h-full object-cover" />
              </div>
            </AnimatedSection>
            <div>
              <SectionHeader tag="Our Story" title="Born from a Promise to One Child" />
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <AnimatedSection delay={0.2}>
                  <p>In 2010, Dr. Ananya Krishnan was working as an IAS officer in rural Maharashtra when she met Raju, a bright 8-year-old who had dropped out of school because his family could not afford the ₹200 uniform fee. That moment changed her life — and eventually, thousands of lives.</p>
                </AnimatedSection>
                <AnimatedSection delay={0.3}>
                  <p>She resigned from her post and registered Ruchi (meaning "Ray of Hope") with a simple mandate: remove every barrier standing between an underprivileged child and their education. Starting with a single community in Parel, Mumbai, the foundation grew rapidly as results spoke for themselves.</p>
                </AnimatedSection>
                <AnimatedSection delay={0.4}>
                  <p>Today, Ruchi Foundation operates across Maharashtra and Goa, running 150+ learning centers, awarding scholarships, training teachers, and building digital classrooms. But we have not forgotten Raju — he now holds an engineering degree and volunteers with us every month.</p>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader tag="Purpose" title="Vision & Mission" centered />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Eye,
                title: "Our Vision",
                text: "A world where every child in India, regardless of their economic circumstances, has access to quality education and the opportunity to realize their full potential.",
                color: "#2E7D32",
              },
              {
                icon: Target,
                title: "Our Mission",
                text: "To systematically remove the barriers — financial, social, and infrastructural — that prevent underprivileged children from accessing and completing quality education, while building communities that value and invest in learning.",
                color: "#4CAF50",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.2}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${item.color}15` }}>
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-display text-2xl text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader tag="What We Stand For" title="Our Core Values" centered />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {coreValues.map((value, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-2xl p-6 text-center border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4 bg-green-50">
                    <value.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <h4 className="font-display text-lg text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader tag="Our People" title="The Team Behind the Mission" subtitle="Dedicated professionals who left comfortable careers to serve the children who need them most." centered />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={member.id} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h4 className="font-display text-lg text-gray-900">{member.name}</h4>
                    <div className="text-xs font-semibold text-green-600 mb-2">{member.role}</div>
                    <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
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
