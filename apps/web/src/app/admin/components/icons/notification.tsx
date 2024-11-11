import { IconProps } from '../../../components/icons/types';

export function NotificationIcon({ className }: IconProps) {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14 11.75H15.5V13.25H0.5V11.75H2V6.5C2 4.9087 2.63214 3.38258 3.75736 2.25736C4.88258 1.13214 6.4087 0.5 8 0.5C9.5913 0.5 11.1174 1.13214 12.2426 2.25736C13.3679 3.38258 14 4.9087 14 6.5V11.75ZM12.5 11.75V6.5C12.5 5.30653 12.0259 4.16193 11.182 3.31802C10.3381 2.47411 9.19347 2 8 2C6.80653 2 5.66193 2.47411 4.81802 3.31802C3.97411 4.16193 3.5 5.30653 3.5 6.5V11.75H12.5ZM5.75 14.75H10.25V16.25H5.75V14.75Z"
        fill="#666666"
      />
    </svg>
  );
}
