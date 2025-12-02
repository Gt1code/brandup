export default function ServiceCard({ icon, title, desc, list, color }) {
  return (
    <div
      className={`rounded-xl p-6 shadow-md bg-white/60 backdrop-blur-md border-l-4 h-full`}
      style={{ borderColor: color }}
    >
      <div className="mb-4">
        {icon && (
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#EEF7F5]">
            {icon}
          </div>
        )}
      </div>

      <h3 className="text-xl font-semibold mb-2 text-[#203959]">{title}</h3>

      <p className="text-sm text-gray-700 mb-4">{desc}</p>

      <ul className="space-y-1 text-sm text-gray-800">
        {list.map((item, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-[#96ADA5]">•</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
