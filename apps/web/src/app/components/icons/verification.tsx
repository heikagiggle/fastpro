import { IconProps } from './types';

export function VerificationIcon({ className }: IconProps) {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className?? ''}
    >
      <g filter="url(#filter0_b_2390_52897)">
        <path
          d="M0 48C0 21.4903 21.4903 0 48 0C74.5097 0 96 21.4903 96 48C96 74.5097 74.5097 96 48 96C21.4903 96 0 74.5097 0 48Z"
          fill="url(#paint0_linear_2390_52897)"
          fill-opacity="0.1"
        />
        <path
          d="M0.5 48C0.5 21.7665 21.7665 0.5 48 0.5C74.2335 0.5 95.5 21.7665 95.5 48C95.5 74.2335 74.2335 95.5 48 95.5C21.7665 95.5 0.5 74.2335 0.5 48Z"
          stroke="url(#paint1_linear_2390_52897)"
          stroke-opacity="0.16"
        />
        <g filter="url(#filter1_d_2390_52897)">
          <path
            d="M16 48C16 30.3269 30.3269 16 48 16C65.6731 16 80 30.3269 80 48C80 65.6731 65.6731 80 48 80C30.3269 80 16 65.6731 16 48Z"
            fill="white"
          />
          <path
            d="M16.5 48C16.5 30.603 30.603 16.5 48 16.5C65.397 16.5 79.5 30.603 79.5 48C79.5 65.397 65.397 79.5 48 79.5C30.603 79.5 16.5 65.397 16.5 48Z"
            stroke="#E5E5E5"
          />
          <path
            d="M60 49.6092C58.7181 49.1551 57.3337 49.0734 56.0073 49.3735C54.6808 49.6736 53.4665 50.3432 52.5048 51.3049C51.5432 52.2665 50.8736 53.4808 50.5735 54.8073C50.2734 56.1338 50.3551 57.5181 50.8092 58.8H37.2C36.8817 58.8 36.5765 58.6736 36.3515 58.4485C36.1264 58.2235 36 57.9183 36 57.6V38.4C36 38.0818 36.1264 37.7765 36.3515 37.5515C36.5765 37.3264 36.8817 37.2 37.2 37.2H58.8C59.1183 37.2 59.4235 37.3264 59.6485 37.5515C59.8736 37.7765 60 38.0818 60 38.4V49.6092ZM48.072 47.6196L40.3776 41.0856L38.8236 42.9144L48.0876 50.7804L57.1848 42.9084L55.6152 41.0928L48.0732 47.6196H48.072ZM56.4 60L52.1568 55.7568L53.8548 54.06L56.4 56.6064L60.6432 52.3632L62.34 54.06L56.4 60Z"
            fill="#666666"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_b_2390_52897"
          x="-24"
          y="-24"
          width="144"
          height="144"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="12" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2390_52897"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2390_52897"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_2390_52897"
          x="14"
          y="15"
          width="68"
          height="68"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0 0.0784314 0 0 0 0.03 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2390_52897"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2390_52897"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2390_52897"
          x1="48"
          y1="0"
          x2="48"
          y2="96"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#717784" />
          <stop offset="1" stop-color="#717784" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2390_52897"
          x1="48"
          y1="0"
          x2="48"
          y2="96"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#717784" />
          <stop offset="1" stop-color="#717784" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
