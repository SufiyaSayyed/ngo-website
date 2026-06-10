"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-80 flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80')" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(27,94,32,0.9), rgba(0,0,0,0.3))" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-green-300 text-xs font-semibold tracking-widest uppercase mb-2">Get in Touch</div>
            <h1 className="font-display text-4xl md:text-5xl text-white">Contact Us</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info sidebar */}
            <div className="lg:col-span-2">
              <SectionHeader tag="Contact" title="We'd Love to Hear From You" subtitle="Whether you have a question, want to partner, or simply want to learn more." />

              <div className="mt-10 space-y-6">
                {[
                  { icon: MapPin, title: "Visit Us", text: "Office 11-12, Venus Nook, Nr Chatrapati Shivaji Maharaj Statue, Pune-40" },
                  { icon: Mail, title: "Email", text: "info.rfpune@gmail.com" },
                  { icon: Phone, title: "Phone", text: "+91-8551887007, +91-9156484755" },
                  { icon: Clock, title: "Office Hours", text: "Mon–Fri: 9:00 AM – 6:00 PM\nSat: 10:00 AM – 2:00 PM" },
                ].map(({ icon: Icon, title, text }, i) => (
                  <AnimatedSection key={i} delay={i * 0.1}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(46,125,50,0.08)" }}>
                        <Icon className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-gray-800 mb-1">{title}</div>
                        <div className="text-sm text-gray-500 whitespace-pre-line">{text}</div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Form */}
            <AnimatedSection delay={0.3} direction="left" className="lg:col-span-3">
              <div className="bg-gray-50 rounded-3xl p-8 md:p-10">
                <h3 className="font-display text-2xl text-gray-900 mb-6">Send Us a Message</h3>
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {["Full Name", "Email Address"].map((label) => (
                      <div key={label}>
                        <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">{label}</label>
                        <input
                          type={label.includes("Email") ? "email" : "text"}
                          placeholder={label.includes("Email") ? "you@example.com" : "Jane Doe"}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent transition-all"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Subject</label>
                    <input
                      type="text"
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Your message..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent transition-all resize-none"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg"
                    style={{ background: "linear-gradient(135deg, #2E7D32, #4CAF50)" }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div
              className="rounded-3xl h-72 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #E8F5E9, #C8E6C9)", border: "2px dashed rgba(76,175,80,0.3)" }}
            >
              <div className="text-center">
                <MapPin className="w-12 h-12 text-green-400 mx-auto mb-3" />
                <div className="text-green-700 font-semibold">Interactive Map</div>
                <div className="text-sm text-green-500 mt-1">12, Seva Bhavan, Parel, Mumbai</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
