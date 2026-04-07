import { FiDownload } from "react-icons/fi";

export default function DownloadPolicyBtn({ fileName, filePath }) {
  return (
    <a
      href={filePath}
      target="_blank"
      aria-label={`Download ${fileName} as PDF`}
      className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-[#A6BCB5]/40 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition-all duration-300 select-none hover:border-[#A6BCB5] hover:bg-[#A6BCB5]/20 hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#A6BCB5] focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <FiDownload
        size={15}
        className="transition-transform duration-300 group-hover:-translate-y-0.5"
        aria-hidden
      />
      Download {fileName}
    </a>
  );
}
