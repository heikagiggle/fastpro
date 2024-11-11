import { IconProps } from '../../../components/icons/types';

export function ReportIcon({ className, primaryColor = '#666666' }: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.25 1.40725C9.4975 1.3855 9.74725 1.375 10 1.375C14.7633 1.375 18.625 5.23675 18.625 10C18.625 10.2528 18.6145 10.5025 18.5928 10.75H17.4633C17.0868 14.5398 13.8888 17.5 10 17.5C5.85775 17.5 2.5 14.1423 2.5 10C2.5 6.11125 5.46025 2.91325 9.25 2.5375V1.4065V1.40725ZM9.25 10.75V4.0465C7.73703 4.23901 6.35414 5.0004 5.38239 6.17591C4.41064 7.35143 3.92296 8.85285 4.01847 10.375C4.11397 11.8972 4.7855 13.3259 5.89656 14.3707C7.00762 15.4155 8.47484 15.9981 10 16C11.4615 16 12.8727 15.4666 13.9688 14.5C15.0649 13.5334 15.7707 12.2 15.9535 10.75H9.25ZM17.086 9.25C16.9141 7.62843 16.1913 6.11485 15.0382 4.96179C13.8852 3.80874 12.3716 3.08594 10.75 2.914V9.25H17.086Z"
        fill={primaryColor}
      />
    </svg>
  );
}