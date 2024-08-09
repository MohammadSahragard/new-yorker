'use client';

//* Import components
import { Button } from '@nextui-org/react';

const MenuToggleBtn = () => {
  return (
    <Button
      isIconOnly
      variant='faded'
      radius='sm'
    >
      <i className='fa fa-bars-staggered'></i>
    </Button>
  );
};

export default MenuToggleBtn;
