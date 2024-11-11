import { Form } from '@app/components/lib/ui/form';
import { DefaultModal } from '../../../../../components/modal/DefaultModal';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SubmitButton } from '@app/components/lib/form/SubmitButton';
import { TextAreaInput } from '@app/components/lib/form/textarea-input';

const RatingSchema = z.object({
  comments: z.string().optional(),
});

export type RatingData = z.infer<typeof RatingSchema>;

type RatingCategory =
  | 'communication'
  | 'qualityOfWork'
  | 'timeliness'
  | 'professionalism'
  | 'overallSatisfaction';

const ratingCategories: RatingCategory[] = [
  'communication',
  'qualityOfWork',
  'timeliness',
  'professionalism',
  'overallSatisfaction',
];

// Star rating component
const StarRating = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (rating: number) => void;
}) => {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={`text-2xl ${
            star <= value ? 'text-[#F1A80D]' : 'text-gray-300'
          }`}
          onClick={() => onChange(star)}
        >
          ★
        </button>
      ))}
    </div>
  );
};

const LeaveReview = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handler = useForm<RatingData>({
    resolver: zodResolver(RatingSchema),
    mode: 'onChange',
  });
  const [ratings, setRatings] = useState<Record<RatingCategory, number>>({
    communication: 0,
    qualityOfWork: 0,
    timeliness: 0,
    professionalism: 0,
    overallSatisfaction: 0,
  });

  const handleRatingChange = (category: RatingCategory, value: number) => {
    setRatings((prev) => ({ ...prev, [category]: value }));
  };

  const onSubmit = (data: RatingData) => {
    console.log(data);
    setOpen(false); 
  };

  return (
    <DefaultModal
      heading="Leave a review"
      trigger={
        <button className="bg-transparent border border-[#7209B7] text-[#7209B7] shadow-sm rounded-full px-3 py-2 cursor-pointer">
          Leave a Review ⭐
        </button>
      }
      open={open}
      onOpenChange={setOpen}
    >
      <Form {...handler}>
        <form onSubmit={handler.handleSubmit(onSubmit)} className="my-2">
          <div className="space-y-4">
            {ratingCategories.map((category) => (
              <div key={category}>
                <label className="block text-[#202020] capitalize">
                  {category.replace(/([A-Z])/g, ' $1')}
                </label>
                <StarRating
                  value={ratings[category]}
                  onChange={(value) => handleRatingChange(category, value)}
                />
              </div>
            ))}
            <TextAreaInput
              name={'comments'}
              label={'Care to share more?'}
              placeholder={''}
              className="h-[100px]"
            />
            <SubmitButton className="px-6 py-2 text-sm w-full">
              Post
            </SubmitButton>
          </div>
        </form>
      </Form>
    </DefaultModal>
  );
};

export default LeaveReview;
