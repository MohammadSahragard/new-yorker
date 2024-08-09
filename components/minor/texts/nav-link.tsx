'use client';

// Public imports
import { usePathname } from 'next/navigation';

//* Import components
import Link from 'next/link';

//* Import types
import { NavLinkTypes } from '@/types/types';

const NavLink = ({ href, title }: NavLinkTypes) => {
  const pathname = usePathname();
  const isActive = pathname.toLowerCase() === href.toLowerCase();

  // Styles
  const isActiveStyles = isActive ? 'text-foreground' : 'text-default-500';
  const finallyStyles = `font-medium uppercase ${isActiveStyles}`;

  return (
    <Link
      href={href}
      className={finallyStyles}
    >
      {title}
    </Link>
  );
};

export default NavLink;
