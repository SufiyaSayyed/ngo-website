"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          transparent
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/logo.jpeg"
                alt="Ruchi Foundation Logo"
                width={50}
                height={50}
                className="h-10 w-auto rounded-3xl object-contain"
              />
              <div>
                <div
                  className={`font-display text-lg leading-tight ${
                    transparent ? "text-white" : "text-gray-900"
                  }`}
                >
                  Ruchi Foundation
                </div>
                <div
                  className={`text-[10px] tracking-widest uppercase font-medium ${
                    transparent ? "text-green-200" : "text-green-600"
                  }`}
                >
                  Rising &bull; Underprivileged &bull; Hope &bull; Inspiration
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      transparent
                        ? active
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                        : active
                        ? "text-green-700"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <motion.div
                        layoutId="nav-indicator"
                        className={`absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full ${
                          transparent ? "bg-white" : "bg-green-600"
                        }`}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/volunteer"
                className={`text-sm font-medium px-4 py-2 rounded-lg border transition-all duration-200 ${
                  transparent
                    ? "border-white/40 text-white hover:bg-white/10"
                    : "border-green-200 text-green-700 hover:bg-green-50"
                }`}
              >
                Volunteer
              </Link>
              <Link
                href="/donation"
                className="flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-100"
                style={{
                  background: "linear-gradient(135deg, #2E7D32, #4CAF50)",
                }}
              >
                <Heart className="w-4 h-4" />
                Donate
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-lg ${
                transparent ? "text-white" : "text-gray-700"
              }`}
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-white/98 backdrop-blur-xl border-b border-gray-100 shadow-xl md:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-green-50 text-green-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
                <Link
                  href="/volunteer"
                  className="text-center px-4 py-3 rounded-xl border border-green-200 text-green-700 font-medium"
                >
                  Volunteer
                </Link>
                <Link
                  href="/donation"
                  className="text-center flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-white font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #2E7D32, #4CAF50)",
                  }}
                >
                  <Heart className="w-4 h-4" />
                  Donate Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
