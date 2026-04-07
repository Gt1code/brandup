import { Link } from "react-router-dom";
import DownloadPolicyBtn from "./DownloadPolicyBtn";

export default function PolicyLayout({
  badge,
  title,
  lastUpdated,
  filePath,
  children,
}) {
  return (
    <main className="min-h-screen w-full bg-[#F5F7F8]">
      {/* Hero Banner  */}
      <section className="relative overflow-hidden bg-[#203959] px-6 py-16 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full border-50 border-white/5"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full border-35 border-[#416772]/20"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-[#A6BCB5]/30 bg-[#A6BCB5]/10 px-4 py-1 text-xs font-semibold tracking-widest text-[#A6BCB5] uppercase">
            {badge}
          </span>
          <h1 className="font-hero mt-3 text-3xl font-bold text-white md:text-5xl">
            {title}
          </h1>
          {lastUpdated && (
            <p className="mt-4 text-sm text-white/50">
              Last Updated: {lastUpdated}
            </p>
          )}
          <p className="mt-3 text-sm font-medium text-[#A6BCB5]">
            The Corporate BrandUp Ltd
          </p>

          {/* Download button */}
          <div className="mt-8 flex justify-center">
            <DownloadPolicyBtn fileName={title} filePath={filePath} />
          </div>
        </div>
      </section>

      {/* Content Body */}
      <section className="mx-auto max-w-3xl px-6 py-14 md:py-20">
        <div className="space-y-10">{children}</div>

        {/* Back link */}
        <div className="mt-16 border-t border-[#203959]/15 pt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#203959] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}

// Shared sub-components

export function PolicySection({ number, title, children }) {
  return (
    <section>
      <div className="mb-4 flex items-start gap-4">
        {number && (
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#203959] text-xs font-bold text-white">
            {number}
          </span>
        )}
        <h2 className="text-lg font-bold text-[#203959] md:text-xl">{title}</h2>
      </div>
      <div className="ml-0 space-y-3 text-sm leading-relaxed text-[#203959]/70 md:ml-12 md:text-base">
        {children}
      </div>
    </section>
  );
}

export function PolicyList({ items }) {
  return (
    <ul className="mt-2 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#416772]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PolicyHighlight({ children }) {
  return (
    <div className="rounded-2xl border border-[#416772]/20 bg-[#416772]/8 px-5 py-4 text-sm text-[#203959]/80">
      {children}
    </div>
  );
}
