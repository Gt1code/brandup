import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";

import { navItems, aboutMenuItem, serviceMenuItem } from "@/utils/MapElements";
import HoverMenu from "./HoverMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");

    const handleScroll = () => {
      if (!hero) return;

      const heroBottom = hero.offsetTop + hero.offsetHeight;

      if (window.scrollY >= heroBottom - 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full text-white backdrop-blur-[6.4px] transition-colors duration-300 ${
        isScrolled
          ? "bg-[#203959]/90 shadow-lg"
          : "bg-[rgba(218,237,232,0.13)] shadow-white/20"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img
            src="/asset/nlogo.jpg"
            alt="brandup logo"
            className="size-8 rounded-full md:hidden"
          />

          <h1 className="font-semibold tracking-wide select-none lg:text-xl">
            THE CORPORATE BRAND<span className="text-red-600">UP</span>
          </h1>
        </a>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <X className="h-6 w-6 cursor-pointer text-[#ABB7B3] hover:text-white" />
          ) : (
            <Menu className="h-6 w-6 cursor-pointer text-[#ABB7B3] hover:text-white" />
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-3.5 md:flex lg:gap-9">
          <li key="home" className="group relative">
            <a
              href="#"
              className="cursor-pointer transition-colors hover:text-[#ABB7B3]"
            >
              Home
            </a>
          </li>

          <HoverMenu href="#about" label="About">
            {aboutMenuItem.map((about) => (
              <MenuItem key={about.href}>
                <a href={about.href}>{about.text}</a>
              </MenuItem>
            ))}
          </HoverMenu>

          <HoverMenu href="#services" label="Services">
            {serviceMenuItem.map((service) => (
              <MenuItem key={service.href}>
                <a href={service.href}>{service.text}</a>
              </MenuItem>
            ))}
          </HoverMenu>

          <li key="testimonials" className="group relative">
            <a
              href="#testimonials"
              className="cursor-pointer transition-colors hover:text-[#ABB7B3]"
            >
              Testimonials
            </a>
          </li>

          <li key="faqs" className="group relative">
            <a
              href="#faqs"
              className="cursor-pointer transition-colors hover:text-[#ABB7B3]"
            >
              FAQs
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="ml-4 hidden rounded-xl bg-[#96ADA5] py-2 text-center font-semibold text-[#203959] transition-colors hover:bg-[#416772] hover:text-[#ABB7B3] md:block md:px-4 lg:px-5"
        >
          Contact Us
        </a>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute right-0 z-50 flex h-[calc(100vh-56px)] w-full max-w-[440px] transform flex-col border-t border-[#416772] bg-[#203959] shadow-md shadow-black transition-transform duration-400 ease-out md:hidden ${open ? "translate-x-0" : "translate-x-full"} `}
      >
        {/* Scrollable Nav Items */}
        <ul className="flex flex-col gap-4 overflow-y-auto p-4">
          {navItems.map((item) => (
            <li key={item.label}>
              {!item.children ? (
                <a
                  onClick={() => setOpen(!open)}
                  href={item.href}
                  className="block py-2 select-none hover:text-[#96ADA5]"
                >
                  {item.label}
                </a>
              ) : (
                <details className="group">
                  <summary className="cursor-pointer py-2 select-none hover:text-[#96ADA5]">
                    {item.label}
                  </summary>
                  <ul className="mt-2 flex flex-col gap-2 pl-4">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          onClick={() => setOpen(!open)}
                          href={child.href}
                          className="block py-1 text-sm hover:text-[#96ADA5]"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </li>
          ))}
        </ul>

        {/* CTA at Bottom */}
        <a
          onClick={() => setOpen(!open)}
          href="#contact"
          className="mx-4 mt-auto mb-4 rounded-xl bg-[#96ADA5] px-5 py-3 text-center font-semibold text-[#203959] transition-colors hover:bg-[#416772] hover:text-[#ABB7B3]"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
}
