import { useState, useRef, useEffect } from "react";
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
function HoverMenu({ label, children, href }) {
  const ref = useRef(null);
  const [menuState, toggle] = useMenuState({ transition: true });
  const { anchorProps, hoverProps } = useHover(menuState.state, toggle);

  return (
    <li className="relative">
      <a
        href={href}
        ref={ref}
        {...anchorProps}
        className="relative cursor-pointer pr-4 transition-colors hover:text-[#ABB7B3]"
      >
        {label}
        <ChevronDown className="absolute right-0 bottom-0.5 size-[0.9rem]" />
      </a>

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
        { label: "Business Formation & Development", href: "#formation" },
        { label: "Business Registration Services", href: "#registration" },
        { label: "Business Branding", href: "#branding" },
        { label: "Business Coaching & Advisory", href: "#coaching" },
        { label: "Corporate and Administrative Support", href: "#support" },
      ],
    },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQs", href: "#faqs" },
  ];

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
        <h1 className="text-xl font-semibold tracking-wide select-none">
          CORPORATE BRAND<span className="text-red-600">UP</span>
        </h1>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <X className="h-6 w-6 cursor-pointer text-[#ABB7B3] hover:text-white" />
          ) : (
            <Menu className="h-6 w-6 cursor-pointer text-[#ABB7B3] hover:text-white" />
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-4 md:flex lg:gap-9">
          <li key="home" className="group relative">
            <a
              href="#home"
              className="cursor-pointer transition-colors hover:text-[#ABB7B3]"
            >
              Home
            </a>
          </li>

          <HoverMenu href="#about" label="About">
            <MenuItem>
              <a href="#about">Our Company</a>
            </MenuItem>
            <MenuItem>
              <a href="#founder">Meet The Founder</a>
            </MenuItem>
          </HoverMenu>

          <HoverMenu href="#services" label="Services">
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
          className="ml-4 hidden rounded-xl bg-[#96ADA5] px-5 py-2 text-center font-semibold text-[#203959] transition-colors hover:bg-[#416772] hover:text-[#ABB7B3] md:block"
        >
          Contact Us
        </a>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-[#416772] bg-[#203959] md:hidden">
          <ul className="flex flex-col gap-4 p-4">
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

            {/* Mobile CTA */}
            <a
              onClick={() => setOpen(!open)}
              href="#contact"
              className="mt-2 rounded-xl bg-[#96ADA5] px-5 py-2 text-center font-semibold text-[#203959] transition-colors hover:bg-[#416772] hover:text-[#ABB7B3]"
            >
              Contact Us
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
