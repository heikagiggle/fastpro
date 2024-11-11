// primaryColor = '#666666',

import { IconProps } from '../../../components/icons/types';

export function Globe({ className, primaryColor = '#666666' }: IconProps) {
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
        d="M8 15.5C3.85775 15.5 0.5 12.1422 0.5 8C0.5 3.85775 3.85775 0.5 8 0.5C12.1422 0.5 15.5 3.85775 15.5 8C15.5 12.1422 12.1422 15.5 8 15.5ZM6.2825 13.7502C5.54256 12.1807 5.1139 10.4827 5.02025 8.75H2.0465C2.19244 9.90417 2.67044 10.9911 3.42243 11.8788C4.17441 12.7664 5.16801 13.4166 6.2825 13.7502ZM6.5225 8.75C6.63575 10.5792 7.1585 12.2975 8 13.814C8.86424 12.2574 9.36908 10.5271 9.4775 8.75H6.5225ZM13.9535 8.75H10.9797C10.8861 10.4827 10.4574 12.1807 9.7175 13.7502C10.832 13.4166 11.8256 12.7664 12.5776 11.8788C13.3296 10.9911 13.8076 9.90417 13.9535 8.75ZM2.0465 7.25H5.02025C5.1139 5.51734 5.54256 3.81926 6.2825 2.24975C5.16801 2.58341 4.17441 3.23356 3.42243 4.12122C2.67044 5.00888 2.19244 6.09583 2.0465 7.25ZM6.52325 7.25H9.47675C9.36856 5.47295 8.86398 3.74265 8 2.186C7.13576 3.74259 6.63092 5.47289 6.5225 7.25H6.52325ZM9.7175 2.24975C10.4574 3.81926 10.8861 5.51734 10.9797 7.25H13.9535C13.8076 6.09583 13.3296 5.00888 12.5776 4.12122C11.8256 3.23356 10.832 2.58341 9.7175 2.24975Z"
        fill={primaryColor}
      />
    </svg>
  );
}
