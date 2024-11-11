import { IconProps } from '../../../components/icons/types';

export function CubeIcon({ className, primaryColor = '#666666' }: IconProps) {
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
        d="M10 3.125L15.9375 6.5625V13.4375L10 16.875L4.0625 13.4375V6.5625L10 3.125ZM5.93367 6.92356L10.0001 9.27775L14.0664 6.92359L10 4.56938L5.93367 6.92356ZM5.3125 8.00831V12.7168L9.37506 15.0688V10.3603L5.3125 8.00831ZM10.6251 15.0688L14.6875 12.7168V8.00836L10.6251 10.3603V15.0688Z"
        fill={primaryColor}
      />
    </svg>
  );
}
