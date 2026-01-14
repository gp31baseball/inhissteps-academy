import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'In His Steps Academy',
  description: 'A Christ-centered education where children are known and loved.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
