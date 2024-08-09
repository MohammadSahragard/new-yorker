import FilterBarToggleBtn from '@/components/minor/buttons/filter-bar-toggle-btn';
import FilterOption from '@/components/minor/buttons/filter-option';
import GoToBusinessBtn from '@/components/minor/buttons/go-to-category-btn';
import MenuToggleBtn from '@/components/minor/buttons/menu-toggle-btn';
import PriceRangeProgressbar from '@/components/minor/buttons/price-range-progressbar';
import NavLink from '@/components/minor/texts/nav-link';
import OpenCloseBadge from '@/components/minor/texts/open-close-badge';
import RateReviewCounter from '@/components/minor/texts/rate-review-counter';
import SectionTitle from '@/components/minor/texts/section-title';
import SeeAllLink from '@/components/minor/texts/see-all-link';
import SmallText from '@/components/minor/texts/text';
import Title from '@/components/minor/texts/title';

export default function Home() {
  return (
    <div className='p-10'>
      <h1 className='text-foreground text-4xl font-medium'>
        Welcome to the <span className='text-secondary'>New York City</span>{' '}
        <i className='fa fa-user'></i>
      </h1>
      <SmallText text='This is a paragraph of text' />
      <SmallText
        text='This is a paragraph of text'
        isForeground
      />
      <div className='flex gap-3'>
        <NavLink
          href='/'
          title='Home'
        />
        <NavLink
          href='/discover'
          title='Discover'
        />
      </div>

      <SectionTitle title='Categories' />
      <Title title='Fashion Forward' />
      <div className='p-4 bg-black w-max'>
        <RateReviewCounter
          rating={4.5}
          reviews={10}
        />
      </div>
      <div className='mt-2'></div>
      <OpenCloseBadge state='open' />
      <div className='mt-2'></div>
      <GoToBusinessBtn href='/' />
      <div className='mt-2'></div>
      <SeeAllLink categoryName='restaurants' />
      <div className='mt-2'></div>
      <MenuToggleBtn />
      <div className='mt-2'></div>
      <FilterBarToggleBtn />
      <div className='mt-2'></div>
      <div className='p-4 bg-default w-max space-x-2'>
        <FilterOption label='restaurant' />
        <FilterOption
          label='Electronics'
          isActive
        />
      </div>
      <div className='w-64 p-4 mt-4 bg-default'>
        <PriceRangeProgressbar />
      </div>
    </div>
  );
}
