//* Import components
import Link from 'next/link';
import { Button } from '@nextui-org/react';

const GoToBusinessBtn = ({ href }: { href: string }) => {
  return (
    <Link href={href}>
      <Button
        color='secondary'
        isIconOnly
        radius='sm'
      >
        <i className='fa fa-arrow-right-long'></i>
      </Button>
    </Link>
  );
};

export default GoToBusinessBtn;
