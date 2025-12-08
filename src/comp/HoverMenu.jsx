import { ControlledMenu, useHover, useMenuState } from "@szhsin/react-menu";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

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

export default HoverMenu;
