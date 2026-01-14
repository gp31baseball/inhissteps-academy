import { getProgramBySlug } from '@/sanity/lib/getProgramBySlug';
import { urlFor } from '@/sanity/lib/image';

export default async function ProgramPage({ params }: { params: { slug: string } }) {
  const program = await getProgramBySlug(params.slug);

  if (!program) return null;

  return (
    <main className="max-w-4xl mx-auto px-6 py-20 space-y-12">
      {program.image && (
        <img
          src={urlFor(program.image).width(1200).height(600).url()}
          alt={program.name}
          className="rounded-xl w-full object-cover"
        />
      )}

      <div className="space-y-4">
        <h1 className="text-4xl font-semibold">{program.name}</h1>
        {program.summary && (
          <p className="text-lg text-slate-600">{program.summary}</p>
        )}
      </div>

      {program.body && (
        <div className="prose max-w-none">
          {program.body.map((block: any) => (
            <p key={block._key}>{block.children?.[0]?.text}</p>
          ))}
        </div>
      )}

      {program.gallery?.length > 0 && (
        <div className="grid md:grid-cols-3 gap-6 pt-12">
          {program.gallery.map((img: any) => (
            <img
              key={img._key}
              src={urlFor(img).width(600).height(400).url()}
              className="rounded-xl object-cover"
            />
          ))}
        </div>
      )}
    </main>
  );
}