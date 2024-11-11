'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form } from '@app/components/lib/ui/form';
import { SubmitButton } from '@app/components/lib/form/SubmitButton';
import { SelectionComponent } from '../../../../components/widgets/SelectionComponent';
import { Sun } from '../../../components/icons/sun';
import { EqualizerIcon } from '../../../components/icons/equalizer';
import { Moon } from '../../../components/icons/moon';

const ThemeSchema = z.object({
  theme: z.string(),
});

export type ThemeData = z.infer<typeof ThemeSchema>;
const ThemeOptions = () => {
  const handler = useForm<ThemeData>({
    resolver: zodResolver(ThemeSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: ThemeData) => {
    console.log(data);
  };

  return (
    <Form {...handler}>
      <form
        onSubmit={handler.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-[22rem]"
      >
        <div className="flex flex-col pb-2 border-b border-[#e5e5e5]">
          <h2 className="text-[#0E121B] lg:text-base font-medium">
            Theme Options
          </h2>
          <p className="text-[#525866] text-sm py-1">
            Pick theme to personalise experience.
          </p>
        </div>

        <SelectionComponent
          name="theme"
          label=""
          options={[
            {
              label: 'Light Mode',
              description: 'Pick a clean and classic light theme.',
              value: 'light_mode',
              icon: Sun,
            },
            {
              label: 'Dark Mode',
              description: 'Select a sleek and modern dark theme.',
              value: 'dark_mode',
              icon: Moon,
            },
            {
              label: 'System',
              description: 'Adapts to your device theme',
              value: 'system',
              icon: EqualizerIcon,
            },
          ]}
        />

        <div className="flex gap-x-3">
          <button className="py-1 px-4 rounded-lg border-2 border-[#e5e5e5] w-full">
            Discard
          </button>
          <SubmitButton
            className={'text-sm rounded-lg px-3 w-full'}
            type="submit"
          >
            Apply Changes
          </SubmitButton>
        </div>
      </form>
    </Form>
  );
};

export default ThemeOptions;
