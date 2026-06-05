"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Clock, CheckCircle2, ArrowRight, Mail } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const timeline = [
  { step: "01", title: "Payment Gateway Integration", description: "Secure online payment system in final testing", status: "in-progress" },
  { step: "02", title: "80G Tax Exemption Setup", description: "Automated tax receipts for donors", status: "in-progress" },
  { step: "03", title: "Recurring Donation System", description: "Monthly giving program for sustained impact", status: "upcoming" },
  { step: "04", title: "Donor Portal Launch", description: "Track your impact in real time", status: "upcoming" },
];

export default function DonationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-32 px-4" style={{ background: "linear-gradient(160deg, #F5F7F9 0%, #E8F5E9 60%, #F5F7F9 100%)" }}>
      <div className="max-w-3xl w-full text-center">
        {/* Animated heart */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl"
          style={{ background: "linear-gradient(135deg, #2E7D32, #4CAF50)" }}
        >
          <Heart className="w-12 h-12 text-white fill-white" />
        </motion.div>

        <AnimatedSection>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-green-600 bg-green-50 px-3 py-1.5 rounded-full mb-5">
            <Clock className="w-3.5 h-3.5" /> Coming Soon
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-gray-900 mb-5">
            Your Generosity, <br />
            <span className="text-gradient">Amplified</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed mb-10">
            Our secure donation portal is nearly ready. Every rupee you give will be directed to putting a child in school. We're adding the final touches to ensure a seamless, transparent giving experience.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection delay={0.2}>
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-left mb-8">
            <h3 className="font-display text-xl text-gray-900 mb-6 text-center">What We're Building</h3>
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${item.status === "in-progress" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-400"}`}>
                    {item.status === "in-progress" ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : item.step}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-800">{item.title}</div>
                    <div className="text-xs text-gray-500">{item.description}</div>
                  </div>
                  <div className={`ml-auto text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${item.status === "in-progress" ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-400"}`}>
                    {item.status === "in-progress" ? "In Progress" : "Upcoming"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.35}>
          <p className="text-gray-500 mb-6 text-sm">Want to donate right now? Reach out to us directly.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-7 py-4 rounded-xl text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #2E7D32, #4CAF50)" }}
            >
              <Mail className="w-5 h-5" />
              Contact Us to Donate
            </Link>
            <Link
              href="/projects"
              className="flex items-center gap-2 px-7 py-4 rounded-xl border border-green-200 text-green-700 font-semibold hover:bg-green-50 transition-colors"
            >
              See Our Impact <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
