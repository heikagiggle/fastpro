import { cn } from '@app/components/utils/cn';
import { IconProps } from './types';

export function SpinnerIcon({ className, primaryColor }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={cn('animate-spin', className)}
    >
      <g
        id="🔍-System-Icons"
        stroke="none"
        strokeWidth="20"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="ic_fluent_spinner_ios_20_regular"
          fill={primaryColor ?? '#000000'}
          fillRule="nonzero"
        >
          <path
            d="M10,3 C6.13401,3 3,6.13401 3,10 C3,10.2761 2.77614,10.5 2.5,10.5 C2.22386,10.5 2,10.2761 2,10 C2,5.58172 5.58172,2 10,2 C14.4183,2 18,5.58172 18,10 C18,14.4183 14.4183,18 10,18 C9.72386,18 9.5,17.7761 9.5,17.5 C9.5,17.2239 9.72386,17 10,17 C13.866,17 17,13.866 17,10 C17,6.13401 13.866,3 10,3 Z"
            id="🎨-Color"
          ></path>
        </g>
      </g>
    </svg>
  );
}
