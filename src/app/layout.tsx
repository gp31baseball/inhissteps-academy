import './globals.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            
            {/* HOME LINK */}
            <Link
              href="/"
              className="font-semibold text-lg hover:opacity-80 transition"
            >
              In His Steps Academy
            </Link>

            {/* CTA */}
            <Link
              href="/contact"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Schedule a Tour
            </Link>

          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="bg-white border-t mt-24">
          <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-500">
            © 2026 In His Steps Academy
          </div>
        </footer>
      </body>
    </html>
  );
}
