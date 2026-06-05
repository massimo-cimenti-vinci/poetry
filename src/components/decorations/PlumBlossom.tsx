export function PlumBlossom({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 155 C8 120 18 95 32 78 C42 66 52 58 58 48"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M32 78 C48 72 62 62 72 48 C82 34 88 22 92 10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M58 48 C68 52 78 50 86 42"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx="92" cy="10" r="3" fill="currentColor" fillOpacity="0.85" />
      <circle cx="86" cy="42" r="2.5" fill="currentColor" fillOpacity="0.7" />
      <circle cx="72" cy="48" r="2.8" fill="currentColor" fillOpacity="0.75" />
      <circle cx="58" cy="48" r="2.2" fill="currentColor" fillOpacity="0.65" />
      <path
        d="M38 90 C34 86 30 88 28 92 C26 96 28 100 32 100 C36 100 40 96 38 90Z"
        fill="currentColor"
        fillOpacity="0.55"
      />
      <path
        d="M78 38 C74 34 70 36 68 40 C66 44 68 48 72 48 C76 48 80 44 78 38Z"
        fill="currentColor"
        fillOpacity="0.5"
      />
    </svg>
  );
}
