//* Import types
import { SmallTextTypes } from '@/types/types';

const SmallText = ({ text, isForeground }: SmallTextTypes) => {
  const textColor = isForeground ? 'text-foreground' : 'text-default-500';
  return <p className={`${textColor} text-lg`}>{text}</p>;
};

export default SmallText;
