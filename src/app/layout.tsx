import './globals.css';
import Link from 'next/link';
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        {/* HEADER / NAV */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            
            {/* LOGO / HOME */}
            <Link
              href="/"
              className="font-semibold text-lg hover:opacity-80 transition"
            >
              In His Steps Academy
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/about" className="hover:text-slate-700">
                About
              </Link>
              <Link href="/programs" className="hover:text-slate-700">
                Programs
              </Link>
              <Link href="/contact" className="hover:text-slate-700">
                Contact
              </Link>

              {/* PRIMARY CTA */}
              <Link
                href="/contact"
                className="ml-4 rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition"
              >
                Schedule a Tour
              </Link>
            </nav>

            {/* MOBILE MENU */}
            <details className="md:hidden relative">
              <summary className="list-none cursor-pointer rounded-md border px-3 py-2 text-sm">
                Menu
              </summary>

              <div className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg border">
                <div className="flex flex-col p-4 gap-3 text-sm">
                  <Link href="/about" className="hover:text-slate-700">
                    About
                  </Link>
                  <Link href="/programs" className="hover:text-slate-700">
                    Programs
                  </Link>
                  <Link href="/contact" className="hover:text-slate-700">
                    Contact
                  </Link>

                  <Link
                    href="/contact"
                    className="mt-2 rounded-md bg-blue-600 px-4 py-2 text-white font-medium text-center hover:bg-blue-700 transition"
                  >
                    Schedule a Tour
                  </Link>
                </div>
              </div>
            </details>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="bg-slate-50 border-t">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>
              © {new Date().getFullYear()} In His Steps Academy
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://fortyonebuilt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-700"
              >
                Built by FortyOneBuilt
              </a>

              <a
                href="https://apps.apple.com/us/app/talk-of-pearland/id6757129739"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-50 hover:opacity-80 transition"
                aria-label="Talk of Pearland"
              >
                <img
                  src="/top-logo-mark.png"
                  alt="Talk of Pearland"
                  className="h-5 w-auto"
                />
              </a>
            </div>
          </div>
        </footer>

        {/* VERCEL ANALYTICS */}
        <Analytics />
      </body>
    </html>
  );
}
