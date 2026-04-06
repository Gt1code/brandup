import { Menu, X } from "lucide-react";

const ToggleBtn = ({ open, setOpen }) => {
  return (
    <button
      className="border border-transparent focus-visible:border-white md:hidden"
      onClick={() => setOpen(!open)}
      aria-label={open ? "Close navigation menu" : "Open navigation menu"}
    >
      {open ? (
        <X className="h-6 w-6 cursor-pointer text-[#ABB7B3] hover:text-white" />
      ) : (
        <Menu className="h-6 w-6 cursor-pointer text-[#ABB7B3] hover:text-white" />
      )}
    </button>
  );
};

export default ToggleBtn;
