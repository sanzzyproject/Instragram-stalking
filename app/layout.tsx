import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FreePopup from '@/components/FreePopup';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'InstaStalk | SANN404 FORUM',
  description: 'Instagram Stalking website. Free and open source tool for profile finding, developed by SANN404 FORUM.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id" className={`${inter.variable} antialiased h-full`}>
      <body className="flex flex-col min-h-full font-sans bg-[#1A1A1A] text-[#F5F5DC]" suppressHydrationWarning>
        <FreePopup />
        <Navbar />
        <main className="flex flex-col flex-grow w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
