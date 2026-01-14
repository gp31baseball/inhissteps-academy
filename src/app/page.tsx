import Link from 'next/link';
import { getAnnouncements } from '@/sanity/lib/getAnnouncements';
import { getEvents } from '@/sanity/lib/getEvents';
import { getPrograms } from '@/sanity/lib/getPrograms';
import { urlFor } from '@/sanity/lib/image';

export default async function HomePage() {
  const announcements = await getAnnouncements();
  const events = await getEvents();
  const programs = await getPrograms();

  return (
    <main className="space-y-24">

      {/* HERO */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold">
            In His Steps Academy
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A Christ-centered education where children are known, loved,
            and guided to grow in faith and learning.
          </p>

          <div className="flex justify-center gap-4 pt-6">
            <Link
              href="#tour"
              className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700"
            >
              Schedule a Tour
            </Link>

            <Link
              href="#programs"
              className="inline-flex items-center rounded-md border px-6 py-3 font-medium hover:bg-slate-100"
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENTS */}
      <section className="max-w-6xl mx-auto px-6 space-y-8">
        <h2 className="text-2xl font-semibold">
          This Week at In His Steps
        </h2>

        {announcements.length === 0 ? (
          <p className="text-slate-500 italic">
            No announcements at this time.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {announcements.map((a: any) => (
              <div
                key={a._id}
                className="rounded-xl border bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold text-lg">
                  {a.title}
                </h3>

                {a.body && (
                  <p className="mt-2 text-slate-600 line-clamp-3">
                    {a.body}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* EVENTS */}
      <section className="bg-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-8">
          <h2 className="text-2xl font-semibold">
            Upcoming Events
          </h2>

          {events.length === 0 ? (
            <p className="text-slate-600">
              Check back soon for upcoming school events and activities.
            </p>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {events.map((e: any) => (
                <div
                  key={e._id}
                  className="rounded-xl bg-white p-5 shadow-sm"
                >
                  <p className="font-medium">{e.title}</p>

                  {e.startDate && (
                    <p className="text-sm text-slate-500 mt-1">
                      {new Date(e.startDate).toLocaleDateString()}
                    </p>
                  )}

                  {e.audience && (
                    <p className="text-sm text-slate-500">
                      {e.audience}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PROGRAMS (SANITY + IMAGES) */}
      <section
        id="programs"
        className="max-w-6xl mx-auto px-6 py-20 space-y-10"
      >
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-semibold">
            Our Programs
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We offer a Christ-centered learning environment for children
            at every stage of early and elementary education.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p: any) => (
            <div
              key={p._id}
              className="rounded-xl bg-white border overflow-hidden shadow-sm"
            >
              {p.image && (
                <img
                  src={urlFor(p.image).width(600).height(400).url()}
                  alt={p.name}
                  className="h-48 w-full object-cover"
                />
              )}

              <div className="p-6">
                <h3 className="font-semibold text-lg">
                  {p.name}
                </h3>

                {p.summary && (
                  <p className="text-slate-600 mt-2">
                    {p.summary}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="tour"
        className="bg-blue-600 text-white"
      >
        <div className="max-w-6xl mx-auto px-6 py-24 text-center space-y-6">
          <h2 className="text-3xl font-semibold">
            Come See In His Steps Academy
          </h2>
          <p className="text-blue-100 max-w-xl mx-auto">
            We invite you to schedule a tour and experience our community,
            classrooms, and Christ-centered approach firsthand.
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
