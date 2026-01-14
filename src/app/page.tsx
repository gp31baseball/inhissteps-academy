import Link from 'next/link';

import { getHero } from '@/sanity/lib/getHero';
import { getAnnouncements } from '@/sanity/lib/getAnnouncements';
import { getEvents } from '@/sanity/lib/getEvents';
import { getPrograms } from '@/sanity/lib/getPrograms';
import { urlFor } from '@/sanity/lib/image';

export default async function HomePage() {
  const hero = await getHero();
  const announcements = await getAnnouncements();
  const events = await getEvents();
  const programs = await getPrograms();

  return (
    <main className="space-y-24">

      {/* HERO */}
      <section className="relative w-full">
        {hero?.image && (
          <div className="absolute inset-0">
            <img
              src={urlFor(hero.image).width(2000).height(1200).url()}
              alt={hero.headline}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        )}

        <div className="relative min-h-[70vh] md:min-h-[80vh] pt-20 flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-center text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-semibold">
              {hero?.headline ?? 'In His Steps Academy'}
            </h1>

            {hero?.subheadline && (
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                {hero.subheadline}
              </p>
            )}

            <div className="flex justify-center gap-4 pt-6">
              <Link
                href="#tour"
                className="rounded-md bg-blue-600 px-6 py-3 font-medium hover:bg-blue-700"
              >
                Schedule a Tour
              </Link>

              <Link
                href="#programs"
                className="rounded-md bg-white/90 px-6 py-3 font-medium text-slate-900 hover:bg-white"
              >
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENTS */}
      <section className="max-w-6xl mx-auto px-6 space-y-8">
        <h2 className="text-2xl font-semibold">This Week at In His Steps</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {announcements.map((a: any) => (
            <div key={a._id} className="rounded-xl border bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-lg">{a.title}</h3>
              {a.body && <p className="mt-2 text-slate-600 line-clamp-3">{a.body}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section className="bg-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-8">
          <h2 className="text-2xl font-semibold">Upcoming Events</h2>
          <p className="text-slate-600">Check back soon for upcoming school events.</p>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="max-w-6xl mx-auto px-6 py-20 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-semibold">Our Programs</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Christ-centered learning at every stage.
          </p>
        </div>

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
              <div className="p-6">
                <h3 className="font-semibold text-lg">{p.name}</h3>
                {p.summary && <p className="text-slate-600 mt-2">{p.summary}</p>}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* LIFESTYLE STRIP */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div className="h-56 bg-slate-300 rounded-xl" />
          <div className="h-56 bg-slate-300 rounded-xl" />
          <div className="h-56 bg-slate-300 rounded-xl" />
        </div>
      </section>

      {/* CTA */}
      <section id="tour" className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center space-y-6">
          <h2 className="text-3xl font-semibold">Come See In His Steps Academy</h2>
          <p className="text-blue-100 max-w-xl mx-auto">
            Schedule a tour and experience our community firsthand.
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
