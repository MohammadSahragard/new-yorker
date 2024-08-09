//* Import components
import Link from 'next/link';

const SeeAllLink = ({
  categoryName,
}: {
  categoryName: 'restaurants' | 'stores' | 'hotels';
}) => {
  return (
    <Link
      href={`/category?category-name=${categoryName}`}
      className='text-lg text-secondary'
    >
      See all
    </Link>
  );
};

export default SeeAllLink;
