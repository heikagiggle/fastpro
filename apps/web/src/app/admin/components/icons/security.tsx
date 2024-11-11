import { IconProps } from '../../../components/icons/types';

export function PrivacySecurityIcon({ className, primaryColor = '#666666' }: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_3206_16378)">
        <path
          d="M4.6046 3.74301L11.9999 2.09961L19.3952 3.74301C19.5951 3.78744 19.7738 3.89868 19.9019 4.05837C20.03 4.21807 20.0999 4.41667 20.0999 4.62141V13.6097C20.0998 14.4987 19.8803 15.3739 19.4608 16.1576C19.0413 16.9414 18.4348 17.6094 17.6951 18.1025L11.9999 21.8996L6.3047 18.1025C5.56515 17.6095 4.95872 16.9416 4.53922 16.158C4.11971 15.3744 3.90012 14.4994 3.8999 13.6106V4.62141C3.89994 4.41667 3.96978 4.21807 4.09789 4.05837C4.22601 3.89868 4.40475 3.78744 4.6046 3.74301V3.74301ZM5.6999 5.34321V13.6097C5.69991 14.2023 5.84622 14.7858 6.12584 15.3083C6.40546 15.8308 6.80974 16.2762 7.3028 16.6049L11.9999 19.7369L16.697 16.6049C17.1899 16.2762 17.5941 15.831 17.8738 15.3087C18.1534 14.7863 18.2997 14.2031 18.2999 13.6106V5.34321L11.9999 3.94461L5.6999 5.34321ZM11.9999 11.0996C11.4032 11.0996 10.8309 10.8626 10.4089 10.4406C9.98696 10.0186 9.7499 9.44635 9.7499 8.84961C9.7499 8.25287 9.98696 7.68058 10.4089 7.25862C10.8309 6.83666 11.4032 6.59961 11.9999 6.59961C12.5966 6.59961 13.1689 6.83666 13.5909 7.25862C14.0128 7.68058 14.2499 8.25287 14.2499 8.84961C14.2499 9.44635 14.0128 10.0186 13.5909 10.4406C13.1689 10.8626 12.5966 11.0996 11.9999 11.0996V11.0996ZM7.9742 15.5996C8.0833 14.6082 8.55442 13.6919 9.29727 13.0263C10.0401 12.3607 11.0025 11.9926 11.9999 11.9926C12.9973 11.9926 13.9597 12.3607 14.7025 13.0263C15.4454 13.6919 15.9165 14.6082 16.0256 15.5996H7.9742Z"
          fill={primaryColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_3206_16378">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}