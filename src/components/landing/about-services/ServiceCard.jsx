import { motion, useAnimation } from "framer-motion";

export default function Card({ icon, title, desc, list, color }) {
  const iconControls = useAnimation();

  const shakeIcon = async () => {
    await iconControls.start({
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    });
  };

  return (
    <div
      className="group h-full rounded-xl border-l-4 bg-white/60 p-6 shadow-md backdrop-blur-md"
      style={{ borderColor: color }}
      onMouseEnter={shakeIcon}
    >
      <div className="mb-4">
        {icon && (
          <motion.div
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF7F5]"
            animate={iconControls}
            initial={{ rotate: 0 }}
          >
            {icon}
          </motion.div>
        )}
      </div>

      <h3 className="mb-2 text-xl font-semibold text-[#203959]">{title}</h3>

      <p className="mb-4 text-sm text-gray-700">{desc}</p>

      <ul className="space-y-1 text-sm text-gray-800">
        {list.map((item, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-[#96ADA5]">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
