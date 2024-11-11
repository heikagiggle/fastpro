import { IconProps } from "../../../components/icons/types";

export function MessageIcon({
  className,
  primaryColor = '#062149',
}: IconProps) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className}
    >
      <path
        d="M4 4.23926H3.5V4.73926V17.9093V19.1164L4.35355 18.2628L5.37711 17.2393H20H20.5V16.7393V4.73926V4.23926H20H4ZM2.51 4.73954V4.73926C2.51 3.91213 3.1794 3.23926 4 3.23926H20C20.8239 3.23926 21.5 3.9154 21.5 4.73926V16.7393C21.5 17.5631 20.8239 18.2393 20 18.2393H6H5.79289L5.64645 18.3857L2.50067 21.5315L2.51 4.73954ZM6.5 13.2393H17.5V14.2393H6.5V13.2393ZM6.5 10.2393H17.5V11.2393H6.5V10.2393ZM6.5 7.23926H17.5V8.23926H6.5V7.23926Z"
        fill={primaryColor}
      />
    </svg>
  );
}

