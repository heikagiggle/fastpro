import { IconProps } from './types';

export function Profile({ className }: IconProps) {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_b_2390_52802)">
        <path
          d="M0 48C0 21.4903 21.4903 0 48 0C74.5097 0 96 21.4903 96 48C96 74.5097 74.5097 96 48 96C21.4903 96 0 74.5097 0 48Z"
          fill="url(#paint0_linear_2390_52802)"
          fill-opacity="0.1"
        />
        <path
          d="M0.5 48C0.5 21.7665 21.7665 0.5 48 0.5C74.2335 0.5 95.5 21.7665 95.5 48C95.5 74.2335 74.2335 95.5 48 95.5C21.7665 95.5 0.5 74.2335 0.5 48Z"
          stroke="url(#paint1_linear_2390_52802)"
          stroke-opacity="0.16"
        />
        <g filter="url(#filter1_d_2390_52802)">
          <path
            d="M16 48C16 30.3269 30.3269 16 48 16C65.6731 16 80 30.3269 80 48C80 65.6731 65.6731 80 48 80C30.3269 80 16 65.6731 16 48Z"
            fill="white"
          />
          <path
            d="M16.5 48C16.5 30.603 30.603 16.5 48 16.5C65.397 16.5 79.5 30.603 79.5 48C79.5 65.397 65.397 79.5 48 79.5C30.603 79.5 16.5 65.397 16.5 48Z"
            stroke="#E5E5E5"
          />
          <path
            d="M50.4 50.7024V60H38.4C38.3997 58.5347 38.7347 57.0887 39.3796 55.7729C40.0244 54.457 40.9619 53.3063 42.1203 52.4088C43.2786 51.5114 44.627 50.8909 46.0622 50.5952C47.4974 50.2994 48.9812 50.3361 50.4 50.7024ZM48 49.2C44.022 49.2 40.8 45.978 40.8 42C40.8 38.022 44.022 34.8 48 34.8C51.978 34.8 55.2 38.022 55.2 42C55.2 45.978 51.978 49.2 48 49.2ZM55.2 54V50.4H57.6V54H61.2V56.4H57.6V60H55.2V56.4H51.6V54H55.2Z"
            fill="#666666"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_b_2390_52802"
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
            result="effect1_backgroundBlur_2390_52802"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2390_52802"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_2390_52802"
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
            result="effect1_dropShadow_2390_52802"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2390_52802"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2390_52802"
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
          id="paint1_linear_2390_52802"
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
