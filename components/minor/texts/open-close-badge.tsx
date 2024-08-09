//* Import Components
import { Chip } from '@nextui-org/react';

const OpenCloseBadge = ({ state }: { state: 'open' | 'closed' }) => {
  return (
    <Chip
      className='uppercase'
      variant='flat'
      color='secondary'
      radius='sm'
    >
      {state}
    </Chip>
  );
};

export default OpenCloseBadge;
