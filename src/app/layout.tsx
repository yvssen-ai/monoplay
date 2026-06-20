import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter, Kanit } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const kanit = Kanit({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-kanit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CURIO | Premium Specialty Coffee Studio',
  description: 'Experience the art of specialty coffee at CURIO. Crafted with curiosity, poured with intention.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${kanit.variable}`}>
      <body className="font-body antialiased selection:bg-accent/20">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
