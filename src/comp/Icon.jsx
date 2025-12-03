export const FormationIcon = ({
  size = 32,
  color = "#008576",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 12l3 3 5-5" />
  </svg>
);

export const RegistrationIcon = ({
  size = 32,
  color = "#002855",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2l7 4v6c0 5-3.8 9.4-7 10-3.2-.6-7-5-7-10V6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const BrandingIcon = ({
  size = 32,
  color = "#C28F2C",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 19l-4 1 1-4L17 4a2.5 2.5 0 1 1 3 3z" />
    <path d="M16 7l1 1" />
    <path d="M2 22h20" />
  </svg>
);

export const CoachingIcon = ({
  size = 32,
  color = "#008576",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 3v2" />
    <path d="M12 19v2" />
    <path d="M21 12h-2" />
    <path d="M5 12H3" />
  </svg>
);

export const CorporateSupportIcon = ({ size = 36, color = "#203959" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M9 12h6" />
    <path d="M9 16h3" />
    <path d="M6 12h.01" />
    <path d="M6 16h.01" />
  </svg>
);
