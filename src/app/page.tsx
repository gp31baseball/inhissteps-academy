import { getAnnouncements } from '@/sanity/lib/getAnnouncements';


export default async function HomePage() {
  const announcements = await getAnnouncements();

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-semibold text-slate-900">
          In His Steps Academy
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          A Christ-centered education where children are known, loved,
          and guided to grow.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">
          This Week at In His Steps
        </h2>

        {announcements.length === 0 && (
          <p className="text-slate-500 italic">
            No announcements at this time.
          </p>
        )}

        <div className="grid gap-4">
          {announcements.map((a: any) => (
            <div
              key={a._id}
              className="rounded-lg border bg-white p-5 shadow-sm"
            >
              <h3 className="font-medium text-slate-900">{a.title}</h3>
              {a.body && (
                <p className="mt-2 text-slate-600">{a.body}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
