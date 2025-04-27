'use client';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 4C18.4 4 17 5.2 17 7C17 8.8 18.4 10 20 10C21.6 10 23 8.8 23 7C23 5.2 21.6 4 20 4Z"
        fill="currentColor"
      />
      <path
        d="M20 10V16M20 16L14 26M20 16L26 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 32C10.8 32 10 31.2 10 30C10 28.8 10.8 28 12 28C13.2 28 14 28.8 14 30C14 31.2 13.2 32 12 32Z"
        fill="currentColor"
      />
      <path
        d="M28 32C26.8 32 26 31.2 26 30C26 28.8 26.8 28 28 28C29.2 28 30 28.8 30 30C30 31.2 29.2 32 28 32Z"
        fill="currentColor"
      />
    </svg>
  );
}
