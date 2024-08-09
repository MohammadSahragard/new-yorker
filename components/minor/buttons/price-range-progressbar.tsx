//* Import components
import { Slider } from '@nextui-org/react';
import SmallText from '../texts/text';

const PriceRangeProgressbar = () => {
  return (
    <div>
      <Slider
        classNames={{
          track: 'bg-white',
        }}
        size='sm'
        color='secondary'
        minValue={10}
        maxValue={150}
        showTooltip
        step={10}
      />
      <div className='flex justify-between'>
        <SmallText text='10$' />
        <SmallText text='150$' />
      </div>
    </div>
  );
};

export default PriceRangeProgressbar;
