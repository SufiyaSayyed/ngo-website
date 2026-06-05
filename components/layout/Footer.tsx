import Link from "next/link";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const SocialIcons = [
  { label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { label: "Instagram", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" },
  { label: "LinkedIn", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
  { label: "YouTube", path: "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "Donate", href: "/donation" },
  { label: "Volunteer", href: "/volunteer" },
];

const programs = [
  "Education Support",
  "Scholarships",
  "Community Libraries",
  "Digital Learning",
  "Teacher Training",
  "After-School Centers",
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #2E7D32, #4CAF50)" }}>
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-display text-lg text-white leading-tight">Ruchi</div>
                <div className="text-[10px] tracking-widest uppercase text-green-400">Foundation</div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Empowering underprivileged children through quality education, mentorship, and community support since 2010.
            </p>
            <div className="flex items-center gap-3">
              {SocialIcons.map((social, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-700 hover:text-white transition-all duration-200"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Our Programs</h4>
            <ul className="space-y-2.5">
              {programs.map((program) => (
                <li key={program}>
                  <span className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-200 cursor-pointer">
                    {program}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">12, Seva Bhavan, Parel, Mumbai 400 012, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-green-400 shrink-0" />
                <a href="tel:+912222334455" className="text-sm text-gray-400 hover:text-green-400 transition-colors">+91 22 2233 4455</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-green-400 shrink-0" />
                <a href="mailto:ruchifoundation.org" className="text-sm text-gray-400 hover:text-green-400 transition-colors">ruchifoundation.org</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">© 2026 Ruchi Foundation. All rights reserved. | Registered NGO under Indian Trusts Act</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-400">Terms of Use</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-400">Annual Report</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
