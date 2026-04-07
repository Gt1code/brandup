import {
  footerCompany,
  footerServices,
  footerLegal,
  socialIconsContainer,
} from "@/utils/MapElements";
import { Link } from "react-router-dom";

export default function Footer() {
  const date = new Date();

  return (
    <footer
      id="contact"
      className="scroll-mt-12 bg-[#203959] pt-16 pb-10 text-[#ABB7B3]"
    >
      <article className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 md:grid-cols-5">
        {/* ── Brand ── */}
        <section className="sm:col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 text-xl font-semibold text-white lg:text-2xl">
            <img
              src="/asset/nlogo.jpg"
              alt="BrandUp Logo"
              className="size-8 rounded-full"
            />
            <h2>
              The Corporate Brand<span className="text-[#96ADA5]">Up</span> Ltd
            </h2>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[#96ADA5]">
            End-to-end corporate support in business formation, compliance,
            admin services, branding, and coaching.
          </p>

          {/* Socials */}
          <section className="mt-6 flex items-center gap-4">
            {socialIconsContainer.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-label={item.arialLabel}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                {item.socialIcon}
              </a>
            ))}
          </section>
        </section>

        {/* ── Company Links ── */}
        <section>
          <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
          <ul className="space-y-3">
            {footerCompany.map((company) => (
              <li key={company.href}>
                <a
                  href={company.href}
                  className="text-sm transition-colors hover:text-white"
                >
                  {company.text}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Services ── */}
        <section>
          <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
          <ul className="space-y-3">
            {footerServices.map((service) => (
              <li key={service.href}>
                <a
                  href={service.href}
                  className="text-sm transition-colors hover:text-white"
                >
                  {service.text}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Legal ── */}
        <section>
          <h3 className="mb-4 text-lg font-semibold text-white">Legal</h3>
          <ul className="space-y-3">
            {footerLegal.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="text-sm transition-colors hover:text-white"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Contact ── */}
        <section>
          <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>
              Email:{" "}
              <a
                className="transition-colors duration-200 ease-in-out hover:text-white"
                href="mailto:thecorporatebrandup@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                thecorporatebrandup
                <span className="md:hidden">@gmail.com</span>
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+2349064207254"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                +234 906 420 7254
              </a>
            </li>
            <li>
              <span className="font-semibold text-[#96ADA5]">
                Business Hours:
              </span>
              <br />
              <span>Mon &ndash; Fri: 9am &ndash; 6pm</span>
              <br />
              <span>Sat: 9am &ndash; 12pm</span>
            </li>
            <li>Location: Delta, Nigeria</li>
          </ul>
        </section>
      </article>

      {/* ── Bottom Bar ── */}
      <section className="mt-12 border-t border-[#416772] px-6 pt-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm sm:flex-row">
          {/* Copyright */}
          <p className="text-center text-[#96ADA5] sm:text-left">
            &copy; {date.getFullYear()} The Corporate BrandUp LTD. All rights
            reserved.
          </p>

          {/* Legal inline links */}
          <nav
            aria-label="Legal links"
            className="flex flex-wrap justify-center gap-x-5 gap-y-2"
          >
            {footerLegal.map((item, i) => (
              <span key={item.href} className="flex items-center gap-5">
                <Link
                  to={item.href}
                  className="text-[#96ADA5] underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {item.text}
                </Link>
                {i < footerLegal.length - 1 && (
                  <span className="text-[#416772]" aria-hidden>
                    ·
                  </span>
                )}
              </span>
            ))}
          </nav>

          {/* Back to top */}
          <a
            href="#home"
            className="flex items-center gap-2 rounded-2xl border border-[#416772] px-3 py-2 text-sm transition-opacity hover:opacity-75"
          >
            Back To Top
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
          </a>
        </div>
      </section>
    </footer>
  );
}
