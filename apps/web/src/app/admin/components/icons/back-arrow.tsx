import { IconProps } from '../../../components/icons/types';

export function BackArrowIcon({
  className,
  primaryColor = '#0D0D0D',
}: IconProps) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="14"
    viewBox="0 0 22 14"
    fill="none"
    className={className}
  >
    <path
      d="M0.39896 6.39896C0.0670128 6.7309 0.0670128 7.2691 0.39896 7.60104L5.80833 13.0104C6.14027 13.3424 6.67846 13.3424 7.01041 13.0104C7.34235 12.6785 7.34235 12.1403 7.01041 11.8083L2.20208 7L7.01041 2.19167C7.34235 1.85973 7.34235 1.32154 7.01041 0.989592C6.67846 0.657647 6.14027 0.657647 5.80833 0.989592L0.39896 6.39896ZM22 6.15L1 6.15V7.85L22 7.85V6.15Z"
      fill={primaryColor}
    />
  </svg>
  );
}
