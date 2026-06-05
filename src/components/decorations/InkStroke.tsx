export function InkStroke({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      preserveAspectRatio="xMaxYMax meet"
    >
      <path
        d="M10 45 C35 38 55 52 78 40 C102 28 118 18 145 32 C162 42 175 48 190 35"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeOpacity="0.55"
      />
      <path
        d="M25 52 C48 48 68 58 95 50 C120 42 140 55 168 44"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeOpacity="0.35"
      />
      <ellipse
        cx="42"
        cy="44"
        rx="10"
        ry="4"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <ellipse
        cx="130"
        cy="38"
        rx="14"
        ry="5"
        fill="currentColor"
        fillOpacity="0.15"
      />
    </svg>
  );
}
