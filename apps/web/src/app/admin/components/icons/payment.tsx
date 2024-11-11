import { IconProps } from '../../../components/icons/types';

export function PaymentIcon({
  className,
  primaryColor = '#666666',
}: IconProps) {
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
        d="M10 17.5C5.85775 17.5 2.5 14.1423 2.5 10C2.5 5.85775 5.85775 2.5 10 2.5C14.1423 2.5 17.5 5.85775 17.5 10C17.5 14.1423 14.1423 17.5 10 17.5ZM10 16C11.5913 16 13.1174 15.3679 14.2426 14.2426C15.3679 13.1174 16 11.5913 16 10C16 8.4087 15.3679 6.88258 14.2426 5.75736C13.1174 4.63214 11.5913 4 10 4C8.4087 4 6.88258 4.63214 5.75736 5.75736C4.63214 6.88258 4 8.4087 4 10C4 11.5913 4.63214 13.1174 5.75736 14.2426C6.88258 15.3679 8.4087 16 10 16ZM7.375 11.5H11.5C11.5995 11.5 11.6948 11.4605 11.7652 11.3902C11.8355 11.3198 11.875 11.2245 11.875 11.125C11.875 11.0255 11.8355 10.9302 11.7652 10.8598C11.6948 10.7895 11.5995 10.75 11.5 10.75H8.5C8.00272 10.75 7.52581 10.5525 7.17417 10.2008C6.82254 9.84919 6.625 9.37228 6.625 8.875C6.625 8.37772 6.82254 7.90081 7.17417 7.54917C7.52581 7.19754 8.00272 7 8.5 7H9.25V5.5H10.75V7H12.625V8.5H8.5C8.40054 8.5 8.30516 8.53951 8.23483 8.60983C8.16451 8.68016 8.125 8.77554 8.125 8.875C8.125 8.97446 8.16451 9.06984 8.23483 9.14017C8.30516 9.21049 8.40054 9.25 8.5 9.25H11.5C11.9973 9.25 12.4742 9.44754 12.8258 9.79917C13.1775 10.1508 13.375 10.6277 13.375 11.125C13.375 11.6223 13.1775 12.0992 12.8258 12.4508C12.4742 12.8025 11.9973 13 11.5 13H10.75V14.5H9.25V13H7.375V11.5Z"
        fill={primaryColor}
      />
    </svg>
  );
}
