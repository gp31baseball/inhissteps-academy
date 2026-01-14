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
      <body className="bg-slate-50 text-slate-900 antialiased">
  <div className="min-h-screen flex flex-col">
    <header className="
  sticky top-0 z-50
  bg-white/90 backdrop-blur
  border-b
">
  <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    <span className="font-semibold text-lg">
      In His Steps Academy
    </span>

    <a
      href="#tour"
      className="text-sm font-medium text-blue-600 hover:underline"
    >
      Schedule a Tour
    </a>
  </div>
</header>


    <main className="flex-1">
      {children}
    </main>

    <footer className="bg-white border-t mt-24">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-500">
        © {new Date().getFullYear()} In His Steps Academy
      </div>
    </footer>
  </div>
</body>

    </html>
  );
}
