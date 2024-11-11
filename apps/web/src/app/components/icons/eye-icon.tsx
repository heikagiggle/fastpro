import { IconProps } from './types';

export function EyeIcon({ className, primaryColor = '#4D4D4D' }: IconProps) {
  return (
    <svg
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.15934 0.290039C4.28728 0.290039 1.83455 2.07646 0.84082 4.59812C1.83455 7.11978 4.28728 8.9062 7.15934 8.9062C10.0314 8.9062 12.4841 7.11978 13.4779 4.59812C12.4841 2.07646 10.0314 0.290039 7.15934 0.290039ZM7.15934 7.47017C5.57396 7.47017 4.28728 6.18349 4.28728 4.59812C4.28728 3.01274 5.57396 1.72607 7.15934 1.72607C8.74471 1.72607 10.0314 3.01274 10.0314 4.59812C10.0314 6.18349 8.74471 7.47017 7.15934 7.47017ZM7.15934 2.87489C6.20581 2.87489 5.4361 3.6446 5.4361 4.59812C5.4361 5.55164 6.20581 6.32135 7.15934 6.32135C8.11286 6.32135 8.88257 5.55164 8.88257 4.59812C8.88257 3.6446 8.11286 2.87489 7.15934 2.87489Z"
        fill={primaryColor}
      />
    </svg>
  );
}
