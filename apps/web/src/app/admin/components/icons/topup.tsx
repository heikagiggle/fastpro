import { IconProps } from '../../../components/icons/types';

export function TopupIcon({ className, primaryColor = '#0D0D0D'  }: IconProps) {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.6 8.1V4.5H10.4V8.1H14V9.9H10.4V13.5H8.6V9.9H5V8.1H8.6ZM9.5 18C4.5293 18 0.5 13.9707 0.5 9C0.5 4.0293 4.5293 0 9.5 0C14.4707 0 18.5 4.0293 18.5 9C18.5 13.9707 14.4707 18 9.5 18ZM9.5 16.2C11.4096 16.2 13.2409 15.4414 14.5912 14.0912C15.9414 12.7409 16.7 10.9096 16.7 9C16.7 7.09044 15.9414 5.25909 14.5912 3.90883C13.2409 2.55857 11.4096 1.8 9.5 1.8C7.59044 1.8 5.75909 2.55857 4.40883 3.90883C3.05857 5.25909 2.3 7.09044 2.3 9C2.3 10.9096 3.05857 12.7409 4.40883 14.0912C5.75909 15.4414 7.59044 16.2 9.5 16.2Z"
        fill={primaryColor}
      />
    </svg>
  );
}
