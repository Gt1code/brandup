import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { BiLogoTiktok } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-12 bg-[#203959] pt-16 pb-10 text-[#ABB7B3]"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-2xl font-semibold text-white">
            <img
              src="/asset/logo.jpg"
              alt="BrandUp Logo"
              className="size-10 rounded-full"
            />
            <h2>
              Corporate Brand<span className="text-[#96ADA5]">Up</span>
            </h2>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[#96ADA5]">
            End-to-end corporate support covering business formation,
            compliance, administrative services, brand identity development, and
            business coaching delivered with clarity and integrity.
          </p>

          {/* Socials */}
          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://wa.me/message/4F2ZBE3VOLNEC1"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              <FaWhatsapp size={25} />
            </a>
            <a
              href="https://www.tiktok.com/@thecorporatebrandup?_r=1&_t=ZM-91tdnXKKzvs"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              <BiLogoTiktok size={25} />
            </a>
            <a
              href="#"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              <FaInstagram size={25} />
            </a>
            <a
              href="mailto:thecorporatebrandup@gmail.com?subject=Business Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              <MdOutlineEmail size={29} />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="transition-colors hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="transition-colors hover:text-white">
                About
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="transition-colors hover:text-white"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="#faqs" className="transition-colors hover:text-white">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#formation"
                className="transition-colors hover:text-white"
              >
                Business Formation
              </a>
            </li>
            <li>
              <a
                href="#registration"
                className="transition-colors hover:text-white"
              >
                Business Registration
              </a>
            </li>
            <li>
              <a
                href="#branding"
                className="transition-colors hover:text-white"
              >
                Brand Identity Development
              </a>
            </li>
            <li>
              <a
                href="#coaching"
                className="transition-colors hover:text-white"
              >
                Business Coaching
              </a>
            </li>
            <li>
              <a href="#support" className="transition-colors hover:text-white">
                Administrative Support
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>
              Email:{" "}
              <a
                className="transition-colors duration-200 ease-in-out hover:text-white"
                href="mailto:thecorporatebrandup@gmail.com"
                target="_blank"
              >
                thecorporatebrandup<span className="md:hidden">@gmail.com</span>
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+234 906 420 7254"
                target="_blank"
                className="hover:text-white"
              >
                +234 906 420 7254
              </a>
            </li>
            <li>
              <span className="font-semibold text-[#96ADA5]">
                Business Hours
              </span>
              <br />
              <span>Mon &ndash; Fri: 9AM &ndash; 6PM</span> <br />
              <span>Sat: 9AM &ndash; 12PM</span>
            </li>
            <li>Location: Delta, Nigeria</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-[#416772] pt-6 text-center text-sm">
        <p>&copy; 2025 The Corporate BrandUp LTD. All rights reserved.</p>
        <p className="flex justify-center">
          <a
            className="mt-4 flex w-fit items-center justify-center gap-2 rounded-2xl border border-black p-2 hover:opacity-85"
            href="#home"
          >
            Back To Top
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
          </a>
        </p>
      </div>
    </footer>
  );
}
