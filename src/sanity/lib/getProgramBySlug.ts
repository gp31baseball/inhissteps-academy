import { client } from '@/sanity/lib/client';

export async function getProgramBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "program" && slug.current == $slug][0]{
      name,
      summary,
      body,
      image,
      gallery
    }
    `,
    { slug }
  );
}
