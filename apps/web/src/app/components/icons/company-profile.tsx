import { IconProps } from './types';

export function CompanyProfileIcon({ className }: IconProps) {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_b_2390_52855)">
        <path
          d="M0 48C0 21.4903 21.4903 0 48 0C74.5097 0 96 21.4903 96 48C96 74.5097 74.5097 96 48 96C21.4903 96 0 74.5097 0 48Z"
          fill="url(#paint0_linear_2390_52855)"
          fillOpacity="0.1"
        />
        <path
          d="M0.5 48C0.5 21.7665 21.7665 0.5 48 0.5C74.2335 0.5 95.5 21.7665 95.5 48C95.5 74.2335 74.2335 95.5 48 95.5C21.7665 95.5 0.5 74.2335 0.5 48Z"
          stroke="url(#paint1_linear_2390_52855)"
          stroke-opacity="0.16"
        />
        <g filter="url(#filter1_d_2390_52855)">
          <path
            d="M16 48C16 30.3269 30.3269 16 48 16C65.6731 16 80 30.3269 80 48C80 65.6731 65.6731 80 48 80C30.3269 80 16 65.6731 16 48Z"
            fill="white"
          />
          <path
            d="M16.5 48C16.5 30.603 30.603 16.5 48 16.5C65.397 16.5 79.5 30.603 79.5 48C79.5 65.397 65.397 79.5 48 79.5C30.603 79.5 16.5 65.397 16.5 48Z"
            stroke="#E5E5E5"
          />
          <path
            d="M58.8 57.6H61.2V60H34.8V57.6H37.2V37.2C37.2 36.8817 37.3265 36.5765 37.5515 36.3515C37.7766 36.1264 38.0818 36 38.4 36H57.6C57.9183 36 58.2235 36.1264 58.4486 36.3515C58.6736 36.5765 58.8 36.8817 58.8 37.2V57.6ZM43.2 46.8V49.2H46.8V46.8H43.2ZM43.2 42V44.4H46.8V42H43.2ZM43.2 51.6V54H46.8V51.6H43.2ZM49.2 51.6V54H52.8V51.6H49.2ZM49.2 46.8V49.2H52.8V46.8H49.2ZM49.2 42V44.4H52.8V42H49.2Z"
            fill="#666666"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_b_2390_52855"
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
            result="effect1_backgroundBlur_2390_52855"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2390_52855"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_2390_52855"
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
            result="effect1_dropShadow_2390_52855"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2390_52855"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2390_52855"
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
          id="paint1_linear_2390_52855"
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
