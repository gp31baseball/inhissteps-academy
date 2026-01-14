import { client } from '@/sanity/lib/client';

export async function getPrograms() {
  return client.fetch(`
    *[_type == "program"] | order(name asc) {
      _id,
      name,
      summary,
      image
    }
  `);
}
