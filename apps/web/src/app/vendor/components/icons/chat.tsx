import { IconProps } from '../../../components/icons/types';

export function ChatIcon({ className, primaryColor = '#666666' }: IconProps) {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.84125 12.25L0.5 14.875V1C0.5 0.801088 0.579018 0.610322 0.71967 0.46967C0.860322 0.329018 1.05109 0.25 1.25 0.25H14.75C14.9489 0.25 15.1397 0.329018 15.2803 0.46967C15.421 0.610322 15.5 0.801088 15.5 1V11.5C15.5 11.6989 15.421 11.8897 15.2803 12.0303C15.1397 12.171 14.9489 12.25 14.75 12.25H3.84125ZM3.32225 10.75H14V1.75H2V11.7887L3.32225 10.75ZM7.46975 7.09075L10.652 3.90925L11.7125 4.96975L7.46975 9.2125L4.55225 6.295L5.6135 5.2345L7.46975 7.09075Z"
        fill={primaryColor}
      />
    </svg>
  );
}