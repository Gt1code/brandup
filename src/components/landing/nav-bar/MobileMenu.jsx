import { navItems } from "@/utils/MapElements";
import { Link } from "react-router-dom";

const MobileMenu = ({ open, setOpen }) => {
  return (
    <section
      className={`absolute right-0 z-50 flex h-[calc(100vh-56px)] w-full max-w-[440px] transform flex-col border-t border-[#416772] bg-[#203959] shadow-md shadow-black transition-transform duration-400 ease-out md:hidden ${open ? "translate-x-0" : "translate-x-full"} `}
    >
      {/* Diagonal stripe accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 h-full w-1 bg-linear-to-b from-transparent via-[#A6BCB5]/30 to-transparent md:w-0.5"
      />

      {/* Scrollable Nav Items */}
      <ul className="flex flex-col gap-4 overflow-y-auto p-4">
        {navItems.map((item) => (
          <li key={item.label}>
            {!item.children ? (
              item.href.startsWith("#") ? (
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 select-none hover:text-[#96ADA5]"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 select-none hover:text-[#96ADA5]"
                >
                  {item.label}
                </Link>
              )
            ) : (
              <details className="group">
                <summary className="cursor-pointer py-2 select-none hover:text-[#96ADA5]">
                  {item.label}
                </summary>

                <ul className="mt-2 flex flex-col gap-2 pl-4">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      {child.href.startsWith("#") ? (
                        <a
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-1 text-sm hover:text-[#96ADA5]"
                        >
                          {child.label}
                        </a>
                      ) : (
                        <Link
                          to={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-1 text-sm hover:text-[#96ADA5]"
                        >
                          {child.label}
                        </Link>
                      )}
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
        className="mx-4 mt-auto mb-4 rounded-xl bg-[#A6BCB5] px-5 py-3 text-center font-semibold text-[#203959] transition-colors hover:bg-[#416772] hover:text-white"
      >
        Contact Us
      </a>
    </section>
  );
};

export default MobileMenu;
