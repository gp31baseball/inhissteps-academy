import Link from 'next/link';
import { PortableText } from '@portabletext/react';

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
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE SIDE */}
          <div className="relative h-72 md:h-80 rounded-xl overflow-hidden">
            <img
              src="/announce2.png"
              alt="Student artwork and creativity"
              className="h-full w-full object-cover object-bottom"
            />
            <div className="absolute inset-0 bg-white/30" />

            <div className="absolute bottom-4 left-4 right-4">
              <p className="inline-block rounded-lg bg-white/90 px-4 py-2 text-sm text-slate-700 shadow">
                A glimpse into life at In His Steps Academy
              </p>
            </div>
          </div>

          {/* TEXT SIDE */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                This Week at In His Steps
              </h2>
              <span className="text-sm text-slate-500">
                Updated weekly
              </span>
            </div>

            <div className="space-y-4">
              {announcements.map((a: any) => (
                <div
                  key={a._id}
                  className="rounded-lg border-l-4 border-blue-600 bg-slate-50 p-4"
                >
                  <h3 className="font-medium text-slate-900">
                    {a.title}
                  </h3>

                  {a.body && (
                    <div className="prose prose-slate max-w-none mt-1">
                      <PortableText value={a.body} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    {/* EVENTS */}
<section className="bg-slate-100">
  <div className="max-w-6xl mx-auto px-6 py-20 space-y-8">

    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-semibold">Upcoming Events</h2>
      <span className="text-sm text-slate-500">
        Stay connected
      </span>
    </div>

    {events.length === 0 ? (
      <p className="text-slate-600">
        Check back soon for upcoming school events and important dates.
      </p>
    ) : (
      <div className="grid md:grid-cols-2 gap-6">
        {events.map((e: any) => {
          const date = e.startDate ? new Date(e.startDate) : null;

          return (
            <div
              key={e._id}
              className="
                flex gap-4
                rounded-xl bg-white p-6
                shadow-sm border
                hover:shadow-md transition
              "
            >
              {/* DATE BADGE */}
              {date && (
               <div className="
  flex flex-col items-center justify-center
  w-16 h-16 rounded-lg
  bg-blue-50 text-blue-700
  border border-blue-100
  shrink-0
">
  <span className="text-xs uppercase tracking-wide">
    {date.toLocaleDateString(undefined, { month: 'short' })}
  </span>
  <span className="text-xl font-semibold leading-none">
    {date.getDate()}
  </span>
</div>


              )}

              {/* EVENT CONTENT */}
              <div className="space-y-1">
                <h3 className="font-medium text-lg text-slate-900">
                  {e.title}
                </h3>

                {e.audience && (
                  <p className="text-sm text-slate-500">
                    {e.audience}
                  </p>
                )}

                {e.description && (
                  <p className="text-slate-600 mt-1">
                    {e.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    )}
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
                {p.summary && (
                  <p className="text-slate-600 mt-2">{p.summary}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="tour" className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center space-y-6">
          <h2 className="text-3xl font-semibold">
            Come See In His Steps Academy
          </h2>
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
