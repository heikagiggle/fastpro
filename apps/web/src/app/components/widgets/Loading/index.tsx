import { SpinnerIcon } from '../../icons/spinner-icon';

interface Props {
  size?: string;
}

export function Loading({ size }: Props) {
  return (
    <div className={'w-full h-full flex items-center justify-center'}>
      <span className={size ?? 'w-[10rem]'}>
        <SpinnerIcon primaryColor={'#7209B7'} />
      </span>
    </div>
  );
}
