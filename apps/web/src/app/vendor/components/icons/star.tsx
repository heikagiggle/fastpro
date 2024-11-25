import { IconProps } from '../../../components/icons/types';

export function StarIcon({ className, primaryColor = '#F1A80D' }: IconProps) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.9999 10.7561L2.7681 13.1249L3.7131 8.3681L0.1521 5.0753L4.9683 4.5041L6.9999 0.100098L9.0315 4.5041L13.8477 5.0753L10.2867 8.3681L11.2317 13.1249L6.9999 10.7561Z"
        fill={primaryColor}
      />
    </svg>
  );
}
