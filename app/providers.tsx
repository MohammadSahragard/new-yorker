//* Import nextUI provider
import { NextUIProvider } from '@nextui-org/react';

//* Import Swiper styles
import 'swiper/css';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;
