import React from "react";
import { Facebook, Instagram, X, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#203959] text-[#ABB7B3] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold text-white">
            Corporate Brand<span className="text-[#96ADA5]">Up</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#96ADA5]">
            End-to-end corporate support covering company formation, compliance,
            administrative services, brand identity development, and business
            coaching delivered with clarity and integrity.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <X size={20} />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-white transition-colors"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="#faqs" className="hover:text-white transition-colors">
                FAQs
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#formation"
                className="hover:text-white transition-colors"
              >
                Company Formation
              </a>
            </li>
            <li>
              <a
                href="#compliance"
                className="hover:text-white transition-colors"
              >
                Compliance & Administrative Support
              </a>
            </li>
            <li>
              <a
                href="#branding"
                className="hover:text-white transition-colors"
              >
                Brand Identity Development
              </a>
            </li>
            <li>
              <a
                href="#coaching"
                className="hover:text-white transition-colors"
              >
                Business Coaching
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>
              Email:{" "}
              <a
                className="text-white"
                href="mailto:thecorporatebrandup@gmail.com"
                target="_blank"
              >
                thecorporatebrandup@gmail.com
              </a>
            </li>
            <li>
              Phone: <span className="text-white">+234 906 420 7254</span>
            </li>
            <li>
              <span className="text-[#96ADA5] font-semibold">
                Business Hours
              </span>
              <br />
              <span className="text-white">
                Mon &ndash; Fri: 9AM &ndash; 6PM
              </span>{" "}
              <br />
              <span className="text-white">Sat: 9AM &ndash; 12PM</span>
            </li>
            <li>Location: Delta, Nigeria</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#416772] mt-12 pt-6 text-center text-sm">
        <p>&copy; 2025 Corporate BrandUp. All rights reserved.</p>
      </div>
    </footer>
  );
}
