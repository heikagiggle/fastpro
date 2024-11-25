import { IconProps } from '../../../components/icons/types';

export function FilterIcon({ className }: IconProps) {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 6H14M1.5 1H16.5M6.5 11H11.5"
        stroke="#344054"
        stroke-width="1.67"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
