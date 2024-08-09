//* Import Types
import { RateReviewTypes } from '@/types/types';

const RateReviewCounter = ({ rating, reviews }: RateReviewTypes) => {
  return (
    <section className='flex gap-2'>
      <div className='flex items-center gap-1 text-secondary'>
        <i className='far fa-star'></i>
        <span>{rating}</span>
      </div>
      <span className='text-white'>{`(${reviews})`}</span>
    </section>
  );
};

export default RateReviewCounter;
