import { IconProps } from './types';

export function EyeClosedIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2 12s3-6 10-6 10 6 10 6-3 6-10 6-10-6-10-6z"
      ></path>
      <line
        x1="3"
        y1="3"
        x2="21"
        y2="21"
        stroke="currentColor"
        strokeWidth="2"
      ></line>
    </svg>
  );
}
