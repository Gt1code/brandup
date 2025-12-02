import { useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  ControlledMenu,
  MenuItem,
  useHover,
  useMenuState,
} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";

// Reusable hover dropdown component
function HoverMenu({ label, children }) {
  const ref = useRef(null);
  const [menuState, toggle] = useMenuState({ transition: true });
  const { anchorProps, hoverProps } = useHover(menuState.state, toggle);

  return (
    <li className="relative">
      <p
        ref={ref}
        {...anchorProps}
        className="hover:text-[#ABB7B3] transition-colors cursor-pointer relative pr-4"
      >
        {label}
        <ChevronDown className="size-[0.9rem] absolute right-0 bottom-0.5" />
      </p>

      <ControlledMenu
        {...hoverProps}
        {...menuState}
        anchorRef={ref}
        onClose={() => toggle(false)}
      >
        {children}
      </ControlledMenu>
    </li>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    {
      label: "About",
      children: [
        { label: "Our Company", href: "#about" },
        { label: "Meet the Founder", href: "#founder" },
      ],
    },
    {
      label: "Services",
      children: [
        { label: "Company Formation", href: "#formation" },
        { label: "Compliance & Admin", href: "#compliance" },
        { label: "Brand Identity", href: "#branding" },
        { label: "Business Coaching", href: "#coaching" },
      ],
    },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#203959] text-white bg-linear-to-r/srgb from-[#334963] via-[#141E30] to-[#334963] shadow-md shadow-white/20">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-wide">
          CORPORATE BRAND<span className="text-red-600">UP</span>
        </h1>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <X className="w-6 h-6 hover:text-white text-[#ABB7B3] cursor-pointer" />
          ) : (
            <Menu className="w-6 h-6 hover:text-white text-[#ABB7B3] cursor-pointer" />
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-9">
          <li key="home" className="relative group">
            <a
              href="#home"
              className="hover:text-[#ABB7B3]  transition-colors cursor-pointer"
            >
              Home
            </a>
          </li>

          <HoverMenu label="About">
            <MenuItem>
              <a href="#about">Our Company</a>
            </MenuItem>
            <MenuItem>
              <a href="#founder">Meet The Founder</a>
            </MenuItem>
          </HoverMenu>

          <HoverMenu label="Services">
            <MenuItem>
              <a href="#formation">Business Formation & Development</a>
            </MenuItem>
            <MenuItem>
              <a href="#registration">Business Registration Services</a>
            </MenuItem>
            <MenuItem>
              <a href="#branding">Business Branding</a>
            </MenuItem>
            <MenuItem>
              <a href="#coaching">Business Coaching & Advisory</a>
            </MenuItem>
            <MenuItem>
              <a href="#support">Corporate & Administrative Support</a>
            </MenuItem>
          </HoverMenu>

          <li key="testimonials" className="relative group">
            <a
              href="testimonials"
              className="hover:text-[#ABB7B3] transition-colors cursor-pointer"
            >
              Testimonials
            </a>
          </li>

          <li key="faqs" className="relative group">
            <a
              href="#faqs"
              className="hover:text-[#ABB7B3] transition-colors cursor-pointer"
            >
              FAQs
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:block text-center ml-4 px-5 py-2 rounded-xl bg-[#96ADA5] text-[#203959] font-semibold hover:bg-[#416772] hover:text-[#ABB7B3] transition-colors"
        >
          Contact Us
        </a>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#203959] border-t border-[#416772]">
          <ul className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                {!item.children ? (
                  <a
                    onClick={() => setOpen(!open)}
                    href={item.href}
                    className="block py-2 hover:text-[#96ADA5] select-none"
                  >
                    {item.label}
                  </a>
                ) : (
                  <details className="group">
                    <summary className="cursor-pointer py-2 hover:text-[#96ADA5] select-none">
                      {item.label}
                    </summary>
                    <ul className="pl-4 flex flex-col gap-2 mt-2">
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

            {/* Mobile CTA */}
            <a
              href="#consultation"
              className="mt-2 px-5 py-2 rounded-xl bg-[#96ADA5] text-[#203959] font-semibold hover:bg-[#416772] hover:text-[#ABB7B3] transition-colors text-center"
            >
              Contact Us
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
