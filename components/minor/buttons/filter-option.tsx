'use client';

//* Import components
import { Button } from '@nextui-org/react';

//* Import types
import { FilterOptionTypes } from '@/types/types';

const FilterOption = ({ label, isActive }: FilterOptionTypes) => {
  // Styles
  const styles = isActive
    ? 'bg-secondary text-white'
    : 'bg-background text-foreground';

  return (
    <Button
      className={`text-md capitalize ${styles}`}
      color='default'
      radius='sm'
      size='sm'
    >
      {label}
    </Button>
  );
};

export default FilterOption;
