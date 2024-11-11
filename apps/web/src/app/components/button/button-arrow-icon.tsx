interface Props {
  className?: string;
  primaryColor?: string;
}

export function ButtonArrowIcon({ className, primaryColor }: Props) {
  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? ''}
    >
      <path
        d="M11.7548 6.10002L6.92719 1.27242L8.19979 -0.000183105L15.2 7.00002L8.19979 14.0002L6.92719 12.7276L11.7548 7.90002H0.799988V6.10002H11.7548Z"
        fill={primaryColor ?? "#473552"}
      />
    </svg>
  );
}
