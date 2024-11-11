import { IconProps } from '../../../components/icons/types';

export function DeleteIcon({ className }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.25 2V0.5H11.75V2H15.5V3.5H14V14.75C14 14.9489 13.921 15.1397 13.7803 15.2803C13.6397 15.421 13.4489 15.5 13.25 15.5H2.75C2.55109 15.5 2.36032 15.421 2.21967 15.2803C2.07902 15.1397 2 14.9489 2 14.75V3.5H0.5V2H4.25ZM3.5 3.5V14H12.5V3.5H3.5ZM5.75 5.75H7.25V11.75H5.75V5.75ZM8.75 5.75H10.25V11.75H8.75V5.75Z"
        fill="#F2F2F2"
      />
    </svg>
  );
}
