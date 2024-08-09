//* Minor components (types)
// texts
export type NavLinkTypes = {
  href: string;
  title: string;
};

export type RateReviewTypes = {
  rating: number;
  reviews: number;
};

export type SmallTextTypes = {
  text: string;
  isForeground?: boolean;
};

// buttons
export type FilterOptionTypes = {
  label: string;
  isActive?: boolean;
};
