import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter, Baloo_2 } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const display = Baloo_2({
  weight: ['500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Monoplay | Board Games Cafe, Egypt',
  description:
    "Egypt's first board games cafe. 200+ games, great coffee, and unforgettable game nights across Cairo — Almaza City Centre, Mall of Egypt, The Yard El Rehab & Grip 'N Climb CFC.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="font-body antialiased selection:bg-accent/20 phone-shell-backdrop">
        <div className="phone-shell">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
