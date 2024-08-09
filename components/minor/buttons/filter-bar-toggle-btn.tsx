'use client';

//* Import components
import { Button } from '@nextui-org/react';

const FilterBarToggleBtn = () => {
  return (
    <Button
      isIconOnly
      variant='faded'
      radius='sm'
    >
      <i className='far fa-filter'></i>
    </Button>
  );
};

export default FilterBarToggleBtn;
