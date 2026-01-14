import Link from 'next/link';
import { getProgramBySlug } from '@/sanity/lib/getProgramBySlug';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = await getProgramBySlug(slug);

  if (!program) return null;


  return (
    <main className="space-y-24">

      {/* HERO */}
      <section className="bg-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold">
              {program.name}
            </h1>

            {program.summary && (
              <p className="text-lg text-slate-600">
                {program.summary}
              </p>
            )}

            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700"
            >
              Schedule a Tour
            </Link>
          </div>

          {program.image && (
            <img
              src={urlFor(program.image).width(800).height(500).url()}
              alt={program.name}
              className="rounded-xl w-full object-cover"
            />
          )}
        </div>
      </section>

      {/* DETAILS */}
      {program.body && (
        <section>
          <div className="max-w-4xl mx-auto px-6 prose prose-slate max-w-none">
            <PortableText value={program.body} />
          </div>
        </section>
      )}

      {/* GALLERY */}
      {program.gallery?.length > 0 && (
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-20 space-y-6">
            <h2 className="text-2xl font-semibold">
              Life in This Program
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {program.gallery.map((img: any) => (
                <img
                  key={img._key}
                  src={urlFor(img).width(600).height(400).url()}
                  className="rounded-xl object-cover"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center space-y-6">
          <h2 className="text-3xl font-semibold">
            Ready to Learn More?
          </h2>
          <p className="text-blue-100 max-w-xl mx-auto">
            We would love to meet your family and show you what makes this program special.
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
