import Link from 'next/link';
import { getPrograms } from '@/sanity/lib/getPrograms';
import { urlFor } from '@/sanity/lib/image';

export default async function ProgramsIndexPage() {
  const programs = await getPrograms();

  return (
    <main className="space-y-24">

      {/* HEADER */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center space-y-4">
          <h1 className="text-4xl font-semibold">
            Our Programs
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Christ-centered learning at every stage of early and elementary education.
          </p>
        </div>
      </section>

      {/* PROGRAM GRID */}
      <section className="bg-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((p: any) => (
              <Link
                key={p._id}
                href={`/programs/${p.slug.current}`}
                className="rounded-xl bg-white border overflow-hidden shadow-sm hover:shadow-md transition"
              >
                {p.image && (
                  <img
                    src={urlFor(p.image).width(600).height(400).url()}
                    alt={p.name}
                    className="h-48 w-full object-cover"
                  />
                )}

                <div className="p-6 space-y-2">
                  <h2 className="text-lg font-semibold">
                    {p.name}
                  </h2>

                  {p.summary && (
                    <p className="text-slate-600">
                      {p.summary}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center space-y-6">
          <h2 className="text-3xl font-semibold">
            Come See In His Steps Academy
          </h2>
          <p className="text-blue-100 max-w-xl mx-auto">
            Schedule a tour and learn more about which program is right for your child.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-white px-6 py-3 font-medium text-blue-600 hover:bg-slate-100"
          >
            Schedule a Tour
          </Link>
        </div>
      </section>

    </main>
  );
}
