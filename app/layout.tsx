// Public imports
import type { Metadata } from 'next';
import { Fredoka } from 'next/font/google';
import './globals.css';

//* Import fontawesome pro
import '@/fontawesome-pro/css/all.css';

//* Font config
const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

//* Import components
import Providers from './providers';

//* Metadata tags
export const metadata: Metadata = {
  title: 'NewYorker',
  description: 'Find every good business in the New York City',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={fredoka.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
